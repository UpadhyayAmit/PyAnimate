import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Fondamentaux de la Programmation Dynamique',
  hint: 'Mémorise les solutions de sous-problèmes pour éviter les recalculs.',
  approach: 'Décomposez le problème en sous-problèmes qui se chevauchent. Mémoïsez/tabulez les résultats.',
  useCases: [
    'Problèmes d\'optimisation (coût minimum, profit maximum)',
    'Problèmes de comptage (chemins, façons)',
    'Correspondance de chaînes (distance d\'édition, SCL)',
  ],
  explanation: {
    simple: {
      overview: 'La programmation dynamique résout les problèmes en stockant les solutions aux sous-problèmes pour éviter les recalculs.',
      analogy: 'Comme mémoriser les réponses à des problèmes mathématiques répétitifs pour ne pas recalculer à chaque fois.',
      steps: [
        'Identifie les sous-problèmes qui se chevauchent',
        'Stocke les résultats (mémisation ou tableau)',
        'Construis d\'abord les petits sous-problèmes',
        'Combine pour résoudre le problème global',
      ],
      visual: `fib(5)
= fib(4) + fib(3)
Avec DP :
dp[0]=0, dp[1]=1
dp[2]=1, dp[3]=2
dp[4]=3, dp[5]=5`,
      commonMistakes: [
        'Résoudre avec la récursion naïve quand les sous-problèmes se chevauchent',
        'Définition incorrecte de la relation de récurrence',
      ],
      practice: [
        'Résous le problème du sac à dos 0/1',
        'Calcule Fibonacci avec la tabulation DP',
      ],
      timeComplexity: 'Dépend du problème',
      spaceComplexity: 'O(n) à O(n²)'
    },
    deepDive: {
      overview: 'La DP peut utiliser la mémisation (top-down) ou la tabulation (bottom-up) ; l\'optimisation de l\'espace réduit O(n²) à O(n) quand seule la ligne précédente est nécessaire.',
      steps: [
        'Top-down (mémo) : récursion + cache, naturel à coder',
        'Bottom-up (tabulation) : itératif, meilleure performance',
        'L\'optimisation de l\'espace utilise des tableaux roulants',
        'Identifier la DP : sous-problèmes qui se chevauchent + sous-structure optimale',
      ],
      commonMistakes: [
        'Résoudre avec la récursion brute force là où la DP est nécessaire',
        'Confondre les patterns DP (sac à dos, LCS, chemin de grille)',
      ],
      practice: [
        'Résous le chemin minimum dans un tableau 2D avec la DP',
        'Convertis la DP mémoïsée en tabulation bottom-up',
      ],
    },
  },
};

export default overlay;
