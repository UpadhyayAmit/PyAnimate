import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Program ko modify karo apna naam aur favorite language print karne ke liye.',
  hint: 'print() ko string argument ke saath use karo. Text ke around quotes mat bhoolo.',
  explanation: {
    simple: {
      overview: 'Yaar, ye pehla program hai jo almost har programmer likhta hai. Bas screen pe "Hello, World!" print karta hai.',
      analogy: 'Jaise pehli baar kisi se milne par "Hi!" bolna — simple aur direct, communication ka pehla step.',
      steps: [
        'print() function call karo',
        '"Hello, World!" text pass karo',
        'Python text ko screen pe display kar deta hai',
      ],
      visual: 'print("Hello, World!")  ->  Hello, World!',
      commonMistakes: [
        'Text ke liye quotes bhool jana',
        'print aur Print — Python case-sensitive hai bhai',
      ],
      practice: [
        'Hello World ki jagah apna naam print karo',
        'Multiple print() se multiple lines dikhao',
      ],
    },
    deepDive: {
      overview: 'print() ek built-in function hai jo standard output mein likhta hai, default mein ek newline add karta hai end mein.',
      steps: [
        'print() internally sys.stdout.write() call karta hai',
        'end="\\n" se newline control karo',
        'sep=" " multiple arguments ke beech separator set karta hai',
        'flush=True se buffer force flush ho jaata hai',
      ],
      commonMistakes: [
        'print() aur return ka confusion — print display karta hai, return value wapas bhejta hai',
        'print() None return karta hai — yaad rakhna',
      ],
      practice: [
        'print(end="") se bina newline output karo',
        'print("a","b",sep=", ") try karo',
      ],
    },
  },
};

export default overlay;
