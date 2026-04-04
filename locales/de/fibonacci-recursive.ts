import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implementieren Sie rekursives Fibonacci. Prüfen Sie fib(10) und fib(35). Zeitunterschied beachten.',
  hint: 'Fügen Sie Memoization via Dict-Cache hinzu. Aufrufbaum schrumpft von 2^n auf n.',
  explanation: {
    simple: {
      overview: 'Rekursive Fibonacci-Berechnung: fib(n) = fib(n-1) + fib(n-2) entspricht direkt der mathematischen Definition.',
      analogy: 'Zwei Freunde um Hilfe bitten, die jeweils zwei weitere bitten – die Arbeit wächst exponentiell.',
      steps: [
        'Basisfälle: fib(0)=0, fib(1)=1.',
        'Rekursiver Fall: return fib(n-1) + fib(n-2).',
        'Jeder Aufruf erzeugt zwei weitere Aufrufe bis zum Basisfall.',
      ],
      visual: 'fib(4) → fib(3)+fib(2) → (fib(2)+fib(1))+(fib(1)+fib(0)) → ...',
      commonMistakes: [
        'Fehlende Basisfälle führen zu unendlicher Rekursion.',
        'Nicht erkennen, dass es ohne Memoization O(2^n) ist.',
      ],
      practice: [
        '@functools.lru_cache hinzufügen um O(n) zu erreichen.',
        'Aufrufbaum für fib(5) zeichnen und doppelte Aufrufe zählen.',
      ],
      timeComplexity: 'O(2^n) naiv, O(n) mit Memoization',
      spaceComplexity: 'O(n) Call-Stack'
    },
    deepDive: {
      overview: 'Naive rekursive Fibonacci ist Paradebeispiel für überlappende Teilprobleme – gelöst durch Memoization oder DP.',
      analogy: 'Teilproblem-DAG: statt Baum einen Graphen mit geteilten Knoten berechnen – jeder Wert nur einmal.',
      steps: [
        'fib(k) wird C(n,k)-mal im naiven Baum berechnet.',
        'Memoization: cache = {}; if n in cache: return cache[n]; cache[n] = f(n).',
        'Bottom-Up DP: füllt Array iterativ → vermeidet Rekursionsoverhead.',
        'Tail-Rekursions-Stil (mit Trampolin) verhindert Stack-Overflow.',
      ],
      visual: 'Naiver Baum: 2^n Knoten; Memoized DAG: n Knoten; Einsparung wächst exponentiell.',
      commonMistakes: [
        'Memoization anwenden aber trotzdem Python Rekursionslimit bei n≈1000 treffen.',
        'Zu iterativ konvertieren aber Raumoptimierung (zwei Rolling-Variablen) verpassen.',
      ],
      practice: [
        'fib(40) naiv vs. memoized profilieren; 10000× Speedup zeigen.',
        'Mit sys.setrecursionlimit neu implementieren und mit iterativer Version vergleichen.',
      ],
    },
  },
};

export default overlay;
