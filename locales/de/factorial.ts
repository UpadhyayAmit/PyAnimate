import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implementieren Sie Fakultät iterativ. Verifizieren Sie: 0!=1, 5!=120, 10!=3628800.',
  hint: 'Starten Sie mit product=1, multiplizieren Sie mit jeder Zahl von 1 bis n.',
  explanation: {
    simple: {
      overview: 'Fakultät n! = n × (n-1) × ... × 1 für n≥1; 0! = 1 per Konvention.',
      analogy: 'Anordnungen von n Karten zählen: n Möglichkeiten für die erste, n-1 für die zweite usw.',
      steps: [
        'Basisfall prüfen: if n == 0: return 1.',
        'Sonst: return n * factorial(n-1).',
        'Iterative Version: result=1 starten und mit 1..n multiplizieren.',
      ],
      visual: '4! = 4×3×2×1 = 24',
      commonMistakes: [
        'n=0 nicht behandeln (sollte 1 ergeben).',
        'Stack-Überlauf bei großem n in der rekursiven Version (iterative oder math.factorial verwenden).',
      ],
      practice: [
        '10! manuell berechnen und mit math.factorial verifizieren.',
        'Anzahl der abschließenden Nullen von 100! finden (Tipp: Faktoren von 5 zählen).',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n) rekursiv (Stack), O(1) iterativ'
    },
    deepDive: {
      overview: 'Pythons math.factorial verwendet Lookup-Tabellen und schnelle Multiplikation für große n.',
      analogy: 'GMP-Bibliothek: Fakultät in Primfaktoren aufteilen und schnelle Potenzierungsstrategien anwenden.',
      steps: [
        'Rekursiv: T(n)=T(n-1)+O(n-Stellen) wegen Big-Int-Multiplikation.',
        'Iterativ mit Big-Ints: ~O(n² log n) durch zunehmende Zahlengröße.',
        'Stirling-Approximation: n! ≈ √(2πn)·(n/e)^n für Schätzung.',
        'math.factorial delegiert an C-Implementierung für maximale Geschwindigkeit.',
      ],
      visual: 'log(n!) ≈ n·log(n) - n (Stirling) – nützlich für überlaufsichere Log-Wahrscheinlichkeiten.',
      commonMistakes: [
        'Rekursive Fakultät auf n>1000 aufrufen (Pythons Rekursionslimit).',
        'Fakultät für Kombinatorik verwenden, wenn math.comb verfügbar ist.',
      ],
      practice: [
        'log(n!) mit math.lgamma für große n berechnen.',
        'Rekursive vs. iterative Zeitnahme für n=500 vergleichen.',
      ],
    },
  },
};

export default overlay;
