import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Berechnen Sie Fläche und Umfang eines Rechtecks mit Breite=7 und Höhe=4.',
  hint: 'Fläche = Breite * Höhe. Umfang = 2 * (Breite + Höhe). Verwenden Sie ** für Potenzierung.',
  explanation: {
    simple: {
      overview: 'Pythons Arithmetik-Operatoren (+, -, *, /, //, %, **) führen Rechenoperationen auf Zahlen durch.',
      analogy: 'Ein Taschenrechner mit Extra-Tasten: // für ganzzahlige Division, % für den Rest, ** für Potenzierung.',
      steps: [
        '5 + 3 = 8 (Addition).',
        '17 // 5 = 3 (Ganzzahldivision, Rest wird verworfen).',
        '17 % 5 = 2 (Rest / Modulo).',
        '2 ** 10 = 1024 (Potenzierung).',
      ],
      visual: '17 ÷ 5 = 3 Rest 2  →  17//5 == 3, 17%5 == 2',
      commonMistakes: [
        '/ verwenden, wenn ganzzahlige Division benötigt wird (5/2 ist 2.5, nicht 2).',
        'Überraschungen durch Operatorpriorität: 2+3*4 ist 14, nicht 20.',
      ],
      practice: [
        'Die letzte Ziffer von 12345 mit % berechnen.',
        'Eine einfache Zinsformel implementieren.',
      ],
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Python-Ganzzahlen haben beliebige Präzision (kein Überlauf); Floats folgen IEEE 754 mit Rundungsfehlern.',
      analogy: 'Eine eingebaute BigInteger-Bibliothek; Floats sind wissenschaftliche Notation mit begrenzten Mantissa-Bits.',
      steps: [
        'Int-Operationen: exakt bis zur Speichergrenze.',
        'Float-Operationen: 0.1+0.2 ≈ 0.3 wegen binärer Brüche.',
        'Für exakte Dezimalarithmetik das decimal-Modul verwenden.',
      ],
      visual: '0.1 binär = 0.0001100110011... (periodisch) → auf 53 Bit gerundet',
      commonMistakes: [
        'Floats mit == vergleichen; abs(a-b) < epsilon verwenden.',
        'Sehr großen int durch float dividieren und Präzision verlieren.',
      ],
      practice: [
        '0.1+0.2 != 0.3 demonstrieren und mit math.isclose beheben.',
        '10**18 + 1 exakt mit Python-Ints berechnen.',
      ],
    },
  },
};

export default overlay;
