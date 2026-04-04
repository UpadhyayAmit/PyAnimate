import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Finden Sie MST von Kanten: (A-B,4), (A-C,2), (B-C,1), (B-D,5), (C-D,8).',
  hint: 'Kanten nach Gewicht sortieren. Union-Find für Zykluserkennung verwenden.',
  explanation: {
    simple: {
      overview: 'Kruskals Algorithmus findet den minimalen Spannbaum durch gieriges Hinzufügen der günstigsten Kante ohne Zyklus.',
      analogy: 'Stromleitungen zwischen Städten legen: immer das billigste Kabelpaar verbinden, das noch nicht indirekt verbunden ist.',
      steps: [
        'Alle Kanten nach Gewicht aufsteigend sortieren.',
        'Für jede Kante (u,v,w): wenn find(u) != find(v): Kante hinzufügen und union(u,v).',
        'Stoppen wenn V-1 Kanten hinzugefügt (Spannbaum vollständig).',
        'Union-Find mit Pfadkompression und Rang verwenden.',
      ],
      visual: 'Kanten sortiert: (1,2,1),(1,3,2),(2,4,2),(3,4,3) → MST verwendet erste 3 Kanten, Gesamtgewicht 5.',
      commonMistakes: [
        'Kanten nicht zuerst sortieren.',
        'Union-Find weglassen → Zyklusprüfung ist O(V) pro Kante statt O(α(V)).',
      ],
      practice: [
        'Kruskal mit Union-Find implementieren; MST-Gewicht ausgeben.',
        'Kruskal vs. Prim für dichte vs. sparse Graphen vergleichen.',
      ],
      timeComplexity: 'O(E log E)',
      spaceComplexity: 'O(V+E)'
    },
    deepDive: {
      overview: 'Union-Find mit Pfadkompression und Union-by-Rank erreicht nahezu O(1) pro Operation.',
      analogy: 'Hierarchische Gruppenbildung: größere Gruppe übernimmt Führung der zusammengeführten Gruppe.',
      steps: [
        'find(x) mit Pfadkompression: parent[x] = find(parent[x]) → flacht Baum ab.',
        'Union-by-Rank: kleineren Baum unter größeren hängen durch Rang-Vergleich.',
        'Amortisierte Komplexität pro Operation: O(α(n)) – inverse Ackermann, praktisch O(1).',
        'Borůvkas Algorithmus: O(E log V) Alternative mit billigster Kante pro Komponente.',
      ],
      visual: 'find(5): 5→3→1→0; mit Kompression: 5→0, 3→0 direkt nach erstem Aufruf.',
      commonMistakes: [
        'Pfadkompression vergessen → O(log n) pro find statt O(α(n)).',
        'Union-by-Rank nicht verwenden → mögliche O(n) Baumhöhe.',
      ],
      practice: [
        'Union-Find mit beiden Optimierungen implementieren und auf LeetCode 684 testen.',
        'Borůvkas Algorithmus zum Vergleich implementieren.',
      ],
    },
  },
};

export default overlay;
