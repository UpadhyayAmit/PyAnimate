import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Finden Sie Min und Max von [34, 7, 23, 32, 5, 62] in EINEM Durchlauf ohne min()/max().',
  hint: 'Initialisieren Sie beide auf das erste Element und vergleichen Sie jedes verbleibende.',
  explanation: {
    simple: {
      overview: 'Die Liste einmal durchlaufen und den kleinsten sowie größten bisher gesehenen Wert verfolgen.',
      analogy: 'Eine Straße entlanggehen und das höchste und kleinste Gebäude notieren.',
      steps: [
        'min_val = max_val = liste[0] initialisieren.',
        'Für jedes Element: min_val aktualisieren falls kleiner, max_val falls größer.',
        'Am Ende beide Werte zurückgeben.',
        'Alternativ eingebaute Funktionen: min(lst), max(lst) verwenden.',
      ],
      visual: '[3,1,4,1,5,9] → min=1, max=9 in einem Durchlauf',
      commonMistakes: [
        'min/max mit 0 statt dem ersten Element initialisieren (scheitert bei rein negativen Werten).',
        'min() und max() separat aufrufen – zwei Durchläufe statt einem.',
      ],
      practice: [
        'Min und Max in einem Durchlauf ohne eingebaute Funktionen finden.',
        'Das zweitgrößte Element finden.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Die Turniermethode findet Min und Max in 3n/2 - 2 Vergleichen statt 2n-2 beim naiven Ansatz.',
      analogy: 'Sportturnierklammer: Paare treten zuerst gegeneinander an, dann rücken Sieger und Verlierer getrennt vor.',
      steps: [
        'Elemente zu Paaren zusammenfassen: 1 Vergleich pro 2 Elemente → n/2 Vergleiche.',
        'Min aus dem Verlierer-Stapel, Max aus dem Sieger-Stapel verfolgen.',
        'Gesamtvergleiche: 3n/2 - 2 (optimale untere Schranke für dieses Problem).',
        'Pythons eingebaute min/max unterstützen key= und default= Parameter.',
      ],
      visual: 'Paare: (3,1)→min≤1,max≥3; (4,5)→min≤4,max≥5; zusammenführen → min=1,max=9',
      commonMistakes: [
        'Turniermethode bei großem n ignorieren, wenn Vergleiche kostspielig sind (z.B. Festplattenzugriffe).',
        'key= in min/max nicht verwenden, wenn nach einem berechnetem Attribut sortiert wird.',
      ],
      practice: [
        'Turnier-Min-Max implementieren und Vergleiche zählen.',
        'Min einer Objektliste nach einem Schlüsselattribut finden.',
      ],
    },
  },
};

export default overlay;
