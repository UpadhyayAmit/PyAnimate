import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Erstellen Sie Variablen für Ihr Alter (int), Größe (float) und Name (str).',
  hint: 'Verwenden Sie type() um den Variablentyp zu prüfen. f-Strings vereinfachen die Ausgabe.',
  explanation: {
    simple: {
      overview: 'Variablen sind benannte Behälter; Typen teilen Python mit, welche Art von Daten darin steckt.',
      analogy: 'Beschriftete Gläser: ein \'age\'-Glas enthält eine Zahl, ein \'name\'-Glas enthält Text.',
      steps: [
        'Zuweisung mit =: x = 5.',
        'Python ermittelt den Typ automatisch.',
        'Mit type(x) den Typ abfragen.',
      ],
      visual: 'x = 42  →  Box mit Label x enthält int 42',
      commonMistakes: [
        'Eine Variable verwenden, bevor sie zugewiesen wurde.',
        'Erwarten, dass + einen int und einen String ohne Konvertierung verbindet.',
      ],
      practice: [
        'Variablen für Name, Alter und Größe anlegen und ihre Typen ausgeben.',
        'Eine Variable von int zu str umzuweisen und das Ergebnis beobachten.',
      ],
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(1) pro Variable'
    },
    deepDive: {
      overview: 'Python-Variablen sind Referenzen (Zeiger) auf Heap-Objekte; Zuweisung bindet die Referenz um, nicht das Objekt.',
      analogy: 'Haftnotizen, die auf Objekte in einem Regal zeigen; zwei Haftnotizen können auf dasselbe Objekt zeigen.',
      steps: [
        'a = 5 erzeugt int-Objekt 5 und bindet den Namen \'a\'.',
        'b = a lässt \'b\' auf dasselbe Objekt zeigen.',
        'a = 6 bindet \'a\' um; \'b\' zeigt noch immer auf 5.',
      ],
      visual: 'a → [5], b → [5]  dann  a → [6], b → [5]',
      commonMistakes: [
        'Denken, b = a kopiert den Wert (kopiert die Referenz bei veränderlichen Typen).',
        'Vergessen, dass Python-Ints unveränderlich sind, sodass Neuzuweisung sicher ist.',
      ],
      practice: [
        'id(a) vor und nach Neuzuweisung vergleichen.',
        'Alias bei Listen prüfen: a=[1,2]; b=a; a.append(3); print(b).',
      ],
    },
  },
};

export default overlay;
