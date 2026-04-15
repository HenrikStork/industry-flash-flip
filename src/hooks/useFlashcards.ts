import { useState, useEffect, useCallback } from "react";
import { terms } from "@/data/terms";
import type { Term, DailyStats } from "@/types";
import { loadDailyStats, saveDailyStats } from "@/lib/storage";

export function useFlashcards() {
  const [stats, setStats] = useState<DailyStats>(loadDailyStats);
  const [deck, setDeck] = useState<Term[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Build deck: terms not yet learned today
  useEffect(() => {
    const remaining = terms.filter((t) => !stats.learned.includes(t.id));
    const shuffled = [...remaining].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
  }, [stats.learned.length]);

  const currentCard = deck[currentIndex] ?? null;
  const isFinished = deck.length === 0;

  const updateStats = useCallback((next: DailyStats) => {
    setStats(next);
    saveDailyStats(next);
  }, []);

  const markLearned = useCallback(() => {
    if (!currentCard) return;
    updateStats({
      ...stats,
      learned: [...stats.learned, currentCard.id],
      review: stats.review.filter((id) => id !== currentCard.id),
    });
  }, [currentCard, stats, updateStats]);

  const markReview = useCallback(() => {
    if (!currentCard) return;
    if (!stats.review.includes(currentCard.id)) {
      updateStats({ ...stats, review: [...stats.review, currentCard.id] });
    }
    setCurrentIndex((i) => i + 1);
  }, [currentCard, stats, updateStats]);

  const skip = useCallback(() => {
    if (!currentCard) return;
    setCurrentIndex((i) => i + 1);
  }, [currentCard]);

  const resetToday = useCallback(() => {
    updateStats({ date: new Date().toISOString().slice(0, 10), learned: [], review: [] });
  }, [updateStats]);

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
