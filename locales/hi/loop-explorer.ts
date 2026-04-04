import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Nested loops से multiplication table (1-5) को formatted grid में print करें।',
  hint: 'Outer loop rows के लिए, inner columns के लिए। Tab spacing के लिए print(end=\'\\t\') use करें।',
  explanation: {
    simple: {
      overview: 'Loop exploration: alag conditions aur control flow ke saath iteration handle karna.',
      analogy: 'Jaise shehar mein explore karna—streets skip kar sakte hain, wapis aa sakte hain, destination par ruk sakte hain.',
      steps: [
        'for kaafi baar iterate karne ke liye',
        'while dynamic conditions ke liye',
        'break se early exit karo',
        'continue se current element skip karo',
      ],
      visual: `for i in range(10):
    if i % 2 == 0:
        continue  # even skip
    if i > 7:
        break     # 7 par stop
    print(i)  # 1 3 5 7`,
      commonMistakes: [
        'break aur continue ka confusion',
        'Condition update bhool jana → infinite loop',
      ],
      practice: [
        'Range mein pehla prime dhundo',
        'continue se FizzBuzz implement karo',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Python loops else, enumerate() aur zip() support karte hain jo iteration zyada expressive banata hai.',
      steps: [
        'for-else/while-else: break ke bina end hone par else chalega',
        'enumerate(lst, start=1) se 1 se index start karo',
        'any()/all() iterables par boolean check',
        'itertools.islice() lazy slicing ke liye',
      ],
      commonMistakes: [
        'for-else ko if-else se related samajhna',
        'Complex loop patterns ke liye itertools ignore karna',
      ],
      practice: [
        'for-else se linear search implement karo',
        'itertools.chain() se multiple lists traverse karo',
      ],
    },
  },
};

export default overlay;
