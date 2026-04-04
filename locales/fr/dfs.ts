import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Parcours en profondeur (DFS)',
  hint: 'Explore le graphe en profondeur avec une pile ou récursion.',
  approach: 'Explorez depuis le nœud de départ, suivez chaque chemin récursivement jusqu\'au bout avant de revenir en arrière.',
  useCases: [
    'Résolution de labyrinthes et recherche de chemin',
    'Tri topologique et détection de cycles',
    'Composantes fortement connexes',
  ],
  explanation: {
    simple: {
      overview: 'La recherche en profondeur d\'abord (DFS) explore aussi loin que possible le long de chaque branche avant de revenir en arrière.',
      analogy: 'Comme explorer un labyrinthe en allant toujours tout droit jusqu\'à un cul-de-sac, puis en revenant sur tes pas.',
      steps: [
        'Commence depuis le nœud source, marque-le visité',
        'Visite un voisin non visité',
        'Continue récursivement jusqu\'à ce qu\'il n\'y en ait plus',
        'Reviens en arrière et essaie d\'autres branches',
      ],
      visual: `Graphe: A-B, A-C, B-D
DFS depuis A: A → B → D → C
Pile: [A] → [B,C] → [C,D] → [C]`,
      commonMistakes: [
        'Oublier de marquer les nœuds visités dans les graphes cycliques',
        'Confusion entre récursif et itératif (pile explicite)',
      ],
      practice: [
        'Détecte les cycles dans un graphe',
        'Trouve tous les chemins entre deux nœuds',
      ],
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'DFS produit les temps de découverte/fin utiles pour le tri topologique et les composantes fortement connexes (Tarjan, Kosaraju).',
      steps: [
        'Ordre pré/post-ordre pour l\'arbre DFS',
        'Tri topologique : tri par ordre de fin décroissant',
        'Composantes fortement connexes : DFS de Kosaraju en deux passes',
        'Pont/point d\'articulation : algorithme de Tarjan',
      ],
      commonMistakes: [
        'Oublier la vérification de cycle dans les graphes dirigés (couleur: blanc/gris/noir)',
        'Utiliser DFS là où BFS donne le chemin le plus court',
      ],
      practice: [
        'Implémente le tri topologique avec DFS',
        'Trouve les ponts dans un graphe non dirigé',
      ],
    },
  },
};

export default overlay;
