import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '[1, 2, 3, 4, 5] ko two pointers se in-place reverse karo. list.reverse() ya slicing mat use karo.',
  hint: 'left=0, right=len-1 se shuru karo. arr[left] aur arr[right] swap karo, dono andar ki taraf move karo.',
  explanation: {
    simple: {
      overview: 'List ko ulta karna — last element pehle, pehla last. Simple problem, multiple solutions.',
      analogy: 'Jaise stack of plates ulta karna — neeche wali pehle aati hai.',
      steps: [
        'list.reverse() in-place reverse karta hai',
        'reversed(list) iterator return karta hai',
        'Slicing: list[::-1] new reversed list banata hai',
        'Loop se manually swap karo',
      ],
      visual: `nums = [1, 2, 3, 4, 5]
nums[::-1]    # [5, 4, 3, 2, 1] new list
nums.reverse() # in-place`,
      commonMistakes: [
        'reverse() None return karta hai — reversed_list = lst.reverse() galat hai',
        '[::-1] new list banata hai, original same rehti hai',
        'String reverse karna — strings immutable hain, [::-1] use karo',
      ],
      practice: [
        'String ko reverse karo',
        'Check karo ki list palindrome hai ya nahi',
      ],
    },
    deepDive: {
      overview: 'In-place reverse O(n/2) swaps karta hai, [::-1] O(n) space leta hai — trade-off samjho.',
      steps: [
        'Two-pointer approach: left aur right swap karte jaao',
        'reversed() lazy iterator hai — list nahi banata',
        'deque.reverse() doubly linked list mein O(n)',
        'numpy arrays mein np.flip() vectorized reverse',
      ],
      commonMistakes: [
        'Large list mein [::-1] memory peak double ho sakti hai',
        'Linked list reverse iterative better than recursive (stack overflow)',
      ],
      practice: [
        'Two-pointer se in-place reverse implement karo',
        'Words ka order reverse karo, letters nahi',
      ],
    },
  },
};

export default overlay;
