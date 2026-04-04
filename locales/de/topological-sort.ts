import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Topologische Sortierung von: 5→2, 5→0, 4→0, 4→1, 2→3, 3→1.',
  hint: 'Kahns Algorithmus: In-Grade berechnen, Knoten mit 0 einreihen, Warteschlange verarbeiten.',
  explanation: {
    simple: {
      overview: 'Topologische Sortierung ordnet Knoten eines DAGs so, dass jede Kante von früher nach später zeigt.',
      analogy: 'Kursvoraussetzungen: Mathematik muss vor Lineare Algebra abgeschlossen werden.',
      steps: [
        'Kahns BFS: Eingangsgrade berechnen; 0-Eingangsgrad-Knoten in Queue; verarbeiten, Nachbarn dekrementieren.',
        'DFS Postorder: DFS ausführen; Knoten nach allen Nachkommen in Ergebnis-Stack schieben.',
        'DFS-Stack umkehren für topologische Reihenfolge.',
        'Wenn Zyklus vorhanden: Kahns Algorithmus verarbeitet nicht alle Knoten.',
      ],
      visual: 'DAG: A→B→C, A→C. Eingangsgrade: A=0,B=1,C=2. Verarbeite A→B→C.',
      commonMistakes: [
        'Auf Graph mit Zyklen ausführen (Ergebnis würde Knoten auslassen oder ungültig sein).',
        'Zyklus nicht erkennen (Zyklus = nicht alle Knoten in Kahn verarbeitet).',
      ],
      practice: [
        'Build-Reihenfolge für Liste von Abhängigkeiten finden.',
        'Kursplan auf Machbarkeit prüfen.',
      ],
      timeComplexity: 'O(V+E)',
      spaceComplexity: 'O(V+E)'
    },
    deepDive: {
      overview: 'Topologische Sortierung ist Grundlage für Abhängigkeitsauflösung (make, npm), kritische Pfadanalyse und Pipeline-Scheduling.',
      analogy: 'GNU make Abhängigkeitsgraph: Ziele ohne Voraussetzungen laufen zuerst; deren Abhängige danach.',
      steps: [
        'Kahns ist BFS-basiert und erkennt Zyklen natürlich (übrig gebliebene Knoten = Zyklus).',
        'DFS-basiert (Postorder) ermöglicht lexikografisch kleinste Reihenfolge mit Min-Heap.',
        'Stark zusammenhängende Komponenten reduzieren zyklischen Graphen auf DAG für approximierte Ordnung.',
        'Parallele topologische Ordnung: alle 0-Eingangsgrad-Knoten gleichzeitig verarbeiten → kritische Pfadlänge.',
      ],
      visual: 'Parallel: Welle 0: {A}; Welle 1: {B,C}; Welle 2: {D} → kritischer Pfad = 3 Wellen',
      commonMistakes: [
        'Kahn mit gleichen Prioritäten: Min-Heap für deterministisch lexikografische Reihenfolge.',
        'SCC-Kondensation mit topologischer Sortierung verwechseln.',
      ],
      practice: [
        'Kahns Algorithmus implementieren; Zyklus erkennen und melden.',
        'Kritischen Pfad (längsten Pfad) in DAG mit umgekehrter topologischer Reihenfolge finden.',
      ],
    },
  },
};

export default overlay;
