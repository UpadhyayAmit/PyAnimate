import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'User से दो numbers मांगें और उनका sum, difference, और product print करें।',
  hint: 'input() हमेशा string return करता है। Math से पहले int() या float() से convert करें।',
  explanation: {
    simple: {
      overview: 'input() user se string read karta hai, print() output dikhata hai, int()/float() se convert karo.',
      analogy: 'input() sawaal poochna hai, print() jawab dena hai.',
      steps: [
        'input("prompt: ") se input lo',
        'Result hamesha string hota hai',
        'int() ya float() se convert karo',
        'print() se result dikhao',
      ],
      visual: `naam = input("Naam: ")
umar = int(input("Umar: "))
print(f"Namaste {naam}, tum {umar} saal ke ho.")`,
      commonMistakes: [
        'Input ko int/float mein convert karna bhool jana',
        'Non-numeric input par ValueError',
        'Python 2 style print bina brackets ke',
      ],
      practice: [
        'input() se simple calculator banao',
        'Multiple numbers read karke average calculate karo',
      ],
    },
    deepDive: {
      overview: 'File I/O ke liye context manager wala open(), streams ke liye sys.stdin/stdout.',
      steps: [
        'open(file,mode): \'r\',\'w\',\'a\',\'rb\' binary ke liye',
        'with open(...)as f se file properly close hoti hai',
        'sys.stdin.readline() competitive input ke liye',
        'print(...,file=sys.stderr) se error output karo',
      ],
      commonMistakes: [
        'with ke bina file descriptor leak ho sakta hai',
        'Poori file ek saath load karna vs line by line',
      ],
      practice: [
        'with open se text file line by line padho',
        'Results CSV file mein likho',
      ],
    },
  },
};

export default overlay;
