import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '[1, 3, 5, 7, 9, 11] के लिए segment tree build करें। Index 1-3 का sum query करें, फिर index 2 को 10 update करें।',
  hint: 'Bottom-up build करें। Range को recursively split करके sum query करें। Update upward propagate होता है।',
  explanation: {
    simple: {
      overview: 'Segment tree data structure hai jo O(log n) range queries (min/max/sum) aur O(log n) point updates support karta hai.',
      analogy: 'Jaise sub-departments wali organizational hierarchy—root se kisi bhi department ki stats track kar sakte hain.',
      steps: [
        'Subarray sum/min/max store karne wala tree build karo',
        'Node i: children 2i (left) aur 2i+1 (right)',
        'Query: range contain karne wale children par recurse karo',
        'Point update: leaf update karo aur upar propagate karo',
      ],
      visual: `arr=[1,3,2,7,9,11]
Nodes: [33,11,22,4,7,20,2,1,3,2,7,9,11]
sum(2,5)=2+7+9+11=29`,
      commonMistakes: [
        'Array size: 4*n safe hai (2n kuch cases mein insufficient)',
        'Index offset (1-based vs 0-based) confusion',
      ],
      practice: [
        'Sum segment tree implement karo',
        'Lazy propagation se range update implement karo',
      ],
      timeComplexity: 'O(log n) query aur update',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Lazy propagation segment tree O(log n) range updates, BIT (Fenwick tree) sirf sums ke liye simpler.',
      steps: [
        'Lazy propagation: node pending updates temporarily hold karta hai',
        'pushdown: lazy values children tak propagate karo',
        'BIT/Fenwick tree: sirf sums ke liye simpler',
        'Persistent segment tree: historical states preserve karta hai',
      ],
      commonMistakes: [
        'Lazy nodes ka pushdown bhool jana',
        'BIT jo solve kar sake use ke liye segment tree overengineering',
      ],
      practice: [
        'Lazy propagation range add+range sum implement karo',
        'BIT aur lazy segment tree compare karo',
      ],
    },
  },
};

export default overlay;
