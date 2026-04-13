import { useState, useEffect, useCallback } from "react";
import { terms, type Term } from "@/data/terms";

interface DailyStats {
  date: string;
  learned: number[];
  review: number[];
}

const STORAGE_KEY = "mx-flashcards";

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function loadStats(): DailyStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as DailyStats;
      if (parsed.date === getTodayKey()) return parsed;
    }
  } catch {}
  return { date: getTodayKey(), learned: [], review: [] };
}

function saveStats(stats: DailyStats) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

export function useFlashcards() {
  const [stats, setStats] = useState<DailyStats>(loadStats);
  const [deck, setDeck] = useState<Term[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Build deck: terms not yet learned today
  useEffect(() => {
    const remaining = terms.filter((t) => !stats.learned.includes(t.id));
    // Shuffle
    const shuffled = [...remaining].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
  }, [stats.learned.length]); // rebuild when learned changes

  const currentCard = deck[currentIndex] ?? null;
  const isFinished = deck.length === 0;

  const markLearned = useCallback(() => {
    if (!currentCard) return;
    const next: DailyStats = {
      ...stats,
      learned: [...stats.learned, currentCard.id],
      review: stats.review.filter((id) => id !== currentCard.id),
    };
    setStats(next);
    saveStats(next);
  }, [currentCard, stats]);

  const markReview = useCallback(() => {
    if (!currentCard) return;
    if (!stats.review.includes(currentCard.id)) {
      const next = { ...stats, review: [...stats.review, currentCard.id] };
      setStats(next);
      saveStats(next);
    }
    // Move to next card
    setCurrentIndex((i) => i + 1);
  }, [currentCard, stats]);

  const skip = useCallback(() => {
    if (!currentCard) return;
    setCurrentIndex((i) => i + 1);
  }, [currentCard]);

  const resetToday = useCallback(() => {
    const fresh: DailyStats = { date: getTodayKey(), learned: [], review: [] };
    setStats(fresh);
    saveStats(fresh);
  }, []);

  return {
    currentCard,
    isFinished,
    total: terms.length,
    learnedCount: stats.learned.length,
    reviewCount: stats.review.length,
    remaining: deck.length - currentIndex,
    markLearned,
    markReview,
    skip,
    resetToday,
  };
}
