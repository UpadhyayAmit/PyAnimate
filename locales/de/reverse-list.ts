import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Kehren Sie [1, 2, 3, 4, 5] in-place mit zwei Zeigern um. Verwenden Sie NICHT list.reverse().',
  hint: 'Beginnen Sie mit left=0, right=len-1. Tauschen Sie arr[left] und arr[right].',
  explanation: {
    simple: {
      overview: 'Eine Liste durch Tauschen der Elemente von beiden Enden nach innen umkehren oder Pythons eingebaute Umkehrung verwenden.',
      analogy: 'Ein Kartenspiel umdrehen: oben und unten tauschen, dann zweites und vorletztes, bis zur Mitte.',
      steps: [
        'Eingebaut: lst[::-1] gibt eine neue umgekehrte Liste zurück.',
        'In-place: lst.reverse() ändert die Liste direkt.',
        'Manuell mit Zwei-Zeigern: i=0, j=Länge-1; tauschen während i<j; i++, j--.',
      ],
      visual: '[1,2,3,4,5] → tausch(1,5) → tausch(2,4) → [5,4,3,2,1]',
      commonMistakes: [
        'lst[::-1] verwenden, wenn in-place benötigt wird (erzeugt unnötige Kopie).',
        'Off-by-one bei Stoppbedingung: stoppen wenn i >= j.',
      ],
      practice: [
        'Einen String mit dem Zwei-Zeiger-Ansatz umkehren.',
        'Prüfen, ob eine Liste ein Palindrom ist, durch Vergleich mit ihrer Umkehrung.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1) in-place, O(n) für Slice'
    },
    deepDive: {
      overview: 'list.reverse() ist eine C-Level-In-Place-Operation; reversed() gibt einen faulen Iterator zurück; Slicing allokiert eine neue Liste.',
      analogy: 'Bandspulen: reversed() ist lazy (sucht jedes Element bei Bedarf), Slicing kopiert das gesamte Band sofort.',
      steps: [
        'reversed(lst) gibt list_reverseiterator zurück – keine Kopie.',
        'list(reversed(lst)) erzwingt die Auswertung in eine neue Liste.',
        'for x in reversed(lst) ist speichereffizient für große Listen.',
        'numpy-Arrays: arr[::-1] erzeugt eine View (O(1), geteilter Speicher).',
      ],
      visual: 'reversed([1,2,3]) → Iterator, der auf Anforderung 3,2,1 liefert',
      commonMistakes: [
        'list.reverse() auf einem range oder tuple aufrufen (nicht unterstützt; vorher konvertieren).',
        'Während reversed()-Iteration verändern kann undefiniertes Verhalten verursachen.',
      ],
      practice: [
        'Eine verknüpfte Liste in-place umkehren.',
        'Eine große Datei rückwärts mit reversed() iterieren.',
      ],
    },
  },
};

export default overlay;
