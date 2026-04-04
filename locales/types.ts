export type LessonExplanationBlock = {
  overview: string;
  analogy?: string;
  steps: string[];
  visual?: string;
  commonMistakes: string[];
  practice: string[];
  timeComplexity?: string;
  spaceComplexity?: string;
};

export type LessonExplanation = {
  simple: LessonExplanationBlock;
  deepDive: LessonExplanationBlock;
};

export type LessonLocaleOverlay = {
  prompt?: string;
  hint?: string;
  approach?: string;
  useCases?: string[];
  executionFrames?: Array<{ summary: string; why: string }>;
  explanation?: LessonExplanation;
};

export type LocaleOverlayMap = Record<string, LessonLocaleOverlay>;
