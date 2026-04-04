import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Counting Sort को समझें',
  hint: 'छोटी range के integers को O(n+k) में sort करें — frequency count का उपयोग।',
  approach: 'Input values को count array में count करो, फिर counts से sorted output reconstruct करो।',
  useCases: [
    'Small range के integers sort करना (जैसे grades 0-100)',
    'Radix sort का base algorithm',
    'जब O(n+k) possible हो O(n log n) की जगह',
  ],
  explanation: {
    simple: {
      overview: 'Counting sort har value ki occurrences count karke sort karta hai—limited range integers ke liye.',
      analogy: 'Jaise election votes count karo phir order mein list karo.',
      steps: [
        'Size max-min+1 ka count array banao',
        'Har element count karo',
        'Counts ko cumulative sum mein convert karo',
        'Elements output array mein place karo aur decrement karo',
      ],
      visual: `[4,2,2,8,3,3,1]
count[1]=1,count[2]=2,count[3]=2...
→[1,2,2,3,3,4,8]`,
      commonMistakes: [
        'Negative numbers ke liye offset handle nahi karna',
        'Large range values par space waste',
      ],
      practice: [
        'Lowercase letters string ka counting sort karo',
        'Ek pass mein max aur min dono nikalo',
      ],
      timeComplexity: 'O(n + k) k range ke liye',
      spaceComplexity: 'O(k)'
    },
    deepDive: {
      overview: 'Counting sort O(n+k) aur stable hai, Radix sort d digits n elements ke liye O(d(n+k)) implement karta hai.',
      steps: [
        'Cumulative count stability ensure karta hai',
        'Radix sort har digit par counting sort apply karta hai',
        'Offset ke liye max aur min use karo',
        'Strings sort karne ke liye bhi use ho sakta hai',
      ],
      commonMistakes: [
        'Jab k large ho (space problem)',
        'Stable counting sort ke liye prefix sum step reverse karna',
      ],
      practice: [
        'Radix sort se 0-999 array sort karo',
        'Three-digit integers ke liye counting sort stability verify karo',
      ],
    },
  },
};

export default overlay;
