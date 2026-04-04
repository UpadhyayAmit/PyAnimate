import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Sirf do rolling variables se (list ke bina) pehle 15 Fibonacci numbers generate karo.',
  hint: 'prev aur curr track karo. Har step: new_curr = prev + curr, phir shift: prev = curr, curr = new_curr.',
  explanation: {
    simple: {
      overview: 'Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13... — har number pichle do ka sum. Nature mein bhi milta hai yaar.',
      analogy: 'Jaise rabbits multiply karte hain — har month pichle do months ke rabbits ka sum.',
      steps: [
        'a, b = 0, 1 se start karo',
        'n times loop mein a, b = b, a+b',
        'Tuple unpacking: a, b = b, a+b ek saath update karta hai',
        'nth Fibonacci: n iterations ke baad a value hai',
      ],
      visual: `def fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a

fib(7)  # 13`,
      commonMistakes: [
        'Ek ek karke update karna (a=b; b=a+b galat) — pehle a update hoga',
        'Off-by-one: fib(0)=0, fib(1)=1 sequence',
        'Large n ke liye integer overflow — Python mein nahi hota',
      ],
      practice: [
        'First 20 Fibonacci numbers print karo',
        'Check karo given number Fibonacci hai ya nahi',
      ],
    },
    deepDive: {
      overview: 'Matrix exponentiation se O(log n) Fibonacci possible hai — bade n ke liye critical.',
      steps: [
        'Iterative O(n) time O(1) space — best practical solution',
        'Matrix [[1,1],[1,0]]^n se O(log n) Fibonacci',
        'Fast doubling: F(2k) = F(k)[2F(k+1) - F(k)]',
        'Golden ratio: phi^n/sqrt(5) rounded integral Fibonacci hai',
      ],
      commonMistakes: [
        'Recursive Fibonacci O(2^n) — interview mein mat karo',
        'Large n pe float precision fail hota hai golden ratio approach mein',
      ],
      practice: [
        'Fast doubling algorithm se O(log n) Fibonacci implement karo',
        'Pisano period nikalo (Fibonacci mod m ki period)',
      ],
    },
  },
};

export default overlay;
