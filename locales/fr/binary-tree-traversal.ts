import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implémentez le parcours en ordre, pré-ordre et post-ordre d\'un arbre binaire.',
  hint: 'La récursion est naturelle ici. En-ordre: gauche→nœud→droite. Pré: nœud→gauche→droite.',
  explanation: {
    simple: {
      overview: 'Le parcours d\'arbre binaire visite tous les nœuds dans un ordre spécifique : en ordre (gauche-racine-droite), pré-ordre ou post-ordre.',
      analogy: 'Comme lire un livre : pré-ordre = du haut en bas, en-ordre = ordre alphabétique, post-ordre = feuilles d\'abord.',
      steps: [
        'En-ordre : gauche → racine → droite (donne les BST triés)',
        'Pré-ordre : racine → gauche → droite',
        'Post-ordre : gauche → droite → racine',
        'Par niveau : BFS sur l\'arbre',
      ],
      visual: `    4
   / \\
  2   6
 / \\ / \\
1  3 5  7
En-ordre: 1,2,3,4,5,6,7`,
      commonMistakes: [
        'Confondre les trois ordres de parcours',
        'Ne pas gérer les cas de None/nœud feuille',
      ],
      practice: [
        'Implémente les trois parcours de manière récursive et itérative',
        'Vérifie si un BST est valide en utilisant le parcours en-ordre',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(h) où h est la hauteur'
    },
    deepDive: {
      overview: 'Les parcours itératifs utilisent des piles ; le parcours de Morris atteint O(1) d\'espace en modifiant temporairement l\'arbre.',
      steps: [
        'Itératif en-ordre : utiliser une pile, aller à gauche jusqu\'à la fin',
        'Parcours par niveau : BFS avec une file',
        'Parcours de Morris : O(1) espace en utilisant des fils',
        'Le numéro de nœud sérialisé/désérialisé peut être reconstruit',
      ],
      commonMistakes: [
        'Oublier de dépiler correctement dans le parcours itératif',
        'Ne pas gérer les arbres vides',
      ],
      practice: [
        'Implémente le parcours en-ordre itératif avec une pile',
        'Sérialise et désérialise un arbre binaire',
      ],
    },
  },
};

export default overlay;
