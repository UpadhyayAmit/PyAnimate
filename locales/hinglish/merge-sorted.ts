import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '[1, 3, 5, 7] aur [2, 4, 6, 8] ko sort() use kiye bina ek sorted array mein merge karo.',
  hint: 'Two pointers (i, j) use karo. arr1[i] vs arr2[j] compare karo, smaller append karo, pointer advance karo.',
  explanation: {
    simple: {
      overview: 'Do sorted lists ko ek sorted list mein merge karna — merge sort ka core step.',
      analogy: 'Jaise do sorted book shelves ko ek sorted shelf mein merge karna.',
      steps: [
        'Dono lists ke current elements compare karo',
        'Chhota element result mein add karo',
        'Uss list ka pointer aage badhao',
        'Remaining elements directly add karo',
      ],
      visual: `[1,3,5] + [2,4,6]
Compare 1,2 -> take 1
Compare 3,2 -> take 2
... -> [1,2,3,4,5,6]`,
      commonMistakes: [
        'Ek list exhaust hone ke baad remaining add karna bhool jaana',
        'Both lists empty check at start',
        'Pointers correctly advance karna',
      ],
      practice: [
        'Do sorted arrays merge karo',
        'Sorted linked lists merge karo',
      ],
    },
    deepDive: {
      overview: 'heapq.merge() lazy iterator hai — multiple sorted iterables ko O(n log k) mein merge karta hai.',
      steps: [
        'Two-pointer approach O(n+m) time O(n+m) space',
        'heapq.merge() k lists ke liye O(n log k)',
        'In-place merge: sorted array mein dusra insert karo O(n*m)',
        'Sorted arrays mein binary search se insertion O(log n)',
      ],
      commonMistakes: [
        'heapq.merge() lazy hai — list() call karo consume karne ke liye',
        'In-place merge complexity — usually extra space prefer karo',
      ],
      practice: [
        'K sorted arrays merge karo heap se',
        'Sorted array mein ek element insert karo binary search se',
      ],
    },
  },
};

export default overlay;
