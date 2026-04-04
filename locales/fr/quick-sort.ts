import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Quick Sort',
  hint: 'Choisis un pivot, partitionne le tableau et trie récursivement.',
  approach: 'Choisissez un pivot, partitionnez les plus petits à gauche, les grands à droite, puis triez récursivement les deux moitiés.',
  useCases: [
    'Tri rapide en place à usage général',
    'Meilleur dans les apps pratiques (cache-friendly)',
    'Grands jeux de données aléatoires',
  ],
  explanation: {
    simple: {
      overview: 'Le tri rapide choisit un pivot, partitionne le tableau en éléments plus petits/plus grands, puis trie chaque partie récursivement.',
      analogy: 'Comme organiser des livres par taille : choisir un livre de référence, mettre les plus petits à gauche et les plus grands à droite, puis répéter.',
      steps: [
        'Choisir un pivot (premier, dernier ou aléatoire)',
        'Partitionner les éléments < pivot à gauche, > pivot à droite',
        'Appliquer récursivement à chaque partition',
        'Cas de base : 0 ou 1 élément',
      ],
      visual: `[3,6,8,10,1,2,1]
pivot=1: [1,1] + 1 + [3,6,8,10,2]
→ continue récursivement`,
      commonMistakes: [
        'Mauvais choix de pivot cause O(n²) sur données triées',
        'Pas de cas de base pour 0/1 élément',
      ],
      practice: [
        'Implémente le tri rapide avec un pivot aléatoire',
        'Trace les appels de partition',
      ],
      timeComplexity: 'O(n log n) moyen, O(n²) pire cas',
      spaceComplexity: 'O(log n) moyen'
    },
    deepDive: {
      overview: 'Le tri rapide avec pivot aléatoire a une espérance O(n log n) ; la partition à 3 voies (Dijkstra) gère efficacement les doublons.',
      steps: [
        'Pivot aléatoire : évite les cas dégénérés sur les données triées',
        'Partition de Dutch National Flag : éléments <, == et > pivot',
        'Tri rapide en place : O(log n) espace pile',
        'Médiane de 3 pour le choix de pivot',
      ],
      commonMistakes: [
        'Toujours choisir le premier/dernier élément comme pivot',
        'La récursion profonde cause StackOverflow sur de grands tableaux',
      ],
      practice: [
        'Implémente la partition de Dutch National Flag',
        'Compare différentes stratégies de choix de pivot',
      ],
    },
  },
};

export default overlay;
