import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Integers की list दी है, n/3 से अधिक बार appear करने वाले सभी elements ढूंढें।',
  hint: 'पहले frequency dictionary बनाएं। फिर वो keys filter करें जहाँ count > len(arr)//3।',
  explanation: {
    simple: {
      overview: 'Hash map counting: O(1) average lookup se elements count aur track karna.',
      analogy: 'Jaise attendance sheet—har naam (key) kitni baar sign in hua (value) track karo.',
      steps: [
        'Khaali dictionary banao',
        'Har element par iterate karo',
        'Exist karta hai toh +1, warna 1 se initialize karo',
        '.get(key,0) se KeyError se bachao',
      ],
      visual: `words = ["cat","bat","cat","hat"]
counts = {}
for w in words:
    counts[w] = counts.get(w,0)+1
# {"cat":2,"bat":1,"hat":1}`,
      commonMistakes: [
        'Existence check ke bina dict[key] use karna',
        'Counter ke baare mein nahi jaanna',
      ],
      practice: [
        '1 se n+1 ke integers array mein missing number dhundo',
        'Duplicates ko first aur re-occurrence mein classify karo',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Python dictionary hash table hai: average O(1) insert/lookup/delete, collision par worst O(n).',
      steps: [
        'Python 3.7+ dictionaries insertion order maintain karte hain',
        'defaultdict(int) se .get() ki zaroorat nahi',
        'collections.Counter common counting operations optimize karta hai',
        'frozenset aur tuple dict keys ban sakte hain, list nahi',
      ],
      commonMistakes: [
        'Nested dict ke liye defaultdict(int) ki jagah defaultdict(dict)',
        'set aur dict ka fark bhool jana',
      ],
      practice: [
        'defaultdict se word frequency counter implement karo',
        'Hash map se sum equal to k subarray count karo',
      ],
    },
  },
};

export default overlay;
