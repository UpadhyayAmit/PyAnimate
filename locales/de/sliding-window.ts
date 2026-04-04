import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Finden Sie das maximale Summen-Teilarray der Größe k=3 in [2, 1, 5, 1, 3, 2].',
  hint: 'Berechnen Sie die erste Fenstersumme, dann gleiten: abgehende subtrahieren, eingehende addieren.',
  explanation: {
    simple: {
      overview: 'Fenster fester oder variabler Größe, das über ein Array gleitet, um Teilsequenzen in O(n) zu verarbeiten.',
      analogy: 'Durch ein Zugfenster schauen: der Ausblick ändert sich, wenn der Zug fährt – Elemente treten ein und aus.',
      steps: [
        'Festes Fenster: initialisiere Summe der ersten k Elemente.',
        'Gleite: subtract arr[i-k], add arr[i] – O(1) pro Schritt.',
        'Variables Fenster: expandiere rechts, schrumpfe links wenn Bedingung verletzt.',
      ],
      visual: '[2,1,5,1,3,2] k=3: window[0..2]=8→window[1..3]=7→window[2..4]=9→window[3..5]=6 → max=9',
      commonMistakes: [
        'Variables Fenster: vergessen, den linken Zeiger vorzurücken wenn Bedingung verletzt ist.',
        'Fenstergröße k: Array muss mindestens k Elemente haben – Randfall prüfen.',
      ],
      practice: [
        'Längstes Teilstring ohne wiederholte Zeichen finden.',
        'Minimale Länge eines Teilarrays mit Summe ≥ S finden.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1) oder O(k) je nach Anwendung'
    },
    deepDive: {
      overview: 'Monotone Deque ermöglicht O(n) Fenstermaximum; variables Fenster löst Probleme mit Zeichenkettenbedingungen.',
      analogy: 'Monotone Deque als Fahrzeugkonvoi: ältere langsamere Fahrzeuge werden entfernt wenn ein schnelleres eintritt.',
      steps: [
        'Deque-basiertes Fenstermaximum: Deque speichert Indizes in absteigender Wert-Reihenfolge.',
        'Neu eintreffendes Element: entferne alle kleineren Elemente von rechts.',
        'Fenster verlässt altes Maximum: entferne von links wenn Index außerhalb.',
        'Anwendungen: Max-Sliding-Window, Shortest Subarray with Sum ≥ K.',
      ],
      visual: '[1,3,-1,-3,5,3] k=3: Deque-Indizes; Max → [3,3,5,5,5,3]',
      commonMistakes: [
        'Deque speichert Indizes, nicht Werte – Indexvergleich für Fenster-Ablauf.',
        'Variables Fenster: Prüfung der Bedingung nach jeder Erweiterung, nicht nur am Fenster-Ende.',
      ],
      practice: [
        'Sliding Window Maximum (LeetCode 239) mit Deque implementieren.',
        'Längste Teilstring mit höchstens k unterschiedlichen Zeichen lösen.',
      ],
    },
  },
};

export default overlay;
