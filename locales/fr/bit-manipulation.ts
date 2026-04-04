import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Utilisez des opérations de bits: (1) 13 pair/impair, (2) bits dans 255, (3) swap XOR.',
  hint: 'Pair: n & 1 == 0. Compter: while n: count += n & 1; n >>= 1. XOR swap: a^=b; b^=a; a^=b.',
  explanation: {
    simple: {
      overview: 'Les opérations bit à bit manipulent les nombres au niveau binaire : ET, OU, XOR, NON, décalages gauche/droite.',
      analogy: 'Comme des interrupteurs d\'éclairage — chaque bit est soit allumé (1) soit éteint (0), et tu peux les basculer, les combiner ou les décaler.',
      steps: [
        '& ET : 1 seulement si les deux bits sont 1',
        '| OU : 1 si au moins un bit est 1',
        '^ XOR : 1 si les bits sont différents',
        '<< >> décalage : multiplie/divise par 2',
        '~ NON : inverse tous les bits',
      ],
      visual: `5 = 0101
3 = 0011
5 & 3 = 0001 (1)
5 | 3 = 0111 (7)
5 ^ 3 = 0110 (6)`,
      commonMistakes: [
        'Confondre & (bit à bit) avec and (logique)',
        'Le NON bit à bit ~ donne -(n+1) en raison du complément à deux',
      ],
      practice: [
        'Vérifie si un nombre n est une puissance de deux : n & (n-1) == 0',
        'Compte les bits fixés à 1 dans un entier',
      ],
      timeComplexity: 'O(1) par opération',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Les astuces de manipulation de bits (isolation du bit le moins significatif, counting population) permettent des solutions O(1) à de nombreux problèmes.',
      steps: [
        'Isole le LSB : x & (-x)',
        'Supprime le LSB : x & (x-1)',
        'Compte les bits fixés : bin(n).count("1") ou gmpy2.popcount()',
        'XOR annule les doublons : a^a=0, a^0=a',
        'Décalage signé vs non signé (Python a des entiers de taille arbitraire)',
      ],
      commonMistakes: [
        'Supposer des entiers de 32 bits en Python (ils sont illimités)',
        'Oublier la priorité des opérateurs (& a moins de priorité que ==)',
      ],
      practice: [
        'Résous "trouver le nombre unique" avec XOR',
        'Implémente la transposition de bits pour un entier 32 bits',
      ],
    },
  },
};

export default overlay;
