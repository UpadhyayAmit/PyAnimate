import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'User se do numbers maango aur unka sum, difference, aur product print karo.',
  hint: 'input() hamesha string return karta hai. Math se pehle int() ya float() se convert karo.',
  explanation: {
    simple: {
      overview: 'input() se user se data lo, print() se display karo — ye basic I/O hai Python ka.',
      analogy: 'input() ek question box hai jisme user jawab likhta hai, print() ek announcer hai jo sab ko sunata hai.',
      steps: [
        'name = input("Naam batao: ") se input lo',
        'input() hamesha string return karta hai',
        'int(input()) se number convert karo',
        'print(f"Hello {name}") se display karo',
      ],
      visual: `name = input("Naam? ")      # user types: Alice
age = int(input("Umar? ")) # user types: 25
print(f"{name} ki umar {age} hai")`,
      commonMistakes: [
        'input() number nahi, string return karta hai — convert karna padega',
        'int() conversion mein invalid input se ValueError aata hai',
        'print() aur input() dono newline differently handle karte hain',
      ],
      practice: [
        'User se naam aur age lo, greet karo',
        'Calculator banao — do numbers lo, operation karo',
      ],
    },
    deepDive: {
      overview: 'sys.stdin/stdout directly access karna faster hota hai competitive programming mein.',
      steps: [
        'sys.stdin.readline() faster than input() for large data',
        'print(flush=True) output buffer force karta hai',
        'File I/O: open(), read(), write(), close()',
        'Context manager: with open("file") as f:',
      ],
      commonMistakes: [
        'File close karna bhool jaana — use with statement',
        'Binary vs text mode confusion (\'rb\' vs \'r\')',
        'Encoding issues — explicitly utf-8 specify karo',
      ],
      practice: [
        'File se lines padho aur word count nikalo',
        'sys.stdin se fast input competitive style mein lo',
      ],
    },
  },
};

export default overlay;
