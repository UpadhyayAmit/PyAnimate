import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '1-30 के लिए FizzBuzz implement करें। Extend करें: 7 के multiples के लिए \'Bazz\' add करें।',
  hint: 'पहले 3 और 5 दोनों check करें (FizzBuzz), फिर individually। 7 case similarly add करें।',
  explanation: {
    simple: {
      overview: 'FizzBuzz: 1 se n tak print karo, 3 ke multiples ko "Fizz", 5 ke multiples ko "Buzz", dono ke multiples ko "FizzBuzz" se replace karo.',
      analogy: 'Jaise bacho ka counting game jisme kuch numbers ki jagah words bolte hain.',
      steps: [
        '1 se n tak loop karo',
        '3 aur 5 dono ke multiples ko "FizzBuzz" print karo',
        '3 ke multiples ko "Fizz" print karo',
        '5 ke multiples ko "Buzz" print karo',
        'Baaki numbers print karo',
      ],
      visual: `1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz
11 Fizz 13 14 FizzBuzz 16...`,
      commonMistakes: [
        'Pehle 3 aur 5 check karna 15 miss kar sakta hai',
        'if/elif/else ka order important hai',
      ],
      practice: [
        'Extend karo: 7 ke multiples ke liye "Bazz" add karo',
        'Print karne ki jagah list return karo',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'String concatenation method multiple checks se bachata hai, interview warm-up question hai.',
      steps: [
        'Concatenation: result=""; agar %3 toh Fizz add karo; agar %5 toh Buzz add karo',
        'Dictionary method: {0:"FizzBuzz",3:"Fizz",5:"Buzz"}',
        'Generator large ranges ke liye',
        'Concise version: one-liner list comprehension',
      ],
      commonMistakes: [
        'Naive implementation mein condition order problem (15 pehle check karo)',
        'Function version mein return bhool jana',
      ],
      practice: [
        'String concatenation method se FizzBuzz implement karo',
        'Infinite range ke liye generator version likho',
      ],
    },
  },
};

export default overlay;
