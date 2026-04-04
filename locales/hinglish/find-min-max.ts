import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '[34, 7, 23, 32, 5, 62] mein min() aur max() bina use kiye single pass mein min aur max dhundho.',
  hint: 'min_val aur max_val dono ko first element se initialize karo, phir baaki compare karo.',
  explanation: {
    simple: {
      overview: 'List mein sabse chhota (min) ya sabse bada (max) element dhundhna — common problem hai.',
      analogy: 'Jaise class mein sabse tall aur sabse short student dhundhna.',
      steps: [
        'min(list) aur max(list) built-in functions use karo',
        'Manual: pehle element assume karo min/max, loop se compare karo',
        'key parameter se custom comparison: min(lst, key=len)',
      ],
      visual: `nums = [3, 1, 4, 1, 5, 9, 2]
min(nums)  # 1
max(nums)  # 9
min(["apple", "hi"], key=len)  # "hi"`,
      commonMistakes: [
        'Empty list mein min()/max() call — ValueError aata hai',
        'min() string pe character-wise compare karta hai, numerically nahi',
      ],
      practice: [
        'Student grades mein topper aur flunker find karo',
        'Dictionary mein max value wali key nikalo',
      ],
    },
    deepDive: {
      overview: 'min()/max() single pass O(n) mein kaam karte hain, key function lambda se powerful banta hai.',
      steps: [
        'min(iterable, default=0) empty case handle karta hai',
        'heapq.nsmallest(k, lst) top-k efficiently deta hai',
        'Multiple criteria: min(lst, key=lambda x: (x[1], x[0]))',
        'numpy arrays mein np.min() vectorized hai',
      ],
      commonMistakes: [
        'min() aur sorted()[0] same result — lekin min() faster O(n) vs O(n log n)',
        'Custom objects compare karna bina __lt__ implement kiye',
      ],
      practice: [
        'Top-3 students find karo heapq se',
        'Dictionary values ke hisaab se key sort karo',
      ],
    },
  },
};

export default overlay;
