import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Integers ki list di hai, n/3 se zyada baar appear karne wale elements dhundho.',
  hint: 'Pehle frequency dictionary banao. Phir wo keys filter karo jahan count > len(arr)//3.',
  explanation: {
    simple: {
      overview: 'Hash map (dict) se elements count karo — O(1) lookup aur insert se O(n) total counting possible.',
      analogy: 'Jaise attendance register — student ka naam key, count value.',
      steps: [
        'Empty dict {} se start karo',
        'Loop mein: d[key] = d.get(key, 0) + 1',
        'Ya collections.Counter use karo directly',
        'dict.items() se frequency pairs iterate karo',
      ],
      visual: `words = ["apple","banana","apple","cherry","banana","apple"]
from collections import Counter
Counter(words)  # {"apple": 3, "banana": 2, "cherry": 1}`,
      commonMistakes: [
        'KeyError — d[key] += 1 seedha error deta hai agar key nahi ho',
        'defaultdict(int) ya .get(key, 0) use karo',
        'Counter negative counts support karta hai — unexpected ho sakta hai',
      ],
      practice: [
        'Most frequent element find karo',
        'Two arrays ka intersection find karo counting se',
      ],
    },
    deepDive: {
      overview: 'Python dict average O(1) insert/lookup deta hai — hash collisions worst case O(n) par rare hain.',
      steps: [
        'dict aur Counter dono hash tables internally',
        'Counter.most_common(k) heap se O(n log k)',
        'setdefault() vs defaultdict vs get() — choose wisely',
        'OrderedDict insertion order guarantee karta hai (Python 3.7+ dict bhi)',
      ],
      commonMistakes: [
        'Mutable objects (list) as dict keys — TypeError aayega',
        'Hash table load factor — Python resize at 2/3 capacity',
      ],
      practice: [
        'Top-k frequent elements nikalo',
        'Subarray with sum equal to k hash map se solve karo',
      ],
    },
  },
};

export default overlay;
