import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Résolvez Sac-à-dos 0/1: articles=[(2,6),(2,10),(3,12)], capacité=5. Construisez la table DP.',
  hint: 'dp[i][w] = max(dp[i-1][w], dp[i-1][w-poids[i]] + valeur[i]).',
  explanation: {
    simple: {
      overview: 'Le problème du sac à dos 0/1 : étant donné des poids et valeurs, maximise la valeur totale sans dépasser une capacité de poids.',
      analogy: 'Comme remplir un sac de voyage limité — chaque objet a un poids et une valeur, tu ne peux pas couper les objets.',
      steps: [
        'Crée un tableau 2D dp[i][w]',
        'dp[i][w] = max valeur utilisant i éléments, capacité w',
        'Pour chaque élément, choisir de le prendre ou non',
        'Réponse finale : dp[n][W]',
      ],
      visual: `Capacité=5, éléments=[(2,3),(3,4),(4,5)]
dp[0][*]=0
dp[1][2..5]=3
dp[2][3..4]=4, dp[2][5]=7`,
      commonMistakes: [
        'Confondre 0/1 knapsack avec knapsack fractionnaire (glouton)',
        'Mauvaise indexation du tableau DP',
      ],
      practice: [
        'Résous le problème du sac à dos avec backtracking pour le chemin',
        'Optimise en utilisant un tableau 1D au lieu de 2D',
      ],
      timeComplexity: 'O(n × W)',
      spaceComplexity: 'O(n × W) ou O(W) avec optimisation'
    },
    deepDive: {
      overview: 'Le sac à dos 0/1 est NP-difficile en général mais pseudo-polynomial en W ; le sac à dos fractionnaire est O(n log n) glouton.',
      steps: [
        'Optimisation de l\'espace : tableau 1D, itérer W de droite à gauche',
        'Sac à dos sans limite : itérer W de gauche à droite',
        'Suivi du chemin : tableau de décision booléen',
        'Le sac à dos est NP-complet (pas de solution polynomiale connue)',
      ],
      commonMistakes: [
        'Itérer de gauche à droite dans le sac à dos 0/1 (donnerait le résultat sans limite)',
        'Confondre sac à dos 0/1 et sac à dos non borné',
      ],
      practice: [
        'Implémente avec suivi du chemin pour reconstruire les éléments',
        'Résous le sac à dos non borné et compare',
      ],
    },
  },
};

export default overlay;
