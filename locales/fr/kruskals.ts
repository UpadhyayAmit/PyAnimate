import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Trouvez MST des arêtes: (A-B,4), (A-C,2), (B-C,1), (B-D,5), (C-D,8).',
  hint: 'Triez les arêtes par poids. Utilisez Union-Find pour détecter les cycles.',
  explanation: {
    simple: {
      overview: 'L\'algorithme de Kruskal construit un arbre couvrant minimum en ajoutant les arêtes de poids le plus faible qui ne créent pas de cycle.',
      analogy: 'Comme construire un réseau ferroviaire à moindre coût — ajoute toujours la ligne la moins chère qui connecte deux villes non encore reliées.',
      steps: [
        'Trie toutes les arêtes par poids',
        'Pour chaque arête (de la plus légère à la plus lourde)',
        'Si elle ne crée pas de cycle, ajoute-la à l\'ACM',
        'Utilise Union-Find pour vérifier/prévenir les cycles',
      ],
      visual: `Arêtes triées: (1-2,1),(2-3,3),(1-3,4),(3-4,2)
Ajoute 1-2, 2-3, 3-4: ACM={1-2,2-3,3-4}`,
      commonMistakes: [
        'Oublier de trier les arêtes d\'abord',
        'Union-Find sans compression de chemin (trop lent)',
      ],
      practice: [
        'Trouve l\'ACM d\'un graphe de réseau',
        'Compare avec l\'algorithme de Prim sur des graphes denses',
      ],
      timeComplexity: 'O(E log E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'Kruskal est O(E log E) grâce au tri ; avec Union-Find à compression de chemin + union par rang, chaque opération est quasi-O(1).',
      steps: [
        'Union-Find avec union par rang : O(α(n)) ≈ O(1)',
        'Prim est meilleur pour les graphes denses (O(V²) avec matrice)',
        'Kruskal est meilleur pour les graphes épars',
        'L\'ACM n\'est pas unique si des arêtes ont des poids égaux',
      ],
      commonMistakes: [
        'Implémenter Union-Find sans compression de chemin',
        'Confondre ACM (arbre couvrant minimum) et chemin minimun',
      ],
      practice: [
        'Implémante Union-Find avec compression de chemin',
        'Compare Kruskal vs Prim sur graphes denses vs épars',
      ],
    },
  },
};

export default overlay;
