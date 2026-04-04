import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Selection Sort समझें',
  hint: 'हर pass में minimum ढूंढो और उसे सही position पर swap करो।',
  approach: 'हर iteration में unsorted portion से minimum element ढूंढो और उसे sorted portion के end में swap करो।',
  useCases: [
    'Small datasets में simple sorting',
    'In-place sorting जब memory limited हो',
    'Concepts सिखाने के लिए क्योंकि algorithm सबसे clear है',
  ],
  explanation: {
    simple: {
      overview: 'Selection sort baar baar unsorted part mein minimum nikalta hai aur first element se swap karta hai.',
      analogy: 'Jaise sports team ko height se arrange karna—sabse chhote ko aage rakho, repeat karo.',
      steps: [
        'Unsorted part mein minimum nikalо',
        'Unsorted part ke first element se swap karo',
        'Unsorted boundary ek right shift karo',
        'Repeat jab tak saare sorted nahi',
      ],
      visual: `[64,25,12,22,11]
→[11,25,12,22,64]
→[11,12,25,22,64]
→[11,12,22,25,64]`,
      commonMistakes: [
        'Minimum ka index aur minimum value ka confusion',
        'Boundary update bhool jana',
      ],
      practice: [
        'Descending order selection sort implement karo',
        'Comparisons aur swaps count karo',
      ],
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Selection sort O(n) swaps karta hai—write-heavy memory ke liye useful, lekin unstable.',
      steps: [
        'O(n) swaps—insertion sort ke O(n²) se kam',
        'Unstable: equal elements ka order badal sakta hai',
        'Comparisons hamesha O(n²)—input par depends nahi',
        'Hamesha O(n²), early termination nahi',
      ],
      commonMistakes: [
        'Yeh sochna ki hamesha insertion sort se better hai (aisa nahi)',
        'Instability se bugs aa sakte hain',
      ],
      practice: [
        'Same key elements se instability demonstrate karo',
        'Minimum writes important hone wale scenarios dhundo',
      ],
    },
  },
};

export default overlay;
