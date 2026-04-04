import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Selection Sort',
  hint: 'Finde in jedem Durchlauf das Minimum und tausche es an die richtige Position.',
  approach: 'Finde in jeder Iteration das Minimum im unsortierten Teil und tausche es an das Ende des sortierten Teils.',
  useCases: [
    'Einfaches Sortieren kleiner Datensätze',
    'In-Place-Sortierung bei beschränktem Speicher',
    'Lehrzwecke wegen der klaren Logik',
  ],
  explanation: {
    simple: {
      overview: 'Wiederholtes Suchen des Minimums im unsortierten Teil und einmaliges Tauschen pro Durchlauf.',
      analogy: 'Schüler nach Größe aufstellen: immer den Kleinsten heraussuchen und nach vorne stellen.',
      steps: [
        'Für i = 0..n-2: finde Index min_idx des kleinsten Elements in arr[i..n-1].',
        'Tausche arr[i] mit arr[min_idx].',
        'Nach n-1 Durchläufen ist das Array sortiert.',
      ],
      visual: '[64,25,12,22,11]: 11 gefunden→tausche→[11,25,12,22,64]; 12 gefunden→[11,12,25,22,64]; ...',
      commonMistakes: [
        'Pro Durchlauf wird maximal einmal getauscht – Selection Sort macht immer O(n) Tausche gesamt.',
        'Selection Sort ist instabil: gleiche Elemente können ihre Reihenfolge ändern.',
      ],
      practice: [
        'Selection Sort für absteigende Reihenfolge anpassen.',
        'Anzahl der Tauschoperationen mit Bubble Sort vergleichen.',
      ],
      timeComplexity: 'O(n²) Vergleiche, O(n) Tausche',
      spaceComplexity: 'O(1) in-place'
    },
    deepDive: {
      overview: 'Selection Sort macht immer Θ(n²) Vergleiche, aber nur O(n) Schreibzugriffe – vorteilhaft wenn Schreiben teuer ist.',
      analogy: 'Flash-Speicher: Schreibvorgänge sind teuer, Lesevorgänge billig – Selection Sort minimiert Writes.',
      steps: [
        'Ist nicht stabil, kann aber stabilisiert werden durch Einfügen statt Tauschen (O(n²) Schreibvorgänge).',
        'Bi-direktionale Variante (Cocktail Selection Sort): sucht gleichzeitig Min und Max.',
        'Heap-Sort ist konzeptionell Selection Sort mit einer Min-Heap-Datenstruktur.',
        'Für fast-sortierte Daten: Insertion Sort oder Timsort deutlich überlegen.',
      ],
      visual: 'Heap-Sort = Selection Sort mit Heap: extract-min in O(log n) statt O(n) → O(n log n) gesamt.',
      commonMistakes: [
        'Selection Sort als \'fast genug\' für große Arrays ansehen – bei n=10^6 deutlich langsamer als Quicksort.',
        'Stabilität fälschlicherweise annehmen – [3a, 3b, 1] → nach Sort: [1, 3b, 3a].',
      ],
      practice: [
        'Stabilisierte Version implementieren (Einfügen statt Tauschen).',
        'Selection Sort und Heap-Sort auf 10.000 Elementen zeitmäßig vergleichen.',
      ],
    },
  },
};

export default overlay;
