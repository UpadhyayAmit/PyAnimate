import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implement FizzBuzz for 1–30. Extend it: add \'Bazz\' for multiples of 7.',
  hint: 'Check 3 and 5 together first (FizzBuzz), then individually. Add the 7 case similarly.',
  explanation: {
    simple: {
      overview: 'Print 1..n; replace multiples of 3 with Fizz, multiples of 5 with Buzz, both with FizzBuzz.',
      analogy: 'A children\'s counting game with special words replacing certain numbers.',
      steps: [
          'Loop i from 1 to n.',
          'if i%15==0: FizzBuzz (check combined first!).',
          'elif i%3==0: Fizz.',
          'elif i%5==0: Buzz.',
          'else: print i.',
      ],
      visual: '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz',
      commonMistakes: [
          'Checking 3 and 5 before 15 (15 would be caught by 3 and print just \'Fizz\').',
          'Using i%3==0 and i%5==0 in elif chain instead of checking 15 first.',
      ],
      practice: [
          'Generalize to FizzBuzzJazz for multiples of 7.',
          'Build a version that takes a list of (divisor, word) pairs.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'FizzBuzz string building pattern avoids elif chains and scales to any number of rules.',
      analogy: 'Building a string: concatenate each applicable word, default to the number if the string is empty.',
      steps: [
          'result = \'\'',
          'for each (divisor, word) in rules: if i % divisor == 0: result += word',
          'print(result or str(i))',
          'This scales to any number of rules without rewriting conditionals.',
      ],
      visual: 'rules=[(3,\'Fizz\'),(5,\'Buzz\'),(7,\'Jazz\')]; i=105 → \'FizzBuzzJazz\'',
      commonMistakes: [
          'Over-engineering with lambdas for a trivial problem.',
          'Forgetting to print the number when no rule matches.',
      ],
      practice: [
          'Implement the dict-rule version and extend to 100 rules.',
          'Write a generator that yields FizzBuzz values lazily.',
      ],
    },
  },
};

export default overlay;
