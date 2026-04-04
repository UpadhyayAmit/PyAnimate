import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'While loop se 1-10 tak numbers print karo, phir unka sum print karo.',
  hint: 'Counter variable rakho aur har iteration mein update karo.',
  explanation: {
    simple: {
      overview: 'while loop tab tak chalti rehti hai jab tak condition True hai. Jaise "jab tak kaam baaki hai, karte raho".',
      analogy: 'Jaise college mein attendance tab tak leni hai jab tak sab present na ho jaayein.',
      steps: [
        'while condition: likho',
        'Loop body mein kaam karo',
        'Loop variable update karo (warna infinite loop!)',
        'break se beech mein niklo, continue se skip karo',
      ],
      visual: `i = 0
while i < 5:
    print(i)
    i += 1`,
      commonMistakes: [
        'Loop variable update karna bhool jaana — infinite loop ho jaata hai',
        'Off-by-one errors — < aur <= mein confusion',
      ],
      practice: [
        '1 se 100 tak ke numbers ka sum while loop se nikalo',
        'User input tab tak lo jab tak valid na ho',
      ],
    },
    deepDive: {
      overview: 'while loop control flow ke liye base hai — iterators, generators, aur event loops sab iske upar build hain.',
      steps: [
        'while-else: else tab run hota hai jab condition False ho (break nahi)',
        'break loop immediately todta hai',
        'continue current iteration skip karta hai',
        'Infinite loops intentionally bhi use hote hain servers mein',
      ],
      commonMistakes: [
        'while-else aur try-except mein confusion',
        'Loop body mein mutable default argument use karna',
      ],
      practice: [
        'while-else se prime number check karo',
        'Binary search while loop se banao',
      ],
    },
  },
};

export default overlay;
