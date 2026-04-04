import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '[34, 7, 23, 32, 5, 62] में min() और max() बिना use किए single pass में min और max ढूंढें।',
  hint: 'min_val और max_val दोनों को first element से initialize करें, फिर बाकी compare करें।',
  explanation: {
    simple: {
      overview: 'Min/Max dhundna: collection mein sabse chhota aur sabse bada element nikalna.',
      analogy: 'Jaise students ki line mein sabse chhota aur sabse lamba student dhundna.',
      steps: [
        'Pehle element se min aur max initialize karo',
        'Baaki elements par loop karo',
        'Agar current element min se chhota hai toh min update karo',
        'Agar current element max se bada hai toh max update karo',
      ],
      visual: `nums = [3,1,4,1,5,9]
min_val = nums[0]
for n in nums[1:]:
    if n < min_val:
        min_val = n
# min_val = 1`,
      commonMistakes: [
        '0 se min/max initialize karna (pehle element se karo)',
        'Khaali list handle karna bhool jana',
      ],
      practice: [
        'Built-in ke bina manually min/max nikalo',
        'Doosra sabse bada element nikalo',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Python ka min()/max() key= parameter accept karta hai, kisi bhi iterable par kaam karta hai.',
      steps: [
        'min(lst, key=len) key function use karta hai',
        'zip() se ek hi loop mein min aur max nikalo',
        'heapq.nsmallest/nlargest top-k ke liye',
        'numpy.argmin/argmax arrays ke liye',
      ],
      commonMistakes: [
        'Built-in min()/max() hone ke bawajood loop likhna',
        'min([]) ValueError throw karta hai',
      ],
      practice: [
        'min() ke key= se tuple list handle karo',
        'Min+max dono ek saath nikalne ka 3n/2 comparisons algorithm implement karo',
      ],
    },
  },
};

export default overlay;
