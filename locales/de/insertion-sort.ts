import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Insertion Sort',
  hint: 'Füge jedes Element an die richtige Position des sortierten Teils ein.',
  approach: 'Fügen Sie jedes Element an seiner korrekten sortierten Position ein, indem Sie andere nach rechts verschieben.',
  useCases: [
    'Sehr effizient bei fast sortierten Daten',
    'Sortieren von Echtzeit-Daten, die einzeln eintreffen',
    'Einfach und schnell für kleine Arrays',
  ],
  explanation: {
    simple: {
      overview: 'Aufbau eines sortierten Präfixes durch wiederholtes Einfügen des nächsten Elements an die richtige Position.',
      analogy: 'Spielkarten sortieren: jede neue Karte wird von rechts nach links an die richtige Stelle geschoben.',
      steps: [
        'Starte mit Element an Index 1.',
        'Speichere den aktuellen Schlüssel (key = arr[i]).',
        'Verschiebe alle größeren Elemente links davon um eine Position nach rechts.',
        'Füge den Schlüssel in die entstandene Lücke ein.',
        'Wiederhole bis das Array vollständig sortiert ist.',
      ],
      visual: '[5,1,4,2,8]: Schritt 1→[1,5,4,2,8]; Schritt 2→[1,4,5,2,8]; Schritt 3→[1,2,4,5,8]',
      commonMistakes: [
        'Inner-Loop-Grenze vergessen: Vergleich muss stoppen, wenn j<0 oder arr[j]<=key.',
        'Beim fast sortierten Array ist Insertion Sort mit O(n) optimal – diesen Vorteil nicht übersehen.',
      ],
      practice: [
        'Insertion Sort für eine Liste von Strings nach Länge implementieren.',
        'Zählen, wie viele Vertauschungen nötig sind (entspricht Anzahl von Inversionen).',
      ],
      timeComplexity: 'O(n²) worst-case, O(n) best-case (bereits sortiert)',
      spaceComplexity: 'O(1) in-place'
    },
    deepDive: {
      overview: 'Insertion Sort ist stabil und optimal für fast sortierte oder sehr kleine Arrays; basis für Timsort.',
      analogy: 'Timsort (Python intern) verwendet Insertion Sort für Runs kleiner als ~64 Elemente.',
      steps: [
        'Schleifeninvariante: arr[0..i-1] ist nach jedem Schritt sortiert.',
        'Induktiver Beweis: wenn arr[0..i-1] sortiert ist, dann ist arr[0..i] nach dem Einfügen sortiert.',
        'Binary-Insertion-Sort: Position per Binärsuche in O(log i) finden, aber Verschiebungen bleiben O(n²).',
        'Shell-Sort verallgemeinert Insertion Sort mit größeren Gaps für O(n^1.3) praktische Leistung.',
      ],
      visual: 'Binary Insertion: finde Position in O(log i), schiebe Elemente in O(i) – Gesamtzeit bleibt O(n²).',
      commonMistakes: [
        'Binary-Insertion-Sort reduziert Vergleiche auf O(n log n), nicht aber die Verschiebungen.',
        'Insertion Sort ist instabil machen durch falschen Vergleich (< statt <=).',
      ],
      practice: [
        'Shell-Sort mit Hibbard-Gaps implementieren und mit Insertion Sort vergleichen.',
        'Timsort-Strategie nachbauen: finde natürliche Runs, sortiere mit Insertion Sort.',
      ],
    },
  },
};

export default overlay;
