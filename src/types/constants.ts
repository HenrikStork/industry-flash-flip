import type { LearningMode } from "@/types";

/** Storage keys – single source of truth for localStorage keys. */
export const STORAGE_KEYS = {
  flashcards: "mx-flashcards",
} as const;

/** Registered learning modes for future tab/route generation. */
export const LEARNING_MODES: LearningMode[] = [
  {
    id: "flashcards",
    label: "Lernkarten",
    icon: "Layers",
    description: "Begriffe im Tinder-Stil lernen",
  },
  // Future: { id: "quiz", label: "Quiz", icon: "HelpCircle", ... }
];
