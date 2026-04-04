import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Tiefensuche (DFS)',
  hint: 'Erkundet den Graphen in die Tiefe mit Stack oder Rekursion.',
  approach: 'Erkunden Sie vom Startknoten, verfolgen Sie jeden Pfad rekursiv bis zum Ende vor dem Backtracking.',
  useCases: [
    'Labyrinth-Lösung und Pfadfindung',
    'Topologische Sortierung und Zykluserkennung',
    'Stark verbundene Komponenten',
  ],
  explanation: {
    simple: {
      overview: 'DFS erkundet einen Graphen in die Tiefe, bevor er zurückgeht – natürlich durch Rekursion oder expliziten Stack.',
      analogy: 'Labyrinth erkunden: immer den ersten unbekannten Gang entlanggehen, bei Sackgasse zurückkehren.',
      steps: [
        'Starte an Knoten s; markiere als besucht.',
        'Für jeden Nachbar v: wenn nicht besucht → rekursiver Aufruf dfs(v).',
        'Bei Rückkehr: alle Knoten im selben Teilbaum sind erkundet.',
      ],
      visual: 'Graph 1-2-4, 1-3. DFS von 1: besuche 1→2→4 (zurück)→3; Reihenfolge: 1,2,4,3',
      commonMistakes: [
        'Visited markieren vor dem rekursiven Aufruf – nicht danach (sonst Endlosschleife bei Zyklen).',
        'Python Rekursionslimit: bei tiefen Graphen iterativen DFS mit Stack verwenden.',
      ],
      practice: [
        'Zusammenhängende Komponenten zählen mit DFS.',
        'Zyklus in gerichtetem Graph mit DFS erkennen.',
      ],
      timeComplexity: 'O(V+E)',
      spaceComplexity: 'O(V) Call-Stack oder expliziter Stack'
    },
    deepDive: {
      overview: 'DFS-Zeitstempel ermöglichen topologische Sortierung, Zykuserkennung und SCC-Algorithmen.',
      analogy: 'Tarjans SCC-Algorithmus: ein DFS mit Low-Link-Werten findet alle starken Zusammenhangskomponenten in O(V+E).',
      steps: [
        'Zeitstempel: disc[v] = Entdeckungszeit, fin[v] = Abschlusszeit.',
        'Topologische Sortierung: Knoten nach fin[] absteigend sortieren (DFS-Postorder).',
        'Zykuserkennung: Rückwärtskante found (v nach Vorgänger) → Zyklus.',
        'Tarjan SCC: low[v] = min disc in Stack erreichbar; Knoten bilden SCC wenn low[v]==disc[v].',
      ],
      visual: 'Topologische Sort: disc/fin = [(A,1/8),(B,2/5),(C,3/4),(D,6/7)] → Order: A,D,B,C',
      commonMistakes: [
        'Gerichteter vs. ungerichteter Graph: Zyklus-Kriterien unterscheiden sich.',
        'SCC: Kosaraju braucht zwei DFS-Durchläufe (Original + transponierter Graph).',
      ],
      practice: [
        'Topologische Sortierung mit DFS (Postorder) implementieren.',
        'Starke Zusammenhangskomponenten mit Tarjan oder Kosaraju finden.',
      ],
    },
  },
};

export default overlay;
