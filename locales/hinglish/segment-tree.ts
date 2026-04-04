import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '[1,3,5,7,9,11] ke liye segment tree build karo. Index 1-3 ka sum query karo, phir index 2 ko 10 update karo.',
  hint: 'Bottom-up build karo. Range ko recursively split karke query karo. Update upward propagate hota hai.',
  explanation: {
    simple: {
      overview: 'Segment tree range queries (sum, min, max) O(log n) mein handle karta hai — brute force O(n) tha.',
      analogy: 'Jaise company hierarchy — CEO pe total report, VP pe division report — query efficiently answer karo.',
      steps: [
        'Array se tree build karo — bottom-up',
        'Internal node = children ka aggregate (sum/min/max)',
        'Query: relevant ranges combine karo',
        'Update: leaf update karo, path propagate karo',
      ],
      visual: `arr = [1,3,5,7,9,11]
Tree root = sum(all) = 36
[1+3+5=9, 7+9+11=27]
[1+3=4, 5, 7+9=16, 11]`,
      commonMistakes: [
        '1-indexed vs 0-indexed tree — consistent raho',
        'Lazy propagation — range updates ke liye zaroori',
        'Tree size 4*n rakho safe side ke liye',
      ],
      practice: [
        'Sum segment tree banao aur range queries karo',
        'Range minimum query implement karo',
      ],
    },
    deepDive: {
      overview: 'Lazy propagation se range updates O(log n) hote hain — segment tree trees par bhi work karta hai.',
      steps: [
        'Build O(n), Query O(log n), Update O(log n)',
        'Lazy propagation: range update defer karo',
        'Persistent segment tree: versions maintain karo',
        'Segment tree beats: complex aggregates',
      ],
      commonMistakes: [
        'Lazy tag propagation push down karna bhool jaana',
        'Non-associative operations — segment tree sirf associative ke liye',
      ],
      practice: [
        'Lazy propagation range update implement karo',
        'Count of range inversions segment tree se nikalo',
      ],
    },
  },
};

export default overlay;
