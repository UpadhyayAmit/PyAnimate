import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Edges: (A-B,4), (A-C,2), (B-C,1), (B-D,5), (C-D,8) का MST ढूंढें।',
  hint: 'Edges को weight से sort करें। Cycle detect करने के लिए Union-Find use करें।',
  explanation: {
    simple: {
      overview: 'Kruskal\'s algorithm greedily ascending weight order mein edges add karke Minimum Spanning Tree (MST) banata hai.',
      analogy: 'Jaise sabse saste cables se saare cities connect karna—sabse saste se start karo, cycles avoid karo.',
      steps: [
        'Saari edges weight ke ascending order mein sort karo',
        'Minimum weight edge lo',
        'Agar cycle nahi banata (Union-Find) toh MST mein add karo',
        'V-1 edges hone tak repeat karo',
      ],
      visual: `Edges: (1,2,1)(1,3,3)(2,3,2)(3,4,4)
Sorted: 1,2,3,4
Add: (1,2,1)→(2,3,2)→(3,4,4)
MST weight=7`,
      commonMistakes: [
        'Union-Find ke bina cycle detect karna',
        'V-1 edges par rukna bhool jana',
      ],
      practice: [
        'Path compression aur union by rank wala Union-Find implement karo',
        'Kruskal\'s aur Prim\'s MST compare karo',
      ],
      timeComplexity: 'O(E log E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'Union-Find cycle detection O(α) ke karib, sparse graphs ke liye Kruskal, dense ke liye Prim.',
      steps: [
        'Union by rank + path compression O(1) ke karib karta hai',
        'E log E sorting bottleneck hai (sparse graphs)',
        'Prim\'s heap se adjacent vertices track karta hai O(E log V)',
        'Boruvka\'s algorithm parallel MST ke liye alternative',
      ],
      commonMistakes: [
        'Path compression ke bina Union-Find O(n) per operation',
        'Edges sort kiye bina add karna',
      ],
      practice: [
        'Complete Union-Find (path compression + union by rank) implement karo',
        'Minimum spanning forest nikalo',
      ],
    },
  },
};

export default overlay;
