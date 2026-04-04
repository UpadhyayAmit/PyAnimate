import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Fruits की list पर loop करें और enumerate() से हर item index के साथ print करें।',
  hint: 'enumerate(list) (index, value) pairs देता है। for statement में unpack करें।',
  explanation: {
    simple: {
      overview: 'for loop sequence (list, string, range) ke har element par code execute karta hai.',
      analogy: 'Jaise kitaab ke pages palte hain—end tak ek ek karke process karo.',
      steps: [
        'for element in sequence: likho',
        'Element har value ek ek karke leta hai',
        'Har element par code execute hota hai',
        'Numbers ke liye range() use karo',
      ],
      visual: `for i in range(5):
    print(i)
# 0 1 2 3 4`,
      commonMistakes: [
        'Loop mein list modify karna',
        'range(5) 0-4 hai aur range(1,6) 1-5 hai',
        'range(len()) se index out of range ho sakta hai',
      ],
      practice: [
        'List ke saare elements ka sum karo',
        'Nested for se multiplication table print karo',
      ],
    },
    deepDive: {
      overview: 'for loop iterator protocol use karta hai, enumerate(), zip() aur list comprehension isko extend karte hain.',
      steps: [
        'enumerate() se index aur value dono lo',
        'zip() se multiple iterables parallel mein traverse karo',
        'List comprehension for loop ka syntactic sugar hai',
        'iter() aur next() se manually control karo',
      ],
      commonMistakes: [
        'enumerate() ki jagah for i in range(len(lst)) use karna',
        'Loop variable loop ke baad bhi exist karta hai (scope leak)',
      ],
      practice: [
        'for loop ko list comprehension mein convert karo',
        'zip() se do lists parallel mein traverse karo',
      ],
    },
  },
};

export default overlay;
