import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Insertion Sort समझें',
  hint: 'प्रत्येक element को sorted part में सही जगह डालें — nearly sorted data के लिए बेस्ट।',
  approach: 'हर element को उसकी correct sorted position पर insert करो, बाकी elements को right shift करके।',
  useCases: [
    'Nearly sorted data पर बहुत efficient (O(n))',
    'Real-time data जो one-by-one आता है उसे sort करना',
    'Small arrays के लिए simple और fast',
  ],
  explanation: {
    simple: {
      overview: 'Insertion sort har element ko already sorted part mein sahi jagah insert karta hai.',
      analogy: 'Jaise taash ke patte sort karne hain—naya patta sahi jagah insert karo.',
      steps: [
        'Index 1 se shuru karo',
        'Current element key mein store karo',
        'key se bade elements right mein shift karo',
        'Sahi jagah key insert karo',
      ],
      visual: `[5,3,4,1,2]
→[3,5,4,1,2]
→[3,4,5,1,2]
→[1,3,4,5,2]
→[1,2,3,4,5]`,
      commonMistakes: [
        'Comparison operator ki direction galat',
        'Outer loop 0 se shuru karna',
      ],
      practice: [
        'Key se tuple list sort karne ke liye modify karo',
        'Binary insertion sort se comparisons kam karo',
      ],
      timeComplexity: 'O(n²) worst, O(n) best',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Insertion sort stable, in-place aur chhoti arrays aur nearly sorted data ke liye better hai, Timsort ka component hai.',
      steps: [
        'Best case: sorted array O(n) comparisons',
        'Worst case: reverse sorted O(n²) shifts',
        'Average O(n²)—large n ke liye nahi',
        'Timsort O(n) runs par insertion sort use karta hai',
      ],
      commonMistakes: [
        'Chhoti arrays ke liye bhi complex algorithms use karna',
        'Stability important hone par ignore karna',
      ],
      practice: [
        'Bubble sort ke saath n=1000 par time compare karo',
        'Binary insertion sort implement karo',
      ],
    },
  },
};

export default overlay;
