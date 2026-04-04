import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '\'the cat sat on the mat the cat\' mein har word kitni baar aata hai count karo.',
  hint: 'Dictionary use karo: d[w] = d.get(w, 0) + 1.',
  explanation: {
    simple: {
      overview: 'Kisi list ya string mein koi element kitni baar aaya — ye count karna hai. Seedha use case: frequency count.',
      analogy: 'Jaise class mein check karo kitne bacche same naam ke hain.',
      steps: [
        'list.count(x) directly count karta hai',
        'Dictionary se manually count karo loop mein',
        'Counter se collections se efficient counting',
      ],
      visual: `nums = [1, 2, 2, 3, 2, 1]
nums.count(2)  # 3

from collections import Counter
Counter(nums)  # {2: 3, 1: 2, 3: 1}`,
      commonMistakes: [
        'Case sensitivity — "A" aur "a" alag count hote hain',
        'Nested list mein count() sirf top level dekhta hai',
      ],
      practice: [
        'Sentence mein sabse zyada aane wala word find karo',
        'List mein duplicates find karo counting se',
      ],
    },
    deepDive: {
      overview: 'Counter O(n) time mein sab elements count karta hai, most_common() top-k elements deta hai.',
      steps: [
        'Counter(iterable) O(n) mein sab count karta hai',
        'counter.most_common(k) top k elements deta hai',
        'Counter + Counter se counts add hote hain',
        'defaultdict(int) se manual counting efficient',
      ],
      commonMistakes: [
        'Nested data structures ke liye Counter directly kaam nahi karta',
        'Counter subtract negative counts create kar sakta hai',
      ],
      practice: [
        'most_common() se top-3 repeated words nikalo',
        'Two Counters subtract karke difference nikalo',
      ],
    },
  },
};

export default overlay;
