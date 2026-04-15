// ── Core domain types ──────────────────────────────────────────

/** A category that groups learning content. */
export interface Category {
  slug: string;
  label: string;
}

/** A single flashcard term with its explanation. */
export interface Term {
  id: number;
  term: string;
  definition: string;
  category: string;
}

/** Daily learning statistics persisted in storage. */
export interface DailyStats {
  date: string;
  learned: number[];
  review: number[];
}

// ── Future-proof types for quiz / knowledge modes ──────────────

/** A multiple-choice quiz question (for future quiz mode). */
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  termId?: number; // optional link back to a Term
  category: string;
}

/** Generic learning-mode descriptor so we can register new modes. */
export interface LearningMode {
  id: string;
  label: string;
  icon: string; // lucide icon name
  description: string;
}
