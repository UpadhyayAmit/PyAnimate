import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'scores = [85, 92, 78, 96, 88, 73] ka sum aur average nikalo. Average se upar score karne wale identify karo.',
  hint: 'Pehle sab sum karo, count se divide karo. Phir list comprehension se filter karo.',
  explanation: {
    simple: {
      overview: 'Numbers ki list ka total (sum) aur average nikalna — statistics ka basic foundation.',
      analogy: 'Jaise exam ke marks add karo aur class ka average nikalo.',
      steps: [
        'sum(list) se total nikalo',
        'Average = sum / len(list)',
        'len() se count lo',
        'Empty list check karo (division by zero!)',
      ],
      visual: `marks = [85, 92, 78, 95, 88]
total = sum(marks)       # 438
avg = total / len(marks) # 87.6`,
      commonMistakes: [
        'Empty list mein sum/len — ZeroDivisionError aata hai',
        'Integer division // use karna floating average ke liye',
        'sum() sirf numbers ke liye, strings ke liye nahi',
      ],
      practice: [
        'Student marks ka average nikalo',
        'Running average calculate karo as elements aate jaate hain',
      ],
    },
    deepDive: {
      overview: 'statistics module mein mean(), median(), mode() built-in hain, large datasets ke liye numpy use karo.',
      steps: [
        'math.fsum() se float precision better hoti hai',
        'statistics.mean() vs sum()/len() — same result different precision',
        'numpy.mean() vectorized aur faster for arrays',
        'Cumulative sum: itertools.accumulate()',
      ],
      commonMistakes: [
        'Floating point accumulation errors large sums mein',
        'statistics functions empty sequence pe ValueError',
      ],
      practice: [
        'Welford online algorithm se running mean implement karo',
        'itertools.accumulate() se cumulative sum banao',
      ],
    },
  },
};

export default overlay;
