import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Algorithme de Dijkstra',
  hint: 'Chemins les plus courts dans des graphes à poids non négatifs.',
  approach: 'Traitez le nœud avec la distance minimale dans la file de priorité, mettez à jour les distances des voisins.',
  useCases: [
    'Navigation GPS et recherche de route la plus courte',
    'Protocoles de routage réseau (OSPF)',
    'Pathfinding dans l\'IA de jeu',
  ],
  explanation: {
    simple: {
      overview: 'L\'algorithme de Dijkstra trouve le chemin le plus court depuis une source vers tous les autres nœuds dans un graphe à arêtes de poids non négatif.',
      analogy: 'Comme GPS qui calcule le trajet le plus rapide — il explore toujours d\'abord la route la moins coûteuse non encore confirmée.',
      steps: [
        'Initialise les distances à l\'infini sauf la source (0)',
        'Utilise une file de priorité (tas min)',
        'Extrais le nœud de distance minimale',
        'Mets à jour les voisins si un chemin plus court est trouvé',
      ],
      visual: `A=0 → B=4, C=2
C=2 → B=min(4,3)=3
B=3 → D=3+2=5`,
      commonMistakes: [
        'Utiliser sur des arêtes à poids négatif (utiliser Bellman-Ford)',
        'Oublier de pousser les distances mises à jour dans le tas',
      ],
      practice: [
        'Trouve le chemin le plus court sur une carte de ville',
        'Implémente avec un dictionnaire de liste d\'adjacence',
      ],
      timeComplexity: 'O((V + E) log V)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'Dijkstra avec tas binaire est O((V+E) log V) ; avec tas de Fibonacci c\'est O(E + V log V).',
      steps: [
        'Implémentation avec heapq : (distance, nœud) tuples',
        'Le marquage des nœuds visités évite le retraitement',
        'Dijkstra sur graphe dense : matrice d\'adjacence O(V²)',
        'Variante A* : ajoute une heuristique pour des recherches plus rapides',
      ],
      commonMistakes: [
        'Ne pas filtrer les parties obsolètes du tas',
        'Appliquer Dijkstra à des graphes avec des arêtes négatives',
      ],
      practice: [
        'Implémente Dijkstra avec suivi du chemin',
        'Compare avec la recherche A* sur une grille',
      ],
    },
  },
};

export default overlay;
