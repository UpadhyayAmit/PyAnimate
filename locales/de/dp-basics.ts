import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Grundlagen Dynamic Programming',
  hint: 'Speichere Teillösungen und vermeide doppelte Berechnungen — Memoization oder Tabellierung.',
  approach: 'Teile das Problem in überlappende Teilprobleme auf. Speichere Teilergebnisse (Memoization/Tabellierung).',
  useCases: [
    'Optimierungsprobleme (Minimalkosten, Maximalgewinn)',
    'Zählprobleme (Pfade, Wege)',
    'String-Matching (Edit-Distanz, LCS)',
  ],
  explanation: {
    simple: {
      overview: 'Dynamische Programmierung löst Optimierungsprobleme mit überlappenden Teilproblemen und optimaler Teilstruktur.',
      analogy: 'Wegplanung in einer Stadt: speichere kürzeste Distanz zu jedem Zwischenpunkt statt sie mehrfach zu berechnen.',
      steps: [
        'Überlappende Teilprobleme identifizieren (z.B. fib(n) enthält fib(n-2) mehrfach).',
        'Zustand definieren: was muss gespeichert werden?',
        'Rekurrenzrelation aufstellen: dp[i] in Abhängigkeit von kleineren dp-Werten.',
        'Basisfälle initialisieren.',
        'Tabulation (Bottom-Up): kleinstmögliche Teilprobleme zuerst lösen.',
      ],
      visual: 'Münzproblem: dp[0]=0; dp[1]=1; dp[2]=1; dp[5]=1 mit Münze 5; dp[11]=3',
      commonMistakes: [
        'Array-Grenzen: dp muss amount+1 oder n+1 Felder haben.',
        'Basisfälle falsch initialisieren (z.B. dp[0]=1 statt 0 beim Münzproblem).',
      ],
      practice: [
        'Fibonacci mit Bottom-Up DP implementieren.',
        'Münzwechsel-Problem lösen.',
      ],
      timeComplexity: 'O(Anzahl Zustände × Übergänge pro Zustand)',
      spaceComplexity: 'O(Anzahl Zustände), oft auf O(1) oder O(n) reduzierbar'
    },
    deepDive: {
      overview: 'Tabulation vs. Memoization; Zustandskomprimierung; DP auf Intervallen, Bäumen und Graphen.',
      analogy: 'Tabulation: Tabelle von unten nach oben füllen wie ein Wörterbuch – vorhersehbare Reihenfolge.',
      steps: [
        'Memoization (Top-Down): Rekursion + Cache; Tabulation (Bottom-Up): iterative Tabelle.',
        'Zustandskomprimierung: zwei Variablen statt Array für Fibonacci-DP.',
        'DP auf Intervallen: dp[i][j] = beste Lösung für Teilsequenz [i..j].',
        'DP auf Bäumen: Werte von Blättern zu Wurzel propagieren.',
      ],
      visual: 'Fibonacci Raumoptimierung: a,b = b, a+b → O(1) Raum statt O(n) Array.',
      commonMistakes: [
        'Reihenfolge der Tabulation-Schleife falsch: muss sicherstellen, dass Abhängigkeiten bereits berechnet sind.',
        'Memoization mit veränderlichem Default-Argument: Seiteneffekt zwischen Aufrufen.',
      ],
      practice: [
        'Longest Increasing Subsequence mit DP lösen.',
        'Edit Distance (Levenshtein) mit 2D-DP implementieren.',
      ],
    },
  },
};

export default overlay;
