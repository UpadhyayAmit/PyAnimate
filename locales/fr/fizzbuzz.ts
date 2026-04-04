import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implémentez FizzBuzz pour 1–30. Étendez: ajoutez \'Bazz\' pour les multiples de 7.',
  hint: 'Vérifiez d\'abord 3 et 5 ensemble (FizzBuzz), puis individuellement. Ajoutez le cas 7.',
  explanation: {
    simple: {
      overview: 'FizzBuzz affiche les nombres de 1 à n, en remplaçant les multiples de 3 par "Fizz", les multiples de 5 par "Buzz", et les deux par "FizzBuzz".',
      analogy: 'Comme un jeu de groupe où les enfants comptent mais disent des mots à la place de certains nombres.',
      steps: [
        'Boucle de 1 à n',
        'Si divisible par 3 et 5 : affiche "FizzBuzz"',
        'Sinon si divisible par 3 : affiche "Fizz"',
        'Sinon si divisible par 5 : affiche "Buzz"',
        'Sinon : affiche le nombre',
      ],
      visual: `1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz
11 Fizz 13 14 FizzBuzz 16...`,
      commonMistakes: [
        'Vérifier 3 et 5 séparément avant 15 → perd FizzBuzz',
        'Utiliser des booléens au lieu de % (confuse)',
      ],
      practice: [
        'Modifie pour des règles divisibles por 7 ("Bazz")',
        'Retourne une liste au lieu d\'afficher',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'FizzBuzz peut être résolu avec la concaténation de chaînes pour éviter les vérifications multiples et est souvent utilisé comme exercice de warm-up en entretien.',
      steps: [
        'Approche par concaténation : result = ""; if %3: result+="Fizz"; if %5: result+="Buzz"',
        'Approche par dict : {0:"FizzBuzz",3:"Fizz",5:"Buzz"}[condtion]',
        'Les générateurs permettent l\'évaluation paresseuse pour les grandes plages',
        'Solution one-liner : ["FizzBuzz"[i%3*4:][:4+i%5*8] or str(i) for i in range(1,n+1)]',
      ],
      commonMistakes: [
        'Ordre des conditions if (vérifier 15 en premier dans l\'approche naïve)',
        'Ne pas retourner une valeur dans la version fonction',
      ],
      practice: [
        'Implémente FizzBuzz avec concaténation de chaînes',
        'Écris une version générateur pour une plage infinie',
      ],
    },
  },
};

export default overlay;
