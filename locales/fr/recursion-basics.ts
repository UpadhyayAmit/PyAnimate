import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Fondamentaux de la Récursion',
  hint: 'Cas de base et cas récursif — tout grand problème est divisé en sous-problèmes.',
  approach: 'Définissez le cas de base (où la récursion s\'arrête), puis appelez le problème sur une version plus petite.',
  useCases: [
    'Traversée d\'arbre/graphe',
    'Algorithmes diviser pour régner',
    'Suites mathématiques (Fibonacci, factorielle)',
  ],
  explanation: {
    simple: {
      overview: 'La récursion est une technique où une fonction s\'appelle elle-même avec une entrée plus petite pour résoudre un problème.',
      analogy: 'Comme des poupées russes — chaque poupée contient une version plus petite d\'elle-même jusqu\'à la plus petite.',
      steps: [
        'Définis le cas de base (quand s\'arrêter)',
        'Appelle la fonction avec une entrée réduite',
        'Combine les résultats au retour',
        'Assure-toi que chaque appel se rapproche du cas de base',
      ],
      visual: `def compte_rebours(n):
    if n == 0:      # cas de base
        print("Décollage!")
    else:
        print(n)
        compte_rebours(n-1)  # appel récursif`,
      commonMistakes: [
        'Oublier le cas de base → récursion infinie',
        'Cas de base incorrect → mauvaise réponse',
        'Explosion de la pile sur de grandes entrées',
      ],
      practice: [
        'Résous la tour de Hanoï récursivement',
        'Calcule la somme d\'une liste récursivement',
      ],
      timeComplexity: 'Dépend du problème',
      spaceComplexity: 'O(n) pour la pile d\'appels'
    },
    deepDive: {
      overview: 'Les appels récursifs utilisent la pile d\'appels ; la mémisation et l\'itération évitent les appels redondants. Python a une limite de récursion (sys.setrecursionlimit).',
      steps: [
        'Chaque appel récursif empile un cadre sur la pile d\'appels',
        'La tail-call n\'est pas optimisée en Python — utiliser l\'itératif',
        'La mémisation via @lru_cache réduit les appels redondants',
        'La conversion récursif→itératif utilise une pile explicite',
      ],
      commonMistakes: [
        'Récursion sans mémisation quand les sous-problèmes se chevauchent',
        'Ignorer la limite de profondeur de récursion Python (par défaut 1000)',
      ],
      practice: [
        'Convertis une récursion en itératif avec une pile explicite',
        'Utilise @lru_cache pour mémoïser la récursion de Fibonacci',
      ],
    },
  },
};

export default overlay;
