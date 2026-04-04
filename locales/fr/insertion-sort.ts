import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Insertion Sort',
  hint: 'Insère chaque élément à sa bonne position dans la partie triée.',
  approach: 'Insérez chaque élément à sa bonne position en décalant les autres vers la droite.',
  useCases: [
    'Très efficace sur données presque triées',
    'Trier des données en temps réel arrivant une par une',
    'Simple et rapide pour petits tableaux',
  ],
  explanation: {
    simple: {
      overview: 'Le tri par insertion construit la liste triée un élément à la fois en insérant chaque élément à sa position correcte.',
      analogy: 'Comme trier des cartes dans ta main — tu prends une carte et tu la glisses à la bonne position parmi les cartes déjà triées.',
      steps: [
        'Commence avec le deuxième élément',
        'Compare avec les éléments précédents',
        'Décale les éléments plus grands vers la droite',
        'Insère à la bonne position',
      ],
      visual: `[5,2,4,6,1,3]
→ [2,5,4,6,1,3]
→ [2,4,5,6,1,3]
→ [1,2,4,5,6,3]
→ [1,2,3,4,5,6]`,
      commonMistakes: [
        'Oublier le cas de liste vide ou un seul élément',
        'Ne pas décaler les éléments avant d\'insérer',
      ],
      practice: [
        'Implémente le tri par insertion et trace chaque étape',
        'Compare avec le tri à bulles sur des entrées presque triées',
      ],
      timeComplexity: 'O(n²) pire cas, O(n) meilleur cas',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Le tri par insertion est adaptatif (O(n) sur des données presque triées) et en ligne — il peut trier les données à la volée.',
      steps: [
        'Adaptatif : O(n+d) où d est le nombre d\'inversions',
        'Stable : maintient l\'ordre relatif des éléments égaux',
        'En ligne : peut traiter les éléments à leur arrivée',
        'Utilisé par Timsort pour les petits blocs (< 64 éléments)',
      ],
      commonMistakes: [
        'Utiliser le tri par insertion pour les grandes listes (O(n²))',
        'Confondre stable vs instable dans les algorithmes de tri',
      ],
      practice: [
        'Mesure le temps d\'exécution sur des données triées vs aléatoires',
        'Implémente avec la recherche binaire (tri par insertion binaire)',
      ],
    },
  },
};

export default overlay;
