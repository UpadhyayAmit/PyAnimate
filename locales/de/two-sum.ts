import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Finden Sie zwei Indizes in [2,7,11,15] die zu 9 summieren. Dann für Ziel=18.',
  hint: 'Hash-Map: Für jede Zahl prüfen ob (Ziel - Zahl) bereits gespeichert ist.',
  explanation: {
    simple: {
      overview: 'Zwei Indizes finden, deren Werte zusammen die Zielzahl ergeben – mit Hash Map in O(n).',
      analogy: 'Auf einer Party jeden Namen merken; wenn man jemanden trifft, prüfen ob das Komplement bereits gesehen wurde.',
      steps: [
        'Erstelle seen = {}.',
        'Für jedes (i, num) in enumerate(nums):',
        'complement = target - num.',
        'Wenn complement in seen: return [seen[complement], i].',
        'Sonst: seen[num] = i.',
      ],
      visual: '[2,7,11,15], target=9 → sehe 2(komp=7,nein) → sehe 7(komp=2,ja) → [0,1]',
      commonMistakes: [
        'Falscher Rückgabe-Index (gespeicherten Index zurückgeben, nicht den des Komplements).',
        'Verschachteltes O(n²) verwenden statt O(n) mit Hash Map.',
      ],
      practice: [
        'Dreiersumme (3Sum): Sortierung + Zwei-Zeiger.',
        'Alle Paare zurückgeben (nicht nur das erste), Duplikate behandeln.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Two-Sum ist das kanonische Hash-Map-Problem; k-Sum-Varianten reduzieren auf Two-Sum via Sortierung + Zwei-Zeiger.',
      analogy: 'k-Sum auf 2-Sum reduzieren: k-2 Elemente fixieren, Rest mit Zwei-Zeiger lösen.',
      steps: [
        '2-Sum auf sortiertem Array: zwei Zeiger l=0, r=n-1; bewege basierend auf Summe vs. Target.',
        '3-Sum: fixiere a[i], löse 2-Sum für a[i+1..n-1] mit target-a[i]; sort + Zwei-Zeiger.',
        '4-Sum: zwei äußere Elemente fixieren, 2-Sum auf innerem Fenster aufrufen.',
        'Deduplizierung: Duplikate überspringen beim Weiterbewegen der Zeiger.',
      ],
      visual: 'Sortiert [1,3,5,7], target=8: l=0(1),r=3(7)→Summe=8→gefunden',
      commonMistakes: [
        'Keine Deduplizierung bei k-Sum führt zu duplizierten Ergebnis-Tupeln.',
        'Hash-Map 2-Sum kann gleiche Index-Wiederverwendung nicht erzwingen – Schutzmaßnahme prüfen.',
      ],
      practice: [
        'LeetCode 15 (3Sum) mit diesem Muster lösen.',
        'Anzahl aller Paare zurückgeben (nicht nur Indizes).',
      ],
    },
  },
};

export default overlay;
