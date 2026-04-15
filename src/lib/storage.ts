import type { DailyStats } from "@/types";
import { STORAGE_KEYS } from "@/types/constants";

function getTodayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export function loadDailyStats(): DailyStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.flashcards);
    if (raw) {
      const parsed = JSON.parse(raw) as DailyStats;
      if (parsed.date === getTodayKey()) return parsed;
    }
  } catch {
    // corrupt data – start fresh
  }
  return { date: getTodayKey(), learned: [], review: [] };
}

export function saveDailyStats(stats: DailyStats): void {
  localStorage.setItem(STORAGE_KEYS.flashcards, JSON.stringify(stats));
}
