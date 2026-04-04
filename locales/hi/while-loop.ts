import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'While loop से 1-10 तक numbers print करें, फिर उनका sum print करें।',
  hint: 'Counter variable रखें और हर iteration में update करें। counter > 10 होने पर stop करें।',
  explanation: {
    simple: {
      overview: 'while loop tab tak code execute karta hai jab tak condition True hai.',
      analogy: 'Jaise squats karna—jab tak ho sake karo, thak jaao tab ruko.',
      steps: [
        'while condition: likho',
        'Condition True hone par execute hota hai',
        'Variable update karo taaki condition eventually False ho',
        'break se early exit kar sakte hain',
      ],
      visual: `n = 1
while n <= 5:
    print(n)
    n += 1
# 1 2 3 4 5`,
      commonMistakes: [
        'Variable update bhool jana → infinite loop',
        'while ke baad colon bhool jana',
        'Condition logic galat likhna',
      ],
      practice: [
        'while se number guessing game banao',
        'while se kisi number ke digits count karo',
      ],
    },
    deepDive: {
      overview: 'while-else, continue/break ka usage aur infinite loop patterns.',
      steps: [
        'while-else: agar break nahi hua toh else chalega',
        'continue se next iteration skip karo',
        'break se puri loop exit karo',
        'while True pattern do-while implement karta hai',
      ],
      commonMistakes: [
        'while-else aur try-except alag hain',
        'break ko galat loop ke bahar rakhna',
      ],
      practice: [
        'while-else se linear search implement karo',
        'while True se interactive menu banao',
      ],
    },
  },
};

export default overlay;
