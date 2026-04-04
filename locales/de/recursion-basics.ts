import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Grundlagen der Rekursion',
  hint: 'Basisfall und rekursiver Fall — jedes große Problem wird in kleinere zerlegt.',
  approach: 'Definieren Sie den Basisfall (wo Rekursion stoppt), dann rufen Sie das Problem auf einer kleineren Version auf.',
  useCases: [
    'Baum/Graph-Traversierung',
    'Teile-und-Herrsche-Algorithmen',
    'Mathematische Folgen (Fibonacci, Fakultät)',
  ],
  explanation: {
    simple: {
      overview: 'Rekursion löst Probleme durch Selbstaufruf: Basisfall stoppt die Rekursion, rekursiver Fall verkleinert das Problem.',
      analogy: 'Matroschka-Puppen öffnen: jede Puppe enthält eine kleinere, bis man zur kleinsten (Basisfall) gelangt.',
      steps: [
        'Definiere Basisfall(e): Bedingung, die direkt einen Wert zurückgibt.',
        'Definiere rekursiven Fall: rufe die Funktion mit kleinerem Input auf.',
        'Kombiniere Ergebnis des rekursiven Aufrufs zum Gesamtergebnis.',
      ],
      visual: 'factorial(4) = 4 * factorial(3) = 4*3*factorial(2) = 4*3*2*1 = 24',
      commonMistakes: [
        'Fehlender Basisfall führt zu RecursionError (Python limit ~1000).',
        'Basisfall-Bedingung unvollständig – deckt nicht alle Stopp-Fälle ab.',
      ],
      practice: [
        'Potenz x^n rekursiv implementieren (Teile-und-Herrsche: x^(n//2)).',
        'Binärbaum-Höhe rekursiv berechnen.',
      ],
      timeComplexity: 'Abhängig vom Problem; O(n) Stack-Tiefe',
      spaceComplexity: 'O(Tiefe) Call-Stack'
    },
    deepDive: {
      overview: 'Memoization (Top-Down DP) speichert Zwischenergebnisse; Tail-Calls können durch Iteration ersetzt werden.',
      analogy: 'Memoization: Post-its für bereits berechnete Ergebnisse – nie zweimal dasselbe berechnen.',
      steps: [
        'Tail-Rekursion: letzter Aufruf ist der rekursive Aufruf – kann zu Schleife umgeschrieben werden.',
        'Memoization: cache = {}; if n in cache: return cache[n]; cache[n] = f(n).',
        '@functools.lru_cache(maxsize=None) automatisiert Memoization.',
        'Induktionsbeweis: zeige korrekte Basis, zeige induktiver Schritt erhält Korrektheit.',
      ],
      visual: 'fib ohne Memo: O(2^n) Aufrufe; mit @lru_cache: O(n) Aufrufe, n gecachte Werte.',
      commonMistakes: [
        'Memoization hilft nur bei überlappenden Teilproblemen – nicht bei einfachen linearen Rekursionen.',
        'sys.setrecursionlimit erhöhen für tiefe Rekursionen (aber Iteration bevorzugen).',
      ],
      practice: [
        'Fibonacci mit @lru_cache und iterativ vergleichen, Laufzeit messen.',
        'Türme von Hanoi rekursiv lösen und Schrittanzahl analysieren.',
      ],
    },
  },
};

export default overlay;
