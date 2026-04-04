import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Algorithme de Bellman-Ford',
  hint: 'Trouve les chemins les plus courts même avec des poids négatifs — V-1 relaxations.',
  approach: 'Relâchez toutes les arêtes V-1 fois. Si la relaxation se produit encore au V-ième tour, il y a un cycle négatif.',
  useCases: [
    'Graphes avec arêtes de poids négatif',
    'Détection d\'arbitrage de devises',
    'Algorithmes vecteur-distance dans les routages',
  ],
  explanation: {
    simple: {
      overview: 'L\'algorithme de Bellman-Ford trouve les chemins les plus courts depuis une source et peut détecter des cycles de poids négatif.',
      analogy: 'Comme vérifier toutes les routes encore et encore jusqu\'à ce que tu sois certain d\'avoir les distances les plus courtes.',
      steps: [
        'Initialise les distances à l\'infini sauf la source (0)',
        'Répète V-1 fois la relaxation de toutes les arêtes',
        'Vérifie une V-ième fois pour détecter les cycles négatifs',
        'Si une distance peut toujours être réduite, il y a un cycle négatif',
      ],
      visual: `V=5, E={(A,B,4),(A,C,2),(C,D,-3)}
Iter 1: B=4, C=2, D=-1
Iter 2: B=3 (via C)
...`,
      commonMistakes: [
        'Confondre V-1 et V passes',
        'Ne pas traiter la détection de cycle négatif',
      ],
      practice: [
        'Détecte les cycles de poids négatif dans un graphe',
        'Compare avec Dijkstra sur le même graphe',
      ],
      timeComplexity: 'O(V × E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'Bellman-Ford est O(VE) mais gère les poids négatifs et détecte les cycles négatifs — contrairement à Dijkstra.',
      steps: [
        'L\'optimisation par passage anticipé arrête dès qu\'aucune mise à jour n\'est faite',
        'Détection de cycle négatif : si la V-ème passe relaxe encore, cycle existant',
        'Bellman-Ford distribué = routage à vecteur de distance (protocole RIP)',
        'Algorithme SPFA : BFS Bellman-Ford optimisé (bon en pratique)',
      ],
      commonMistakes: [
        'Utiliser Bellman-Ford quand Dijkstra suffit (poids positifs)',
        'Interprétation erronée du signal de cycle négatif',
      ],
      practice: [
        'Implémente la détection de cycle négatif',
        'Applique au trading d\'arbitrage (cycles négatifs dans les taux)',
      ],
    },
  },
};

export default overlay;
