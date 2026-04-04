import type { LessonLocaleOverlay } from '../types';

const linearSearch: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'La recherche lineaire parcourt les elements un par un jusqu a trouver la cible.',
      analogy: 'Comme chercher un livre sur une etagere non triee en regardant chaque tranche.',
      steps: [
        'Commencer a l index 0.',
        'Comparer arr[i] avec target.',
        'Si egal, retourner i.',
        'Sinon avancer et continuer.',
        'A la fin, retourner not found.',
      ],
      visual: '[7 2 9 4] -> 7 non -> 2 oui (index 1).',
      commonMistakes: [
        'Utiliser i < n-1 et oublier le dernier element.',
        'Ne pas gerer le tableau vide.',
        'L utiliser sur un tableau trie quand binary search serait mieux.',
      ],
      practice: [
        'Compter best/worst/average comparisons.',
        'Retourner toutes les positions du target.',
        'Essayer la recherche depuis les deux extremites.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Linear search est simple, previsible et utile pour petits jeux de donnees ou flux.',
      analogy: 'Un seul passage sur un flux qu on ne peut pas rembobiner.',
      steps: [
        'Invariant: tout indice < i a deja ete teste.',
        'Verifier chaque element exactement une fois.',
        'Arreter des qu un match est trouve.',
        'Sinon terminer apres n comparaisons.',
        'Retourner index ou -1.',
      ],
      visual: 'Zone testee grandit de gauche a droite.',
      commonMistakes: [
        'Comparer des floats sans tolerance.',
        'Ignorer une structure de donnees plus adaptee (hash).',
        'Sur-optimiser alors que n est tres petit.',
      ],
      practice: [
        'Prouver la correction de l invariant.',
        'Implementer la technique du sentinel.',
        'Ecrire une version case-insensitive pour les strings.',
      ],
      timeComplexity: 'Theta(n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default linearSearch;
