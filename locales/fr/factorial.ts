import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implémentez la factorielle de manière itérative. Vérifiez: 0!=1, 5!=120, 10!=3628800.',
  hint: 'Commencez avec product=1, multipliez par chaque nombre de 1 à n.',
  explanation: {
    simple: {
      overview: 'La factorielle de n (notée n!) est le produit de tous les entiers positifs jusqu\'à n. Par exemple, 5! = 5×4×3×2×1 = 120.',
      analogy: 'Comme compter le nombre de façons d\'organiser n personnes en file — chaque position a moins de choix que la précédente.',
      steps: [
        'Cas de base : 0! = 1 et 1! = 1',
        'Pour n > 1 : n! = n × (n-1)!',
        'Implémentation itérative : résultat = 1 ; for i in range(2, n+1) : résultat *= i',
        'Utilise math.factorial() pour la bibliothèque standard',
      ],
      visual: `5! = 5×4×3×2×1 = 120
4! = 4×3×2×1 = 24
0! = 1  (par définition)`,
      commonMistakes: [
        'Oublier le cas de base 0! = 1',
        'Dépassement de pile avec la récursion sur de grands n',
      ],
      practice: [
        'Calcule le coefficient binomial C(n,k) = n!/(k!(n-k)!)',
        'Compare itératif vs récursif pour la factorielle',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1) itératif, O(n) récursif'
    },
    deepDive: {
      overview: 'math.factorial() est implémenté en C et utilise une multiplication arborescente pour de meilleures performances sur de grands n.',
      steps: [
        'La récursion tail-call n\'est pas optimisée en Python (utilise l\'itératif)',
        'La factorielle croît plus vite que toute exponentielle',
        'Les calculs modulaires (n! mod p) utilisent le théorème de Wilson',
        'sympy.factorial() pour une arithmétique symbolique',
      ],
      commonMistakes: [
        'Utiliser la récursion pour de grands n sans mémoïsation',
        'Dépassement d\'entier impossible en Python (entiers à précision arbitraire)',
      ],
      practice: [
        'Implémente la factorielle avec functools.reduce()',
        'Calcule combien de zéros en fin de 100!',
      ],
    },
  },
};

export default overlay;
