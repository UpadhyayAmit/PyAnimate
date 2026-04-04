import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Wenden Sie Floyd-Warshall an: [[0,3,∞,7],[8,0,2,∞],[5,∞,0,1],[2,∞,∞,0]].',
  hint: 'Drei verschachtelte Schleifen: k, i, j. Aktualisieren wenn dist[i][k]+dist[k][j] < dist[i][j].',
  explanation: {
    simple: {
      overview: 'All-Pairs Kürzeste Pfade mit dynamischer Programmierung; behandelt negative Kanten, nicht aber negative Zyklen.',
      analogy: 'Jeden möglichen Zwischenort fragen: \'Komme ich von A über C nach B schneller als direkt?\'',
      steps: [
        'Initialisiere dist[i][j] = Kantengewicht oder ∞; dist[i][i]=0.',
        'Für jeden Zwischenknoten k: für jedes (i,j): dist[i][j] = min(dist[i][j], dist[i][k]+dist[k][j]).',
        'Nach V Iterationen über k ist dist[i][j] der Kürzeste-Pfad für alle Paare.',
      ],
      visual: 'V=3: iteriere k=0,1,2 – jede Runde prüft eine Zwischenstadt für alle Paare.',
      commonMistakes: [
        'Schleifenreihenfolge: k ist äußerste Schleife, dann i, dann j – nicht i,j,k.',
        'Negativer Zyklus: dist[i][i] < 0 nach dem Algorithmus zeigt negativen Zyklus.',
      ],
      practice: [
        'Negative Zyklen mit Floyd-Warshall erkennen.',
        'Kürzesten Pfad zwischen jedem Paar in einem dichten Graphen finden.',
      ],
      timeComplexity: 'O(V³)',
      spaceComplexity: 'O(V²)'
    },
    deepDive: {
      overview: 'Floyd-Warshall kann transitive Hülle und Minimax-Pfad mit kleinen Modifikationen finden.',
      analogy: 'Jede k-Iteration ist eine DP-Rekurrenz: Kürzester Pfad nur über Knoten {0..k} als Zwischenstationen.',
      steps: [
        'Transitive Hülle: min/+ durch OR/AND ersetzen.',
        'Minimax-Pfad: min(Summe) durch max(min(Kantengewicht)) ersetzen.',
        'Pfadrekonstruktion: parent[i][j]-Matrix parallel zu dist aktualisieren.',
        'Johnsons Algorithmus übertrifft Floyd bei sparse Graphen: O(V² log V + VE).',
      ],
      visual: 'Nach k=2: dist[0][3] kann kürzer sein über 0→2→3 als direkt 0→3.',
      commonMistakes: [
        'dist[i][j]=∞ für Nicht-Kanten nicht initialisieren (0 lassen → falsche Kurzschlüsse).',
        'Gleitkomma-Overflow bei ∞+Gewicht – Guard hinzufügen: if dist[i][k] == INF: continue.',
      ],
      practice: [
        'Pfadrekonstruktion mit Parent-Matrix implementieren.',
        'Floyd-Warshall vs. Dijkstra von jeder Quelle vergleichen.',
      ],
    },
  },
};

export default overlay;
