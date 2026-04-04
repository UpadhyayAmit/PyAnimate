import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Generieren Sie die ersten 15 Fibonacci-Zahlen mit nur zwei rollierenden Variablen.',
  hint: 'Verfolgen Sie prev und curr. Jeder Schritt: new_curr = prev + curr, dann verschieben.',
  explanation: {
    simple: {
      overview: 'Iteratives Fibonacci baut die Folge mit nur zwei Variablen auf – keine Rekursion nötig.',
      analogy: 'Froschsprünge: immer nur die letzten zwei Schritte merken.',
      steps: [
        'Mit a=0, b=1 starten.',
        'n-1 Mal schleifen: a, b = b, a+b.',
        'Nach der Schleife enthält a den Wert fib(n).',
      ],
      visual: 'a=0,b=1 → a=1,b=1 → a=1,b=2 → a=2,b=3 → a=3,b=5',
      commonMistakes: [
        'Off-by-one in der Schleifenanzahl.',
        'Eine Liste zum Speichern aller Werte verwenden, wenn nur die letzten zwei benötigt werden.',
      ],
      practice: [
        'Die ersten 20 Fibonacci-Zahlen ausgeben.',
        'Die erste Fibonacci-Zahl > 1000 finden.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Matrixexponentiation berechnet fib(n) in O(log n) durch wiederholtes Quadrieren.',
      analogy: 'Potenzieren durch Quadrieren: M^n = (M^(n/2))^2 wenn n gerade ist.',
      steps: [
        '[[1,1],[1,0]]^n darstellen; oben links gibt fib(n+1).',
        'Schnelle Matrixmultiplikation mit Rekursion oder Iteration verwenden.',
        'Jedes Quadrieren verdoppelt den Fortschritt: log₂(n) Multiplikationen.',
        'Goldener-Schnitt-Formel: fib(n) = round(φ^n / √5) für kleines n.',
      ],
      visual: '[[1,1],[1,0]]^5 oben links = fib(6) = 8',
      commonMistakes: [
        'Goldener-Schnitt-Methode verliert Präzision für großes n (Float-Grenzen).',
        'Vergessen, dass Matrixmultiplikation O(k³) für k×k-Matrizen ist.',
      ],
      practice: [
        'Matrixexponentiation für fib(1.000.000) mod Primzahl implementieren.',
        'Iterativ vs. Matrixexponentiation für n=10^6 benchmarken.',
      ],
    },
  },
};

export default overlay;
