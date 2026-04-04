import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Zusammenführen von [1,3,5,7] und [2,4,6,8] zu einem sortierten Array ohne sort().',
  hint: 'Verwenden Sie zwei Zeiger. Vergleichen Sie, hängen Sie das Kleinere an, rücken Sie vor.',
  explanation: {
    simple: {
      overview: 'Zwei sortierte Listen mit Zwei-Zeiger-Technik in O(n+m) zu einer sortierten Liste zusammenführen.',
      analogy: 'Zwei Kartenstapel, die bereits sortiert sind: immer die kleinste Karte vom Anfang beider Stapel nehmen.',
      steps: [
        'Initialisiere i=0, j=0, result=[].',
        'Solange i<len(a) und j<len(b): füge das kleinere Element hinzu, rücke Zeiger vor.',
        'Füge verbleibende Elemente der nicht-leeren Liste hinzu.',
      ],
      visual: 'a=[1,3,5], b=[2,4,6]: 1<2→[1]; 3>2→[1,2]; 3<4→[1,2,3]; 5>4→[1,2,3,4]; 5<6→[1,2,3,4,5]; +6→[1,2,3,4,5,6]',
      commonMistakes: [
        'Vergessen, den Rest einer Liste anzuhängen nachdem die andere erschöpft ist.',
        'In-Place-Merge in einem Array erfordert sorgfältiges Indexmanagement.',
      ],
      practice: [
        'k sortierte Listen mit einem Min-Heap zusammenführen.',
        'Merge-Step in Merge-Sort implementieren.',
      ],
      timeComplexity: 'O(n+m)',
      spaceComplexity: 'O(n+m) für Ergebnis-Liste'
    },
    deepDive: {
      overview: 'k-Wege-Merge mit Min-Heap ist Basis für externe Sortierung; Anwendung bei Merge Phase in MapReduce.',
      analogy: 'k Fließbänder liefern sortierte Teile; ein Min-Heap wählt stets das kleinste nächste Element.',
      steps: [
        'Initialisiere Heap mit erstem Element jeder Liste samt Listen-Index.',
        'Pop das kleinste Element, füge es zum Ergebnis hinzu.',
        'Push das nächste Element derselben Liste (falls vorhanden).',
        'Komplexität: O((n1+n2+...+nk) log k).',
      ],
      visual: 'k=3 Listen: Heap[(1,0),(2,1),(3,2)]→pop(1)→push nächstes aus Liste 0→...',
      commonMistakes: [
        'Heap vergleicht Tupel lexikografisch – sicherstellen, dass der Listeninhalt vergleichbar ist.',
        'Leere Listen beim Heap-Push ignorieren, sonst IndexError.',
      ],
      practice: [
        'K sortierte Arrays zu einem sortieren (LeetCode 23).',
        'Externes Sortieralgorithmus-Konzept mit k-Wege-Merge erklären.',
      ],
    },
  },
};

export default overlay;
