import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Générez les 15 premiers nombres de Fibonacci avec seulement deux variables glissantes.',
  hint: 'Suivez prev et curr. Chaque étape: new_curr = prev + curr, puis décalez.',
  explanation: {
    simple: {
      overview: 'La séquence de Fibonacci est une suite où chaque nombre est la somme des deux précédents : 0, 1, 1, 2, 3, 5, 8, 13...',
      analogy: 'Comme la croissance d\'une colonie de lapins — chaque génération est la somme des deux précédentes.',
      steps: [
        'Commence avec a=0, b=1',
        'Dans une boucle : calcule c = a + b',
        'Mets à jour a = b, b = c',
        'Répète n fois pour obtenir le n-ième terme',
      ],
      visual: `a,b = 0,1
for _ in range(8):
    print(a)
    a,b = b, a+b
# 0 1 1 2 3 5 8 13`,
      commonMistakes: [
        'IndexError avec la récursion naïve sur de grands indices',
        'Confondre l\'index (position) avec la valeur',
      ],
      practice: [
        'Génère les 20 premiers nombres de Fibonacci',
        'Vérifie si un nombre est dans la séquence de Fibonacci',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'L\'exponentiation matricielle calcule le n-ième terme de Fibonacci en O(log n) ; la formule de Binet donne une solution en forme fermée.',
      steps: [
        'Itératif : O(n) temps, O(1) espace — meilleur usage pratique',
        'Mémoïsation/DP : O(n) temps, O(n) espace',
        'Exponentiation matricielle : O(log n) via [[1,1],[1,0]]^n',
        'Formule de Binet : fib(n) = round(φⁿ/√5) pour les petits n',
      ],
      commonMistakes: [
        'La récursion naïve est O(2^n) — éviter sans mémoïsation',
        'Les erreurs de virgule flottante dans la formule de Binet pour les grands n',
      ],
      practice: [
        'Implémente fib() avec @lru_cache',
        'Explore la relation entre Fibonacci et le nombre d\'or',
      ],
    },
  },
};

export default overlay;
