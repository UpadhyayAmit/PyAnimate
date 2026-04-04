import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '5 numbers की list बनाएं। 99 append करें, smallest हटाएं, फिर sorted print करें।',
  hint: 'append(), remove(), और sorted() use करें। min() function smallest value ढूंढता है।',
  explanation: {
    simple: {
      overview: 'List ordered collection hai, koi bhi type store kar sakti hai, mutable hai—modify ho sakti hai.',
      analogy: 'List shopping list ki tarah hai: ordered, duplicates allowed, aasaani se add/remove.',
      steps: [
        'Banao: my_list = [1, 2, 3]',
        'Access: my_list[0] returns 1',
        'Add: my_list.append(4)',
        'Delete: my_list.remove(2) ya my_list.pop()',
      ],
      visual: `nums = [10, 20, 30]
nums[0] → 10
nums[-1] → 30
nums[1:] → [20, 30]`,
      commonMistakes: [
        'Out of range access IndexError',
        'list.sort() (in-place) aur sorted(list) ka confusion',
        'List variable reference hai, assignment shallow copy hai',
      ],
      practice: [
        'reverse() ke bina list reverse karo',
        'List mein maximum aur second maximum nikalon',
      ],
    },
    deepDive: {
      overview: 'Python list dynamic array hai, 1.125x growth factor se expand hoti hai. Slicing naya list return karti hai.',
      steps: [
        'append O(1) amortized; insert(0,x) O(n) hai',
        'Slice a[i:j] O(k) naya copy hai',
        'list.sort() Timsort hai—stable O(n log n)',
        'Head insertion ke liye collections.deque zyada efficient hai',
      ],
      commonMistakes: [
        'Loop mein insert(0,x) → O(n²)',
        'copy() shallow hai—nesting ke liye deepcopy chahiye',
      ],
      practice: [
        'append aur insert(0,x) ka performance compare karo',
        'Slicing se list rotate karo',
      ],
    },
  },
};

export default overlay;
