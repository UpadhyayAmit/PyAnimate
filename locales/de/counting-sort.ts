import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Counting Sort',
  hint: 'Sortiert Ganzzahlen in einem kleinen Bereich in O(n+k) durch Häufigkeitszählung.',
  approach: 'Zähle die Eingabewerte in einem Zählarray, dann rekonstruiere die sortierte Ausgabe aus den Zählungen.',
  useCases: [
    'Sortierung von Ganzzahlen in kleinem Bereich (z.B. Noten 0-100)',
    'Basis-Algorithmus für Radix Sort',
    'Wenn O(n+k) statt O(n log n) möglich ist',
  ],
  explanation: {
    simple: {
      overview: 'Zähle Häufigkeiten der Elemente, berechne Präfixsummen, platziere Elemente anhand ihrer Position.',
      analogy: 'Stimmen bei einer Wahl auszählen: Strichliste je Kandidat, dann kumulieren.',
      steps: [
        'Finde maximalen Wert k.',
        'Erstelle count-Array der Größe k+1, zähle jedes Element.',
        'Präfixsumme: count[i] += count[i-1].',
        'Rückwärts durch Eingabe: platziere arr[j] bei output[count[arr[j]]-1], dekrementiere count.',
      ],
      visual: '[1,4,1,2,7,5,2]: count→[0,2,2,0,1,1,0,1]; prefix→[0,2,4,4,5,6,6,7]; output→sortiert',
      commonMistakes: [
        'Rückwärtsdurchlauf für Stabilität vergessen (vorwärts würde Reihenfolge umkehren).',
        'k+1 Einträge im count-Array – nicht k.',
      ],
      practice: [
        'Counting Sort für negative Zahlen anpassen (Offset von min subtrahieren).',
        'Radix Sort implementieren (nutzt Counting Sort als stabilen Unter-Sortierer).',
      ],
      timeComplexity: 'O(n+k) wobei k der Wertebereich ist',
      spaceComplexity: 'O(n+k)'
    },
    deepDive: {
      overview: 'Counting Sort ist optimal wenn k=O(n); Basis für Radix Sort, der damit O(d·(n+k)) für d-stellige Zahlen erreicht.',
      analogy: 'Radix Sort: sortiere von rechts nach links jede Stelle mit Counting Sort – stabiles Unterverfahren ist entscheidend.',
      steps: [
        'Radix Sort LSD: iteriere von der niederwertigsten zur höchsten Stelle.',
        'Jede Stelle: Counting Sort mit k=10 (Dezimalziffern) oder k=256 (Bytes).',
        'Gesamtkomplexität: O(d·(n+k)) – für 32-bit Integer: d=4 Bytes, k=256.',
        'Bucket Sort: verteile in n Buckets, sortiere jeden mit Insertion Sort – O(n) average für uniform.',
      ],
      visual: 'Radix [170,45,75,90,802,24,2,66]: Einerstelle→Zehnerstelle→Hunderterstelle→sortiert',
      commonMistakes: [
        'Nicht-stabiles Sortierverfahren in Radix Sort verwenden – zerstört vorherige Stellen-Ordnung.',
        'Counting Sort bei großem k (z.B. Unicode) – zu viel Speicher.',
      ],
      practice: [
        'Radix Sort für 32-bit Integer per Byte implementieren.',
        'Bucket Sort für gleichverteilte Gleitkommazahlen in [0,1) implementieren.',
      ],
    },
  },
};

export default overlay;
