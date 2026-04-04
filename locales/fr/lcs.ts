import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Trouvez LCS de \'ABCBDAB\' et \'BDCAB\'. Construisez la matrice DP et retracez la séquence.',
  hint: 'dp[i][j] = dp[i-1][j-1]+1 si les caractères correspondent, sinon max(dp[i-1][j], dp[i][j-1]).',
  explanation: {
    simple: {
      overview: 'La Plus Longue Sous-séquence Commune (LCS) trouve la sous-séquence la plus longue commune à deux chaînes (sans nécessiter de contiguïté).',
      analogy: 'Comme trouver les auteurs que deux listes de lecture ont en commun, dans le même ordre.',
      steps: [
        'Crée un tableau 2D dp[i][j]',
        'Si s1[i-1]==s2[j-1] : dp[i][j] = dp[i-1][j-1] + 1',
        'Sinon : dp[i][j] = max(dp[i-1][j], dp[i][j-1])',
        'Longueur = dp[m][n]',
      ],
      visual: `ABCBDAB vs BDCAB
dp[3][3]=2 (BC)
→ LCS = BCAB (longueur 4)`,
      commonMistakes: [
        'Confondre sous-séquence (non contiguë) avec sous-chaîne (contiguë)',
        'Reconstruction incorrecte de la LCS depuis le tableau DP',
      ],
      practice: [
        'Trouve la LCS de deux chaînes',
        'Étends pour trouver la longueur de la plus longue sous-chaîne commune',
      ],
      timeComplexity: 'O(m × n)',
      spaceComplexity: 'O(m × n) ou O(min(m,n))'
    },
    deepDive: {
      overview: 'LCS se base sur des sous-problèmes qui se chevauchent ; la distance d\'édition, la diff et la plus longue sous-chaîne commune partagent un sous-problème similaire.',
      steps: [
        'Optimisation de l\'espace : utiliser deux lignes O(min(m,n))',
        'La distance d\'édition (Levenshtein) : LCS avec des coûts',
        'La diff Unix : basée sur LCS',
        'La variance de LCS de Hirschberg atteint O(min(m,n)) d\'espace avec backtracking',
      ],
      commonMistakes: [
        'Oublier la reconstruction depuis le tableau DP',
        'Ne pas optimiser l\'espace pour de grandes entrées',
      ],
      practice: [
        'Implémente la distance d\'édition',
        'Visualise la grille DP et comment remonter le chemin',
      ],
    },
  },
};

export default overlay;
