import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Appliquez Floyd-Warshall à: [[0,3,∞,7],[8,0,2,∞],[5,∞,0,1],[2,∞,∞,0]].',
  hint: 'Trois boucles imbriquées: k, i, j. Mettez à jour si dist[i][k]+dist[k][j] < dist[i][j].',
  explanation: {
    simple: {
      overview: 'Floyd-Warshall calcule les plus courts chemins entre toutes les paires de nœuds d\'un graphe pondéré.',
      analogy: 'Comme construire une table de distances entre toutes les villes d\'une carte, en trouvant si passer par une ville intermédiaire est plus rapide.',
      steps: [
        'Initialise dist[i][j] = poids de l\'arête ou ∞',
        'Pour chaque nœud intermédiaire k',
        'Pour toutes les paires (i,j), vérifie si passer par k est plus court',
        'dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])',
      ],
      visual: `dist[i][j] = min(dist[i][j], dist[i][k]+dist[k][j])
pour chaque k de 0 à V-1`,
      commonMistakes: [
        'Oublier d\'initialiser dist[i][i] = 0',
        'Mauvais ordre des boucles (k doit être la boucle externe)',
      ],
      practice: [
        'Calcule toutes les distances de paires dans un petit graphe',
        'Détecte les cycles négatifs : si dist[i][i] < 0',
      ],
      timeComplexity: 'O(V³)',
      spaceComplexity: 'O(V²)'
    },
    deepDive: {
      overview: 'Floyd-Warshall est O(V³) mais plus simple que V × Dijkstra pour les graphes denses avec poids négatifs (pas de cycles négatifs).',
      steps: [
        'La programmation dynamique : dp[k][i][j] réduit à O(V²) espace',
        'Détection de cycle négatif : vérifier dist[i][i] < 0 après',
        'Fermeture transitive : variante booléenne de Floyd-Warshall',
        'Pour les graphes épars, V × Dijkstra est plus rapide',
      ],
      commonMistakes: [
        'Appliquer à des graphes avec des cycles négatifs sans vérification',
        'Utiliser pour des graphes épars (V × Dijkstra est meilleur)',
      ],
      practice: [
        'Implémente la détection de cycle négatif',
        'Construis la fermeture transitive d\'un graphe dirigé',
      ],
    },
  },
};

export default overlay;
