import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Iterieren Sie über eine Liste von Früchten und drucken Sie jede mit ihrem Index mit enumerate().',
  hint: 'enumerate(liste) gibt (Index, Wert)-Paare. Entpacken Sie im for-Statement.',
  explanation: {
    simple: {
      overview: 'Eine for-Schleife iteriert über jedes Element einer Sequenz und führt den Rumpf einmal pro Element aus.',
      analogy: 'Lernkarten einzeln durchblättern, bis der Stapel fertig ist.',
      steps: [
        'for item in iterable: – Python holt bei jeder Iteration das nächste Element.',
        'range(n) erzeugt Ganzzahlen 0..n-1.',
        'break beendet früh; continue springt zur nächsten Iteration.',
        'Die else-Klausel läuft, wenn die Schleife ohne break abgeschlossen wird.',
      ],
      visual: 'for i in range(3):  → i=0, Rumpf; i=1, Rumpf; i=2, Rumpf; fertig',
      commonMistakes: [
        'Die Liste verändern, über die iteriert wird (Kopie verwenden).',
        'Off-by-one mit range: range(1,n+1) für 1..n.',
      ],
      practice: [
        'Alle Zahlen in einer Liste mit einer for-Schleife summieren.',
        'Das kleine Einmaleins der 7 ausgeben.',
      ],
      timeComplexity: 'O(n) für n Iterationen',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'for ruft iter() auf dem Iterable auf und ruft wiederholt next() auf, bis StopIteration ausgelöst wird.',
      analogy: 'Eine Generator-Pipeline: jeder next()-Aufruf zieht ein Element durch die Kette.',
      steps: [
        'iter(obj) gibt ein Iterator-Objekt mit __next__ zurück.',
        'next() rückt vor und gibt den Wert zurück.',
        'StopIteration signalisiert das Ende der Schleife.',
        'enumerate liefert (Index, Wert)-Paare; zip verbindet Iterables.',
      ],
      visual: 'list.__iter__() → list_iterator → next() × n → StopIteration',
      commonMistakes: [
        'Erwarten, dass for mit einem nicht-iterierbaren Objekt (int) funktioniert.',
        'Vergessen, dass Generatoren nur einmal konsumiert werden können.',
      ],
      practice: [
        'Ein eigenes range() mit einem Generator implementieren.',
        'itertools.chain verwenden, um über mehrere Listen nahtlos zu iterieren.',
      ],
    },
  },
};

export default overlay;
