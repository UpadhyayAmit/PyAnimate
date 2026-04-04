import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Merge Sort',
  hint: 'Divise, trie récursivement et fusionne — toujours O(n log n).',
  approach: 'Divisez récursivement le tableau en moitiés jusqu\'à des éléments seuls, puis fusionnez les moitiés triées.',
  useCases: [
    'Grands jeux de données sur disque (tri externe)',
    'Trier des listes chaînées',
    'Où un tri stable est requis',
  ],
  explanation: {
    simple: {
      overview: 'Le tri fusion divise le tableau en deux moitiés, trie chacune récursivement, puis les fusionne.',
      analogy: 'Comme diviser un jeu de cartes en deux piles, trier chaque pile, puis les fusionner en comparant les cartes du dessus.',
      steps: [
        'Divise le tableau en deux moitiés',
        'Trie récursivement chaque moitié',
        'Fusionne les deux moitiés triées',
        'Cas de base : tableau de 0 ou 1 élément',
      ],
      visual: `[38,27,43,3,9,82]
→ [38,27,43] | [3,9,82]
→ [27,38,43] | [3,9,82]
→ [3,9,27,38,43,82]`,
      commonMistakes: [
        'Oublier le cas de base',
        'Logique de fusion incorrecte — gérer les éléments restants',
      ],
      practice: [
        'Implémente le tri fusion et trace les appels récursifs',
        'Utilise le tri fusion pour trier des fichiers qui ne tiennent pas en mémoire',
      ],
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Le tri fusion est stable et garanti O(n log n) ; le tri fusion en place existe mais est complexe à implémenter.',
      steps: [
        'Stable : idéal pour trier des structures complexes par plusieurs clés',
        'La variante Bottom-up évite la récursion (meilleur pour la pile)',
        'Fusion externe : algorithme standard pour le tri sur disque',
        'Python list.sort() utilise Timsort, dérivé du tri fusion',
      ],
      commonMistakes: [
        'Allouer de nouveaux tableaux dans chaque fusion (coûteux)',
        'Confusion entre tri en place et tri externe',
      ],
      practice: [
        'Implémente le tri fusion itératif (Bottom-up)',
        'Fusionne k listes triées en utilisant heapq.merge()',
      ],
    },
  },
};

export default overlay;
