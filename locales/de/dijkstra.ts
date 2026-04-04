import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Dijkstra-Algorithmus',
  hint: 'Kürzeste Pfade in Graphen mit nicht-negativen Gewichten.',
  approach: 'Verarbeite den Knoten mit kürzester Distanz aus der Prioritätswarteschlange, aktualisiere Nachbardistanzen.',
  useCases: [
    'GPS-Navigation und kürzeste Routenfindung',
    'Netzwerk-Routingprotokolle (OSPF)',
    'Pathfinding in Spiel-KI',
  ],
  explanation: {
    simple: {
      overview: 'Dijkstras Algorithmus findet kürzeste Pfade von einem Quellknoten zu allen anderen bei nicht-negativen Kantengewichten.',
      analogy: 'Eine Blase finalisierter Kürzestwegdistanzen breitet sich von der Startstadt nach außen aus.',
      steps: [
        'Setze dist[quelle]=0, alle anderen=∞; füge Quelle in Min-Heap.',
        'Solange Heap nicht leer: extrahiere Knoten u mit kleinstem dist.',
        'Für jede Kante (u,v,w): wenn dist[u]+w < dist[v]: aktualisiere und füge v in Heap.',
        'Extrahierte Knoten haben finale Distanzen.',
      ],
      visual: 'Besuchte Menge wächst; Frontier-Kanten entspannen Distanzen in einem Kürzester-Pfad-Baum.',
      commonMistakes: [
        'Dijkstra bei negativen Kanten verwenden (falsch – Bellman-Ford nutzen).',
        'Veraltete Heap-Einträge nicht überspringen nach besseren Distanz-Aktualisierungen.',
        'Array-Priority-Queue verwenden → O(V²) auf großen Graphen.',
      ],
      practice: [
        'Auf einem 5-Knoten-gewichteten Graphen ausführen und dist pro Schritt tabellieren.',
        'Pfade mit Parent-Zeigern rekonstruieren.',
        'Binären Heap vs. Fibonacci-Heap Komplexität vergleichen.',
      ],
      timeComplexity: 'O((V+E) log V) mit Binär-Heap',
      spaceComplexity: 'O(V) für dist/parent/visited'
    },
    deepDive: {
      overview: 'Dijkstra ist gierig: sobald ein Knoten extrahiert wird, ist seine Distanz optimal wegen nicht-negativer Gewichte.',
      analogy: 'Wellen, die Distanzen einen Knoten nach dem anderen \'einfrieren\'.',
      steps: [
        'Min-Heap nach tentativier Distanz pflegen.',
        'Extrahiere u; wenn Eintrag veraltet, überspringen.',
        'Nachbarn mit dist[u]+w entspannen.',
        'Schnitt-Eigenschaft beweist extrahierten Knoten als optimal.',
        'Früher Ausstieg wenn Ziel extrahiert wird für Einzelziel-Anfragen.',
      ],
      visual: 'Heap schrumpft; Parent-Baum markiert Kürzester-Pfad-Kanten.',
      commonMistakes: [
        'Auf Graphen mit negativen Kanten anwenden (Bellman-Ford verwenden).',
        'decrease-key in JS versuchen; einfacher: Duplikate pushen und stale überspringen.',
        'Gerichtete/ungerichtete Kanten in Adjazenzliste mischen.',
      ],
      practice: [
        'Korrektheit über Schnitt-Eigenschaft beweisen.',
        'Frühen Ausstieg für bestimmtes Ziel implementieren.',
        'Zeigen dass Dijkstra BFS entspricht wenn alle Gewichte 1 sind.',
      ],
      timeComplexity: 'Θ((V+E) log V)',
      spaceComplexity: 'Θ(V)'
    },
  },
};

export default overlay;
