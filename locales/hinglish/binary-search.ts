import type { LessonLocaleOverlay } from '../types';

const binarySearch: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Binary Search sorted array ko half-half cut karke target dhoondhta hai.',
      analogy: 'Dictionary me word dhoondhne jaisa: beech kholo, left ya right decide karo, repeat karo.',
      steps: [
        'low = 0 aur high = n - 1 se start karo.',
        'mid = (low + high) // 2 nikalo.',
        'Agar arr[mid] == target ho to mid return karo.',
        'Agar target chhota ho to high = mid - 1 karo.',
        'Warna low = mid + 1 karo, jab tak low <= high.',
      ],
      visual: '[1 3 5 7 9] -> mid 5 -> target bada -> right side -> 7 mil gaya.',
      commonMistakes: [
        'low/high update ke baad mid dubara calculate nahi karna.',
        'while me < use karna instead of <=.',
        'mid = (low + high) kuch languages me overflow kar sakta hai.',
      ],
      practice: [
        '7 elements wale array par present aur absent target ka trace banao.',
        'Not found case me insertion index return karo.',
        'Explain karo ki unsorted array par binary search kyu fail hoti hai.',
      ],
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Binary Search monotonic condition par divide-and-conquer hai; har comparison half range hata deta hai.',
      analogy: 'Decision tree jiska height approx log2(n) hota hai.',
      steps: [
        'Inclusive bounds [low, high] maintain karo.',
        'mid = low + ((high - low) >> 1) overflow-safe hai.',
        'arr[mid] ke basis par correct half choose karo.',
        'Invariant: target exist karta hai to [low, high] ke andar hi rahega.',
        'low > high hone par stop; insertion point low hota hai.',
      ],
      visual: '[0..n-1] -> left half ya right half -> phir se same process.',
      commonMistakes: [
        'low = mid ya high = mid likhna, infinite loop create hota hai.',
        'duplicates ke liye first/last occurrence rule define na karna.',
        'sorted precondition ignore karna.',
      ],
      practice: [
        'lower_bound aur upper_bound implement karo.',
        'loop invariant ka short proof likho.',
        'rotated sorted array ke liye modified binary search banao.',
      ],
      timeComplexity: 'Theta(log n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default binarySearch;
