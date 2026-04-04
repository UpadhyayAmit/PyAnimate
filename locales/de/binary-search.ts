import type { LessonLocaleOverlay } from '../types';

const binarySearch: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Binary Search halbiert einen sortierten Bereich, bis das target gefunden ist oder der Bereich leer ist.',
      analogy: 'Wie im Wörterbuch suchen: Mitte aufschlagen, links oder rechts entscheiden, wiederholen.',
      steps: [
        'Starte mit low = 0 und high = n - 1.',
        'Berechne mid = (low + high) // 2.',
        'Wenn arr[mid] == target, gib mid zurück.',
        'Wenn target kleiner ist, setze high = mid - 1.',
        'Sonst setze low = mid + 1, solange low <= high.',
      ],
      visual: '[1 3 5 7 9] -> Mitte 5 -> nach rechts -> 7 gefunden.',
      commonMistakes: [
        'mid nach low/high-Update nicht neu berechnen.',
        'Schleife mit < statt <=, dadurch letztes Element übersprungen.',
        'mid = (low + high) kann überlaufen; besser low + (high - low) // 2.',
      ],
      practice: [
        'Trace für ein 7er-Array mit vorhandenem und fehlendem target.',
        'Variante mit Insertionsindex implementieren.',
        'Erklären, warum sortierte Daten Voraussetzung sind.',
      ],
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Binary Search ist divide-and-conquer auf monotonen Bedingungen; jeder Vergleich entfernt die Hälfte.',
      analogy: 'Entscheidungsbaum mit Höhe ~ log2(n).',
      steps: [
        'Inklusive Grenzen [low, high] halten.',
        'mid = low + ((high - low) >> 1) ist overflow-sicher.',
        'Je nach Vergleich mit arr[mid] die passende Hälfte behalten.',
        'Invariant: Existiert target, bleibt es in [low, high].',
        'Bei low > high Ende; low ist Insertionspunkt.',
      ],
      visual: '[0..n-1] -> linke oder rechte Hälfte -> wieder halbieren.',
      commonMistakes: [
        'low = mid oder high = mid verursacht Endlosschleifen.',
        'Keine Duplikat-Strategie (erste/letzte Position).',
        'Auf unsortierte Daten anwenden.',
      ],
      practice: [
        'lower_bound und upper_bound implementieren.',
        'Loop-Invariant knapp beweisen.',
        'Binary Search für rotierte sortierte Arrays erweitern.',
      ],
      timeComplexity: 'Theta(log n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default binarySearch;
