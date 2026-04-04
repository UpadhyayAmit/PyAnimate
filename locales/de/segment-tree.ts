import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Erstellen Sie einen Segmentbaum für [1,3,5,7,9,11]. Fragen Sie Summe von Index 1-3 ab.',
  hint: 'Bottom-up aufbauen. Summen durch rekursives Aufteilen des Bereichs abfragen. Update propagiert aufwärts.',
  explanation: {
    simple: {
      overview: 'Ein Segment-Baum beantwortet Bereichsabfragen (Summe, Min, Max) und Aktualisierungen in O(log n).',
      analogy: 'Unternehmenshierarchie: jeder Manager speichert das Aggregat (Summe/Max/Min) seines gesamten Teams.',
      steps: [
        'Aufbau: O(n) – jeder Knoten speichert Aggregat seines Bereichs.',
        'Bereichsabfrage [l,r]: rekursiv absteigen, Segmente kombinieren die in [l,r] passen.',
        'Punktaktualisierung: O(log n) – Blatt aktualisieren, Vorfahren neu berechnen.',
        'Bereichsaktualisierung mit Lazy-Propagation: Aktualisierungen aufschieben, bei Bedarf anwenden.',
      ],
      visual: 'Knoten für [0,7] deckt alle 8 Elemente ab; Knoten für [0,3] linke Hälfte; Blatt [2,2] deckt arr[2] ab.',
      commonMistakes: [
        'Off-by-One in Bereichsgrenzen (inklusiv vs. exklusiv).',
        'Lazy-Tags vor Kinder-Abfrage vergessen zu propagieren.',
      ],
      practice: [
        'Summen-Segment-Baum aufbauen; Summe von [l,r] abfragen.',
        'Lazy Bereichs-Addition-Aktualisierung hinzufügen.',
      ],
      timeComplexity: 'O(n) Aufbau, O(log n) Abfrage/Aktualisierung',
      spaceComplexity: 'O(4n) Array-basiert'
    },
    deepDive: {
      overview: 'Persistente und 2D Segment-Bäume unterstützen versionierte Historie und 2D-Bereichsabfragen.',
      analogy: 'Persistenter Baum: jede Aktualisierung erstellt neue Wurzel mit geteilten unveränderten Teilbäumen.',
      steps: [
        'Persistent: höchstens O(log n) neue Knoten pro Aktualisierung; alte Wurzeln bleiben intakt.',
        'Merge-Sort-Baum: jeder Knoten speichert sortierte Liste → O(log²n) k-kleinster Bereichswert.',
        '2D Segment-Baum: Segment-Baum von Segment-Bäumen → O(log²n) 2D-Bereichsabfrage.',
        'Fenwick (BIT) einfacher für Präfixsummen: O(n) Aufbau, O(log n) Aktualisierung/Abfrage mit 1/16 Konstante.',
      ],
      visual: 'Persistent: Versionen 0..k teilen Teilbäume; Version i abfragen während zu Version i+1 aktualisiert wird.',
      commonMistakes: [
        'Nicht erkennen, dass Fenwick-Baum für Präfixsummenabfragen ausreicht (Segment-Baum ist overkill).',
        'Persistenter Segment-Baum Speicher: O(n + q·log n) Knoten – vorallokieren um TLE zu vermeiden.',
      ],
      practice: [
        'Persistenten Segment-Baum für Bereichs-k-Minimum implementieren.',
        'Segment-Baum vs. Fenwick für Bereichssummenleistung vergleichen.',
      ],
    },
  },
};

export default overlay;
