import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Verwenden Sie zwei Zeiger auf sortiertem Array [1,3,6,8,10] um Paare mit Summe 11 zu finden.',
  hint: 'Starten Sie mit left=0, right=len-1. Wenn sum < Ziel: links nach rechts, sonst rechts nach links.',
  explanation: {
    simple: {
      overview: 'Zwei Zeiger konvergieren von außen nach innen (oder einer läuft schneller) um Paare oder Teilmengen in O(n) zu finden.',
      analogy: 'Zwei Personen laufen von beiden Enden einer Brücke aufeinander zu – sparen die Hälfte des Weges.',
      steps: [
        'Für gegenläufige Zeiger: Array sortieren, l=0, r=len-1.',
        'Prüfe Bedingung (z.B. Summe), bewege l++  wenn zu klein, r-- wenn zu groß.',
        'Stoppe wenn l>=r.',
      ],
      visual: '[-2,1,3,5] target=4: l=-2,r=5→sum=3<4→l++; l=1,r=5→sum=6>4→r--; l=1,r=3→sum=4→gefunden',
      commonMistakes: [
        'Zwei-Zeiger-Technik ohne vorheriges Sortieren kann falsche Ergebnisse liefern.',
        'Fast/Slow Zeiger für Zykelerkennung: beide starten an head, nicht an verschiedenen Stellen.',
      ],
      practice: [
        '2Sum mit sortiertem Array lösen.',
        'Zykus in verlinkter Liste mit Floyd\'s Algorithmus erkennen.',
      ],
      timeComplexity: 'O(n log n) inkl. Sortierung, O(n) Zwei-Zeiger-Phase',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Muster: gegenläufige Zeiger, Fast/Slow, Dutch-National-Flag; Anwendung auf Strings, Arrays und verkettete Listen.',
      analogy: 'Dutch National Flag (Dijkstra): 3-Wege-Partition in O(n) mit 3 Bereichen: lo, mid, hi.',
      steps: [
        'Fast/Slow (Floyd): slow += 1 Schritt, fast += 2 Schritte – Zykus wenn sie treffen.',
        'Dutch Flag: lo=0, mid=0, hi=n-1; Tausche basierend auf arr[mid].',
        'k-Sum Reduktion: fixiere k-2 Elemente, löse 2Sum auf Rest.',
        'Fensterproblem: beide Zeiger laufen vorwärts (Sliding Window-Variante).',
      ],
      visual: 'Dutch Flag [2,0,2,1,1,0]: lo=0,mid=0,hi=5→Tausche→[0,0,1,1,2,2]',
      commonMistakes: [
        'Dutch Flag: mid++ vergessen nachdem arr[mid]==1 (mittleres Element an Ort belassen).',
        'Fast Pointer auf None prüfen bevor next.next zugreifen.',
      ],
      practice: [
        'Dutch National Flag (Sort Colors LeetCode 75) implementieren.',
        'Trap Rainwater Problem mit Zwei-Zeigern lösen.',
      ],
    },
  },
};

export default overlay;
