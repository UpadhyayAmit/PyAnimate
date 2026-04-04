import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Bellman-Ford-Algorithmus',
  hint: 'Findet kürzeste Pfade auch bei negativen Kantengewichten — V-1 Relaxierungen.',
  approach: 'Entspannen Sie alle Kanten V-1 Mal. Beim V-ten Durchgang bedeutet weitere Relaxation einen negativen Zyklus.',
  useCases: [
    'Graphen mit negativen Kantengewichten',
    'Währungsarbitrage-Erkennung',
    'Distance-Vector-Algorithmen im Netzwerkrouting',
  ],
  explanation: {
    simple: {
      overview: 'Bellman-Ford berechnet SSSP mit negativen Kanten und erkennt negative Zyklen.',
      analogy: 'Wiederholtes Anziehen schlaffer Seile; wenn ein Seil immer kürzer wird, gibt es eine Schleife.',
      steps: [
        'Initialisiere dist[quelle]=0, alle anderen=∞.',
        'Wiederhole V-1 mal: für jede Kante (u,v,w): entspanne dist[v] = min(dist[v], dist[u]+w).',
        'Speichere parent[v] für Pfadrekonstruktion.',
        'Führe eine extra Runde aus; wenn eine Kante noch entspannt wird → negativer Zyklus.',
      ],
      visual: 'Distanzen schrumpfen über Runden; weitere Schrumpfung signalisiert negativen Zyklus.',
      commonMistakes: [
        'Vor Abschluss stoppen ohne auf negative Zyklen zu prüfen.',
        'Weniger als V-1 Iterationen – lange Pfade werden verpasst.',
        'Bellman-Ford verwenden wenn alle Gewichte nicht-negativ sind (Dijkstra ist schneller).',
      ],
      practice: [
        'Auf Graph mit negativer Kante ohne negativen Zyklus ausführen.',
        'Graph mit negativem Zyklus erstellen und Erkennung zeigen.',
        'Early-Stop-Optimierung implementieren und messen.',
      ],
      timeComplexity: 'O(V·E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'Bellman-Ford ist DP über Pfadlänge; Iteration k betrachtet Pfade mit bis zu k Kanten.',
      analogy: 'Tabelle mit besten Distanzen nach Pfadlänge füllen – Werte können nur sinken.',
      steps: [
        'Für k=1..V-1: alle Kanten mit dist aus k-1 entspannen.',
        'Früher Ausstieg wenn keine Änderung in einer Iteration.',
        'Extra-Iteration markiert erreichbare negative Zyklen.',
        'Knoten in negativen Zyklen als undefined markieren.',
        'Optimierung: nur Kanten mit in letzter Runde aktualisierter Quelle verarbeiten.',
      ],
      visual: 'Distanztabelle pro Iteration monoton abnehmend.',
      commonMistakes: [
        'Unerreichbare Knoten nicht behandeln (dist bleibt ∞).',
        'Bellman-Ford mit All-Pairs verwechseln (das ist Floyd-Warshall).',
        'Änderungs-Flag nicht pro Runde zurücksetzen.',
      ],
      practice: [
        'Korrektheit durch Induktion über Pfadlänge beweisen.',
        'SPFA-Variante implementieren und Worst-Case diskutieren.',
        'Knoten im negativen Zyklus erkennen.',
      ],
      timeComplexity: 'Θ(V·E)',
      spaceComplexity: 'Θ(V)'
    },
  },
};

export default overlay;
