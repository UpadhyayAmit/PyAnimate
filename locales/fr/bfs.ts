import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Parcours en largeur (BFS)',
  hint: 'Explore le graphe niveau par niveau avec une file.',
  approach: 'Insérez le nœud de départ dans la file. Extrayez un nœud, ajoutez les voisins non visités dans la file.',
  useCases: [
    'Plus court chemin dans un graphe non pondéré',
    'Degrés de séparation en réseau social',
    'Découverte de pages dans un robot d\'exploration',
  ],
  explanation: {
    simple: {
      overview: 'La recherche en largeur d\'abord (BFS) explore un graphe niveau par niveau, visitant tous les voisins avant de passer aux nœuds plus lointains.',
      analogy: 'Comme répandre de l\'eau dans un labyrinthe — elle s\'étend uniformément dans toutes les directions simultanément.',
      steps: [
        'Commence depuis le nœud source, marque-le visité',
        'Ajoute-le à une file',
        'Retire de la file, visite tous ses voisins non visités',
        'Ajoute les voisins à la file et répète',
      ],
      visual: `Graphe: A-B, A-C, B-D
BFS depuis A: A → B,C → D
File: [A] → [B,C] → [C,D] → [D]`,
      commonMistakes: [
        'Oublier de marquer les nœuds comme visités → boucle infinie',
        'Utiliser une pile au lieu d\'une file (c\'est DFS)',
      ],
      practice: [
        'Trouve le chemin le plus court dans un graphe non pondéré',
        'Vérifie si un graphe est biparti',
      ],
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'BFS garantit le chemin le plus court dans les graphes non pondérés ; le BFS bidirectionnel le réduit à O(b^(d/2)).',
      steps: [
        'Utilise collections.deque pour O(1) popleft()',
        'BFS multi-sources : commence depuis plusieurs nœuds simultanément',
        'BFS bidirectionnel : deux frontières se rencontrant au milieu',
        'BFS 0-1 : utilise une deque pour les graphes avec des arêtes 0/1',
      ],
      commonMistakes: [
        'Utiliser list.pop(0) au lieu de deque.popleft() (O(n) vs O(1))',
        'Visiter les nœuds plusieurs fois sans tableau visité',
      ],
      practice: [
        'Implémente BFS multi-sources pour la distance dans une grille',
        'Résous le problème de transformation de mots avec BFS',
      ],
    },
  },
};

export default overlay;
