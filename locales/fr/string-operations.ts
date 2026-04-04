import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Découpez \'Python Programming\' pour obtenir \'Prog\'. Inversez ensuite la chaîne complète.',
  hint: 'La syntaxe de slice est s[début:fin]. Pour inverser utilisez s[::-1].',
  explanation: {
    simple: {
      overview: 'Les chaînes sont des séquences de caractères. Python fournit de puissantes méthodes intégrées pour les manipuler.',
      analogy: 'Une chaîne est comme un collier de perles — chaque perle est un caractère, et tu peux couper, coller ou inspecter le collier.',
      steps: [
        'Crée avec des guillemets simples ou doubles',
        'Concatène avec + ou f-strings',
        'Accède aux caractères avec indexation/slicing',
        'Utilise des méthodes : upper(), lower(), split(), strip()',
      ],
      visual: `s = "Bonjour"
s[0] → "B"
s[-1] → "r"
s[1:4] → "onj"
s.upper() → "BONJOUR"`,
      commonMistakes: [
        'Les chaînes sont immuables — les méthodes retournent de nouvelles chaînes',
        'Confondre \' et " (les deux fonctionnent, mais doivent correspondre)',
        'Oublier que + entre str et int lève une TypeError',
      ],
      practice: [
        'Inverse une chaîne avec slicing',
        'Compte les voyelles dans une phrase',
      ],
    },
    deepDive: {
      overview: 'Les chaînes Python sont des séquences Unicode immuables ; les f-strings et str.format() offrent une interpolation puissante.',
      steps: [
        'L\'internement de chaînes réutilise les objets pour les petites chaînes',
        'join() est plus rapide que + pour concaténer beaucoup de chaînes',
        'encode()/decode() pour la conversion bytes ↔ str',
        'Les expressions régulières via re pour la correspondance de motifs',
      ],
      commonMistakes: [
        'Concaténer dans une boucle avec + → O(n²)',
        'Confondre bytes et str dans le code Python 3',
      ],
      practice: [
        'Compare les performances de "".join() vs + en boucle',
        'Utilise str.format() avec des spécificateurs de format',
      ],
    },
  },
};

export default overlay;
