import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'scores = [85, 92, 78, 96, 88, 73] का sum और average निकालें। Average से ऊपर score करने वाले identify करें।',
  hint: 'पहले सब sum करें, count से divide करके average निकालें। List comprehension से filter करें।',
  explanation: {
    simple: {
      overview: 'List ka sum saare elements jodna hai, average total ko count se divide karna hai.',
      analogy: 'Jaise bill split karna—saara bill jodo phir logo ki sankhya se divide karo.',
      steps: [
        'sum(list) ya loop se sum karo',
        'len(list) se divide karke average nikalein',
        'Khaali list mein zero division se bachein',
        'Statistical average ke liye statistics.mean() use karo',
      ],
      visual: `nums = [10, 20, 30, 40]
total = sum(nums)   # 100
avg = total / len(nums)  # 25.0`,
      commonMistakes: [
        'Khaali list mein zero division error',
        '// integer division se integer average milta hai',
      ],
      practice: [
        'Ek loop mein average, min, max nikalo',
        'Moving average calculate karo',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'statistics.mean() Fraction/Decimal accurately handle karta hai, math.fsum() floating point errors se bachata hai.',
      steps: [
        'sum() optional start parameter leta hai',
        'math.fsum() precise cumulative addition karta hai',
        'statistics.median(), statistics.stdev()',
        'numpy.mean() large numerical arrays ke liye',
      ],
      commonMistakes: [
        'Float sum() precision kho sakta hai',
        'Asymmetric distributions mein mean ≠ median',
      ],
      practice: [
        'sum() aur math.fsum() floats ke saath compare karo',
        'statistics.stdev() se standard deviation calculate karo',
      ],
    },
  },
};

export default overlay;
