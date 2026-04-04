import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '\'the cat sat on the mat the cat\' में हर word कितनी बार आता है count करें।',
  hint: 'Dictionary use करें। हर word के लिए: d[w] = d.get(w, 0) + 1।',
  explanation: {
    simple: {
      overview: 'Occurrences count karna: list ya string mein har element kitni baar aata hai yeh count karo.',
      analogy: 'Jaise paragraph mein har word ko count karo.',
      steps: [
        'Khaali dictionary banao',
        'Har element par loop karo',
        'Agar exist karta hai toh +1, warna 1 se initialize karo',
        'Ya collections.Counter use karo',
      ],
      visual: `lst = [1,2,2,3,3,3]
cnt = {}
for x in lst:
    cnt[x] = cnt.get(x,0)+1
# {1:1, 2:2, 3:3}`,
      commonMistakes: [
        '.get() ke bina [] se KeyError aata hai',
        'Counter initialize karna bhool jana',
      ],
      practice: [
        'String mein har character count karo',
        'Sabse zyada frequent element dhundo',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(k) k unique keys ke liye'
    },
    deepDive: {
      overview: 'collections.Counter dict ka subclass hai jo counting ke liye optimize hai, arithmetic operations support karta hai.',
      steps: [
        'Counter(iterable) O(n) mein build hota hai',
        'most_common(k) top-k frequent elements deta hai',
        'Counters ke beech add/subtract kar sakte hain',
        'elements() frequency ke hisaab se repeated elements ka iterator deta hai',
      ],
      commonMistakes: [
        'Counter hone ke bawajood khud implement karna',
        'Counter missing keys ke liye 0 return karta hai',
      ],
      practice: [
        'Counter.most_common(3) test karo',
        'Do Counters add karo aur result verify karo',
      ],
    },
  },
};

export default overlay;
