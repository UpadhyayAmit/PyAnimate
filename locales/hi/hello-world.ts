import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Program को modify करें ताकि यह आपका नाम और favorite language print करे।',
  hint: 'print() को string argument के साथ use करें। Text के around quotes लगाना न भूलें।',
  explanation: {
    simple: {
      overview: 'Hello World program pehla program hai jo zyaadatar programmers likhte hain. Yah sirf screen par "Hello, World!" print karta hai.',
      analogy: 'Jaise pehli baar kisi se milte hain—seedha aur simple, communication ka pehla kadam.',
      steps: [
        'print() function call karo',
        '"Hello, World!" text pass karo',
        'Python text ko screen par display karta hai',
      ],
      visual: 'print("Hello, World!")  →  Hello, World!',
      commonMistakes: [
        'Text ke liye quotes bhool jana',
        'print aur Print—Python case-sensitive hai',
      ],
      practice: [
        'Hello World ki jagah apna naam print karo',
        'Multiple print() se multiple lines print karo',
      ],
    },
    deepDive: {
      overview: 'print() ek built-in function hai jo standard output mein likhta hai, default mein end mein newline add karta hai.',
      steps: [
        'print() internally sys.stdout.write() call karta hai',
        'end="\\n" parameter se newline control karo',
        'sep=" " multiple arguments ke beech separator',
        'flush=True se buffer force flush karo',
      ],
      commonMistakes: [
        'print() aur return ka confusion—print display karta hai, return value return karta hai',
        'Bhool jana ki print() None return karta hai',
      ],
      practice: [
        'print(end="") se bina newline output karo',
        'print("a","b",sep=", ") se multiple values print karo',
      ],
    },
  },
};

export default overlay;
