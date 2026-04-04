import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Fruits ki list par loop karo aur enumerate() se har item index ke saath print karo.',
  hint: 'enumerate(list) (index, value) pairs deta hai. For statement mein unpack karo.',
  explanation: {
    simple: {
      overview: 'for loop kisi bhi sequence (list, string, range) ke upar iterate karta hai. Python ka ye sabse popular loop hai.',
      analogy: 'Jaise roll call mein ek-ek karke har student ka naam pukaarna.',
      steps: [
        'for item in sequence: likho',
        'Body mein item use karo',
        'range() se numbers iterate karo',
        'enumerate() se index bhi saath mein milti hai',
      ],
      visual: `for i in range(5):
    print(i)  # 0,1,2,3,4

for char in "hello":
    print(char)`,
      commonMistakes: [
        'Loop ke andar sequence modify karna',
        'range(n) 0 se n-1 tak hai, n tak nahi',
        'Loop variable loop ke baad bhi accessible hoti hai Python mein',
      ],
      practice: [
        'List ke squares print karo for loop se',
        'String mein vowels count karo',
      ],
    },
    deepDive: {
      overview: 'for loop Python mein iterator protocol use karta hai — __iter__ aur __next__ methods.',
      steps: [
        'for x in obj internally iter(obj) call karta hai',
        'zip() se multiple sequences parallel iterate karo',
        'enumerate(seq, start=1) se custom start index',
        'List comprehension for loop ka powerful shorthand hai',
      ],
      commonMistakes: [
        'Iterating while modifying — RuntimeError aa sakta hai',
        'Generator exhaust hone ke baad reuse try karna',
      ],
      practice: [
        'zip() se do lists merge karo dict mein',
        'Nested list comprehension se 2D matrix flat karo',
      ],
    },
  },
};

export default overlay;
