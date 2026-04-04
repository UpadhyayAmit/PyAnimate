import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Nested loops se multiplication table (1-5) ko formatted grid mein print karo.',
  hint: 'Outer loop rows ke liye, inner columns ke liye. Tab spacing ke liye print(end=\'\\t\') use karo.',
  explanation: {
    simple: {
      overview: 'Loop patterns explore karo — nested loops, break/continue, aur loop with index. Ye patterns har jagah kaam aate hain.',
      analogy: 'Jaise ek city explore karna — pehle main roads (outer loop), phir galiyan (inner loop).',
      steps: [
        'Nested loops se 2D patterns print karo',
        'break se loop immediately exit karo',
        'continue se current iteration skip karo',
        'enumerate() se index aur value saath mein lo',
      ],
      visual: `for i in range(3):
    for j in range(3):
        print(i, j)  # 0,0 -> 0,1 -> ... -> 2,2`,
      commonMistakes: [
        'Nested loop complexity — O(n^2) ya O(n^3) ho sakta hai',
        'break sirf innermost loop todta hai',
        'continue next iteration pe jaata hai, loop end nahi karta',
      ],
      practice: [
        'Multiplication table nested loop se print karo',
        'First prime number > 100 while-break se find karo',
      ],
    },
    deepDive: {
      overview: 'Loop optimization — early exit, lazy evaluation, aur vectorization large data ke liye critical hai.',
      steps: [
        'else clause: loop bina break ke complete hone par run hota hai',
        'itertools.product() se nested loops replace karo',
        'List comprehension nested loops se faster compiled',
        'Generator expressions memory efficient hain',
      ],
      commonMistakes: [
        'for-else ka matlab "loop complete hua" hai, "no iteration" nahi',
        'Deeply nested loops — function extract karo',
      ],
      practice: [
        'for-else se target find karo, nahi mila toh report karo',
        'itertools.product() se 3D coordinates generate karo',
      ],
    },
  },
};

export default overlay;
