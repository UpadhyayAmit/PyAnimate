import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implémentez Fibonacci récursif. Vérifiez fib(10) et fib(35). Notez la différence de temps.',
  hint: 'Ajoutez la mémoïsation via un dict cache. L\'arbre d\'appels passe de 2^n à n.',
  explanation: {
    simple: {
      overview: 'L\'implémentation récursive de Fibonacci calcule fib(n) = fib(n-1) + fib(n-2), illustrant l\'élégance de la récursion et ses pièges.',
      analogy: 'Comme supposer que quelqu\'un d\'autre peut résoudre les petits problèmes, et combiner simplement ses réponses.',
      steps: [
        'Cas de base : fib(0) = 0, fib(1) = 1',
        'Pour n > 1 : retourne fib(n-1) + fib(n-2)',
        'Chaque appel crée deux sous-appels',
        'Résultat : arbre d\'appels exponentiel sans mémoïsation',
      ],
      visual: `fib(4)
├─ fib(3)
│  ├─ fib(2)
│  │  ├─ fib(1)=1
│  │  └─ fib(0)=0
│  └─ fib(1)=1
└─ fib(2)...`,
      commonMistakes: [
        'Utiliser sans mémoïsation (O(2^n))',
        'Oublier les deux cas de base (0 et 1)',
      ],
      practice: [
        'Ajoute @lru_cache et compare les temps',
        'Convertis en version itérative',
      ],
      timeComplexity: 'O(2^n) sans mémo, O(n) avec mémo',
      spaceComplexity: 'O(n) pile d\'appels'
    },
    deepDive: {
      overview: 'La récursion Fibonacci pure illustre des sous-problèmes qui se chevauchent — le cas d\'utilisation idéal pour la mémoïsation ou la DP.',
      steps: [
        'Arbre d\'appels : nœuds exponentiels sans mémo',
        '@lru_cache transforme en O(n) temps et espace',
        'sys.setrecursionlimit() peut être nécessaire pour les grands n',
        'La DP bottom-up évite complètement la surcharge des appels de fonction',
      ],
      commonMistakes: [
        'Utiliser la récursion naïve pour n > 35 (trop lente)',
        'Confondre les sous-problèmes qui se chevauchent avec les sous-problèmes indépendants',
      ],
      practice: [
        'Profil le temps avec et sans @lru_cache',
        'Implémente le Fibonacci DP bottom-up et compare',
      ],
    },
  },
};

export default overlay;
