import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Quick Sort',
  hint: 'Wähle einen Pivot, partitioniere das Array und sortiere rekursiv.',
  approach: 'Wähle einen Pivot, partitioniere kleinere nach links, größere nach rechts, sortiere dann rekursiv beide Hälften.',
  useCases: [
    'Allgemeines schnelles In-Place-Sortieren',
    'Praktische Anwendungen durch Cache-Freundlichkeit',
    'Große zufällige Datensätze',
  ],
  explanation: {
    simple: {
      overview: 'Pivot wählen, Array partitionieren, rekursiv sortieren – im Durchschnitt O(n log n).',
      analogy: 'Bücher sortieren: wähle eine Leitkarte, lege alle kleineren links und größeren rechts davon ab.',
      steps: [
        'Wähle Pivot (z.B. letztes Element).',
        'Partition: Zeiger i startet vor Array, j durchläuft Array; wenn arr[j]<=pivot: i++, tausche arr[i] und arr[j].',
        'Tausche Pivot an Position i+1.',
        'Rekursiv auf linke (0..i) und rechte (i+2..n-1) Teilarrays anwenden.',
      ],
      visual: '[3,6,8,10,1,2,1] Pivot=1: Partition→[1,1,8,10,3,2,6]→rekursiv→sortiert',
      commonMistakes: [
        'Immer letztes/erstes Element als Pivot: bei sortiertem Input O(n²) – Median-of-Three verwenden.',
        '3-Wege-Partition vergessen bei vielen Duplikaten.',
      ],
      practice: [
        'Quick-Sort mit Median-of-Three Pivot-Wahl implementieren.',
        '3-Wege-Partition (Dutch National Flag) für Arrays mit vielen Duplikaten implementieren.',
      ],
      timeComplexity: 'O(n log n) Durchschnitt, O(n²) worst-case',
      spaceComplexity: 'O(log n) Call-Stack'
    },
    deepDive: {
      overview: 'Randomisierter Quick-Sort vermeidet worst-case; Introsort kombiniert Quick-Sort mit Heap-Sort als Fallback.',
      analogy: 'Introsort (std::sort in C++): Quick-Sort mit Rekursionstiefe-Monitor; wechselt zu Heap-Sort wenn zu tief.',
      steps: [
        'Randomisierter Pivot: uniform zufällig wählen → erwartet O(n log n) für alle Inputs.',
        '3-Wege-Partition (Bentley-McIlroy): Elemente gleich dem Pivot gruppieren → O(n) für n gleiche Elemente.',
        'Introsort: Quick-Sort bis Tiefe 2·log₂(n), dann Heap-Sort; Insertion Sort für kleine Subarrays.',
        'PDQ-Sort (Pattern-Defeating Quicksort) ist moderne Implementierung für std::sort.',
      ],
      visual: '3-Wege: [3,1,3,3,2] Pivot=3 → [1,2 | 3,3,3 | ] → rekursiv nur auf [1,2]',
      commonMistakes: [
        'Lomuto vs Hoare Partition: verschiedene Invarianten, nicht mischen.',
        'Tail-Call-Optimierung: immer erst die kleinere Hälfte rekursiv bearbeiten → O(log n) Stack.',
      ],
      practice: [
        'Hoare-Partition implementieren und mit Lomuto vergleichen.',
        'Quick-Select für k-kleinsten Element in O(n) durchschnittlich implementieren.',
      ],
    },
  },
};

export default overlay;
