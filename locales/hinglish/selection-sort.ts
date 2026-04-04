import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Selection Sort',
  hint: 'Har pass mein minimum dhundho aur usse sahi position par swap karo.',
  approach: 'Har iteration mein unsorted portion mein se minimum element dhundo aur use sorted portion ke end mein swap karo.',
  useCases: [
    'Small datasets mein simple sorting',
    'Memory limited ho to in-place sorting',
    'Algorithm clear hone ki wajah se concepts sikhane ke liye',
  ],
  explanation: {
    simple: {
      overview: 'Selection sort: puri unsorted list mein minimum dhundhna aur front pe place karna repeatedly.',
      analogy: 'Jaise race ke baad winners announce karo — pehle 1st place, phir 2nd, phir 3rd...',
      steps: [
        'Unsorted portion ka minimum find karo',
        'Usse sorted portion ke end se swap karo',
        'Sorted portion ka boundary ek aage badhao',
        'n-1 passes mein complete',
      ],
      visual: `[64, 25, 12, 22, 11]
-> [11, 25, 12, 22, 64] (11 swap with 64)
-> [11, 12, 25, 22, 64] (12 swap with 25)`,
      commonMistakes: [
        'Ek pass mein sirf ek swap hoti hai',
        'Already minimum pe swap mat karo (optimization)',
        'n-1 passes kaafi hain, nth already sorted',
      ],
      practice: [
        'Selection sort implement karo',
        'Minimum swaps se sort karo (selection sort optimal swaps)',
      ],
    },
    deepDive: {
      overview: 'Selection sort O(n^2) comparisons aur O(n) swaps karta hai — jo swap-heavy operations mein better hai.',
      steps: [
        'Always O(n^2) — best, worst, average same',
        'Unstable sort — equal elements order change ho sakti hai',
        'Useful jab write operations expensive hain (flash memory)',
        'Heapsort selection sort ka O(n log n) improvement hai',
      ],
      commonMistakes: [
        'Sochna ki selection sort stable hai — nahi hai by default',
        'Performance optimization ke liye heapsort prefer karo',
      ],
      practice: [
        'Selection sort stable banana — stable version implement karo',
        'Selection sort pe passes count karo',
      ],
    },
  },
};

export default overlay;
