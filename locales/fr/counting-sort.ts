import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Counting Sort',
  hint: 'Trie des entiers dans un petit intervalle en O(n+k) par comptage de fréquences.',
  approach: 'Comptez les valeurs d\'entrée dans un tableau de comptage, puis reconstruisez la sortie triée à partir des comptages.',
  useCases: [
    'Tri d\'entiers dans une petite plage (notes 0-100)',
    'Algorithme de base pour Radix Sort',
    'Quand O(n+k) est possible au lieu de O(n log n)',
  ],
  explanation: {
    simple: {
      overview: 'Le tri comptage compte les occurrences de chaque valeur, puis reconstruit le tableau trié — pas de comparaisons.',
      analogy: 'Comme compter combien d\'étudiants ont chaque note (A, B, C...) puis les lister par note.',
      steps: [
        'Trouve la valeur maximale k',
        'Crée un tableau compteur de taille k+1',
        'Compte les occurrences de chaque valeur',
        'Reconstruit le tableau trié depuis les compteurs',
      ],
      visual: `entrée=[4,2,2,8,3,3,1]
compteur:[0,1,2,2,1,0,0,0,1]
sortie:[1,2,2,3,3,4,8]`,
      commonMistakes: [
        'Utiliser pour des valeurs négatives ou des floats sans adaptation',
        'Gaspillage de mémoire quand k est très grand',
      ],
      practice: [
        'Trie les notes des étudiants avec le tri comptage',
        'Adapte pour les entiers négatifs',
      ],
      timeComplexity: 'O(n + k)',
      spaceComplexity: 'O(k)'
    },
    deepDive: {
      overview: 'Le tri comptage est utilisé comme sous-routine dans le tri radix ; les compteurs préfixés rendent la version stable.',
      steps: [
        'Somme cumulative des compteurs pour la version stable',
        'Le tri radix utilise le tri comptage sur chaque chiffre',
        'Non adapté quand k >> n (plage de valeurs trop grande)',
        'Le tri par compartiments est une généralisation pour les floats',
      ],
      commonMistakes: [
        'Oublier la somme cumulative pour une sortie stable',
        'Utiliser le tri comptage quand la plage de valeurs est vaste',
      ],
      practice: [
        'Implémente le tri comptage stable avec sums cumulatives',
        'Construis le tri radix en utilisant le tri comptage',
      ],
    },
  },
};

export default overlay;
