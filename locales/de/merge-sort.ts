import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Merge Sort',
  hint: 'Teile, sortiere rekursiv und füge zusammen — immer O(n log n).',
  approach: 'Teile das Array rekursiv in Hälften, bis nur einzelne Elemente übrig sind, dann führe sortierte Hälften zusammen.',
  useCases: [
    'Große Datensätze auf Festplatte (externes Sortieren)',
    'Sortieren von verketteten Listen',
    'Wo stabiles Sortieren erforderlich ist',
  ],
  explanation: {
    simple: {
      overview: 'Teilen → Rekursiv sortieren → Zusammenführen; garantiert O(n log n) für alle Eingaben.',
      analogy: 'Zwei sortierte Kartenstapel zusammenführen: immer die kleinste Karte oben nehmen.',
      steps: [
        'Teile das Array in der Mitte (mid = len//2).',
        'Sortiere rekursiv linke und rechte Hälfte.',
        'Zusammenführen: zwei Zeiger über beide Hälften, jeweils das kleinere Element nehmen.',
        'Kopiere verbleibende Elemente der nicht-leeren Hälfte.',
      ],
      visual: '[8,3,5,1]: teile→[8,3],[5,1]→sort→[3,8],[1,5]→merge→[1,3,5,8]',
      commonMistakes: [
        'Vergessen, den Rest einer Hälfte zu kopieren nach dem Zusammenführen.',
        'In-Place-Merge ist schwierig und langsam – normalerweise Hilfsspeicher verwenden.',
      ],
      practice: [
        'Merge-Sort für verkettete Listen implementieren.',
        'Bottom-Up iterativen Merge-Sort ohne Rekursion implementieren.',
      ],
      timeComplexity: 'O(n log n) best/average/worst',
      spaceComplexity: 'O(n) Hilfsspeicher'
    },
    deepDive: {
      overview: 'Merge-Sort ist stabil, parallelisierbar und Basis für externe Sortierung großer Datensätze.',
      analogy: 'Externe Sortierung: Chunks auf Festplatte sortieren, dann k-Wege-Merge mit Min-Heap.',
      steps: [
        'Bottom-Up Merge-Sort: Fange mit Runs der Größe 1 an, verdopple die Größe in jeder Runde.',
        'Parallelisierung: Teile Array auf p Prozessen, sortiere parallel, merge hierarchisch.',
        'Natural Merge-Sort: erkenne bestehende sortierte Runs (Basis von Timsort).',
        'k-Wege-Merge: Heap mit k Einträgen, O(n log k) – gut für externe Sortierung.',
      ],
      visual: 'Bottom-Up: [4,2,1,3]→Runs[4],[2],[1],[3]→merge-pairs→[2,4],[1,3]→final→[1,2,3,4]',
      commonMistakes: [
        'Stack-Overflow bei großen Arrays durch tiefe Rekursion – Bottom-Up als Alternative.',
        'Stabiles Merge erfordert: bei Gleichheit linkes Element zuerst nehmen.',
      ],
      practice: [
        'Inversionen zählen mit modifiziertem Merge-Sort.',
        'Iterativen Bottom-Up Merge-Sort implementieren.',
      ],
    },
  },
};

export default overlay;
