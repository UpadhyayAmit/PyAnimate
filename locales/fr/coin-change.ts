import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Pièces minimales pour former amount=11 avec pièces=[1,5,6,9]. Construisez le tableau dp.',
  hint: 'dp[0]=0, dp[i]=infini. Pour chaque pièce c: dp[i] = min(dp[i], dp[i-c]+1) si i>=c.',
  explanation: {
    simple: {
      overview: 'Rendu de monnaie : trouve le nombre minimum de pièces nécessaires pour atteindre un montant cible.',
      analogy: 'Comme rendre la monnaie avec le moins de pièces possible — utilise d\'abord les plus grosses.',
      steps: [
        'Crée un tableau dp de taille montant+1, initialisé à l\'infini',
        'dp[0] = 0 (0 pièces pour 0)',
        'Pour chaque montant de 1 à cible : dp[i] = min(dp[i-c]+1) pour chaque pièce c ≤ i',
        'dp[montant] est la réponse (-1 si impossible)',
      ],
      visual: `pièces=[1,3,4], montant=6
dp: [0,1,2,1,1,2,2]
dp[6]=2 (3+3)`,
      commonMistakes: [
        'Utiliser l\'approche gloutonne (pas toujours optimale)',
        'Initialiser dp[0] à 1 au lieu de 0',
      ],
      practice: [
        'Résous avec un ensemble de pièces différent',
        'Variante : compte le nombre de façons de faire le montant',
      ],
      timeComplexity: 'O(montant × nombre de pièces)',
      spaceComplexity: 'O(montant)'
    },
    deepDive: {
      overview: 'Le rendu de monnaie est un problème de sac à dos à répétition illimitée ; il existe des systèmes de pièces pour lesquels le glouton échoue.',
      steps: [
        'Sac à dos sans limite : chaque pièce peut être réutilisée',
        'DP bottom-up : itérer les montants de 1 à cible',
        'Variation : compter toutes les façons (combinaisons) → dp[i] += dp[i-c]',
        'Le glouton fonctionne pour les systèmes de pièces canoniques (euro, USD)',
      ],
      commonMistakes: [
        'Glouton sur des systèmes de pièces non canoniques (ex: {1,3,4}, cible=6)',
        'Confondre min pièces et compter les façons (formule différente)',
      ],
      practice: [
        'Prouve que le glouton échoue sur {1,3,4}, cible=6',
        'Implémante la variante de comptage des façons',
      ],
    },
  },
};

export default overlay;
