import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '[1, 2, 3, 4, 5] को two pointers से in-place reverse करें। list.reverse() या slicing mat use करें।',
  hint: 'left=0, right=len-1 से शुरू करें। arr[left] और arr[right] swap करें, दोनों अंदर की तरफ move करें।',
  explanation: {
    simple: {
      overview: 'List reverse karna: elements ko ulta order mein arrange karna.',
      analogy: 'Jaise taash ki guthi palтना—aakhri card pehla ban jata hai.',
      steps: [
        'Method 1: list.reverse() in-place reverse',
        'Method 2: list[::-1] naya list banata hai',
        'Method 3: reversed() iterator return karta hai',
        'Manually: two pointers se swap karo',
      ],
      visual: `lst = [1,2,3,4,5]
lst[::-1] → [5,4,3,2,1]
lst.reverse() → in-place modify`,
      commonMistakes: [
        '.reverse() (in-place) aur [::-1] (new) ka confusion',
        'reversed() list nahi iterator return karta hai',
      ],
      practice: [
        'Slicing se string reverse karo',
        'List palindrome hai ya nahi check karo',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1) in-place, O(n) slicing'
    },
    deepDive: {
      overview: 'list.reverse() O(n) time O(1) space in-place, [::-1] slice O(n) naya list.',
      steps: [
        'In-place: [0,n-1],[1,n-2]... swap karo',
        'reversed() list_reverseiterator object return karta hai',
        'String: "".join(reversed(s)) ya s[::-1]',
        'Large data ke liye lazy reversed() efficient hai',
      ],
      commonMistakes: [
        'Sirf traversal ke liye [::-1] memory waste karta hai',
        'Reverse karte waqt list modify karna',
      ],
      practice: [
        'list.reverse() aur slicing ka performance compare karo',
        'Two pointers se in-place reverse implement karo',
      ],
    },
  },
};

export default overlay;
