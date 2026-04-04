import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '5 numbers ki list banao. 99 append karo, smallest hatao, phir sorted print karo.',
  hint: 'append(), remove(), aur sorted() use karo. min() function smallest value dhundta hai.',
  explanation: {
    simple: {
      overview: 'List Python ka sabse flexible data structure hai — ordered, mutable, aur mixed types allow karta hai.',
      analogy: 'List ek numbered dabba hai — pehle dabbon mein pehli cheez, aur easily add/remove kar sakte ho.',
      steps: [
        'Square brackets mein items daalo: [1, 2, 3]',
        'Index se access karo: list[0] pehla element',
        'append() se end mein add karo',
        'remove() ya pop() se delete karo',
      ],
      visual: `fruits = ["apple", "banana", "cherry"]
fruits[0]    # "apple"
fruits[-1]   # "cherry"
fruits[1:3]  # ["banana", "cherry"]`,
      commonMistakes: [
        'Index 0 se shuru hota hai, 1 se nahi',
        'Negative index — -1 last element hai',
        'Slice end exclusive hai: [1:3] mein index 3 nahi aata',
      ],
      practice: [
        'Shopping list banao aur items add/remove karo',
        'List ko reverse karo bina built-in use kiye',
      ],
    },
    deepDive: {
      overview: 'List internally dynamic array hai — reallocation O(n) amortized append deta hai.',
      steps: [
        'list.sort() in-place sort karta hai, sorted() new list banata hai',
        'list * n shallow copy se n times repeat karta hai',
        'copy() shallow copy, deepcopy() nested ke liye',
        'list comprehension [x*2 for x in lst if x>0] concise filtering',
      ],
      commonMistakes: [
        'a = b = [] — dono same object point karte hain',
        'sort() aur sorted() ka confusion',
        'Mutable default argument in functions',
      ],
      practice: [
        'List comprehension se odd numbers filter karo',
        'Two lists ko zip kar ke dict banao',
      ],
    },
  },
};

export default overlay;
