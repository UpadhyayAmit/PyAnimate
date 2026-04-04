import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Sorted array [1,3,6,8,10] पर two pointers use करके वो pairs ढूंढें जिनका sum 11 हो।',
  hint: 'left=0, right=len-1 से start करें। sum < target तो left right; sum > target तो right left।',
  explanation: {
    simple: {
      overview: 'Two pointers do indices use karte hain, sorted arrays ke problems ek pass mein solve karte hain.',
      analogy: 'Jaise detective book ke dono ends se ek saath padhna condition satisfy karne wali pair dhundne ke liye.',
      steps: [
        'left ko start, right ko end par set karo',
        'Dono pointers milne tak loop karo',
        'Condition check karo aur answer update karo',
        'Condition ke hisaab se left badhao ya right ghatao',
      ],
      visual: `[1,2,3,4,6] target=9
left=0(1),right=4(6)→sum=7<9→left++
left=1(2),right=4(6)→sum=8<9→left++
left=2(3),right=4(6)→sum=9→found!`,
      commonMistakes: [
        'Unsorted array par use karna',
        'Pointers advance karne ki condition galat likhna',
      ],
      practice: [
        'Sorted array ke liye Two Sum implement karo',
        'Duplicate array mein 3Sum ke saare pairs nikalo',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Two pointers O(n) nested loop O(n²) se better hai, sliding window bhi isi pattern hai.',
      steps: [
        'Same direction: fast/slow (cycle detection)',
        'Opposite: sum target/palindrome check',
        'In-place array modification (remove+compact)',
        'Container with most water (LeetCode #11)',
      ],
      commonMistakes: [
        'Sorted assumption wale two pointers unsorted array par use karna',
        'Left aur right kab move karna confusion',
      ],
      practice: [
        'Two pointers se 3Sum implement karo',
        'O(n) mein trapping rain water solve karo',
      ],
    },
  },
};

export default overlay;
