import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Schreiben Sie ein Programm, das prüft, ob eine Zahl positiv, negativ oder null ist.',
  hint: 'Verwenden Sie if/elif/else. Testen Sie jeden Zweig durch Ändern des Eingabewerts.',
  explanation: {
    simple: {
      overview: 'if/elif/else lässt dein Programm je nach Bedingungen verschiedene Pfade einschlagen.',
      analogy: 'Eine Ampel: Grün → fahren, Gelb → bremsen, Rot → anhalten.',
      steps: [
        'Bedingung nach if schreiben: if score >= 90:',
        'elif-Zweige für weitere Bedingungen hinzufügen.',
        'Mit else den Standardfall abschließen.',
        'Python prüft von oben nach unten und nimmt den ersten wahren Zweig.',
      ],
      visual: 'score=85 → if(>=90): False → elif(>=70): True → print(\'B\')',
      commonMistakes: [
        '= (Zuweisung) statt == (Vergleich) verwenden.',
        'Überlappende elif-Bedingungen, die manche Zweige unerreichbar machen.',
      ],
      practice: [
        'Einen Notenrechner (A/B/C/D/F) implementieren.',
        'Prüfen, ob eine Zahl positiv, negativ oder null ist.',
      ],
      timeComplexity: 'O(1) pro Auswertung',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Python wertet Bedingungen über Wahrheitswerte aus: jeder Nicht-Null/Nicht-Leer-Wert gilt als True.',
      analogy: 'Kurzschlussauswertung: \'and\' stoppt beim ersten False, \'or\' beim ersten True.',
      steps: [
        'x and y: gibt x zurück, wenn x falsy ist, sonst y.',
        'x or y: gibt x zurück, wenn x truthy ist, sonst y.',
        'not x: kehrt den Wahrheitswert um.',
        'Verkettete Vergleiche: 1 < x < 10 funktioniert wie erwartet.',
      ],
      visual: '0 and \'hallo\' → 0 (stoppt bei 0); \'\' or \'standard\' → \'standard\'',
      commonMistakes: [
        'Auf Wahrheitswerte mit 0 oder leerem String setzen, wenn None-Prüfung gemeint ist.',
        '\'is None\' vs \'== None\' nicht unterscheiden.',
      ],
      practice: [
        'Standardwert-Muster verwenden: value = x or default.',
        'Ternären Ausdruck: result = a if condition else b implementieren.',
      ],
    },
  },
};

export default overlay;
