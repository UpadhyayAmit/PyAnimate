import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Breitensuche (BFS)',
  hint: 'Durchsucht den Graphen ebenenweise mit einer Queue.',
  approach: 'Startknoten in Warteschlange einfügen. Knoten entnehmen, nicht besuchte Nachbarn einreihen.',
  useCases: [
    'Kürzester Pfad in ungewichtetem Graph',
    'Trennungsgrade in sozialen Netzwerken',
    'Seitenentdeckung im Web-Crawler',
  ],
  explanation: {
    simple: {
      overview: 'BFS erkundet einen Graphen ebenenweise von der Quelle aus und findet kürzeste Pfade auf ungewichteten Graphen.',
      analogy: 'Stein ins Wasser werfen: Wellen breiten sich gleichmäßig nach außen aus – erst nahe Knoten, dann ferne.',
      steps: [
        'Initialisiere Queue mit Startknoten; markiere als besucht.',
        'Solange Queue nicht leer: dequeue Knoten u.',
        'Für jeden Nachbar v von u: wenn nicht besucht → markiere, enqueue, parent[v]=u.',
        'Tiefe (Schritt) entspricht Anzahl Queue-Entleerungen.',
      ],
      visual: 'Graph: 1-2, 1-3, 2-4. BFS von 1: Ebene 0=[1]; Ebene 1=[2,3]; Ebene 2=[4]',
      commonMistakes: [
        'Knoten vor dem Enqueuen als besucht markieren – nicht nach dem Dequeuen (doppeltes Enqueuing).',
        'Für Kurzestpfad: Distanz beim Enqueuen inkrementieren.',
      ],
      practice: [
        'Kürzesten Pfad in ungewichtetem Graphen mit BFS finden.',
        'Bipartitheit eines Graphen mit BFS-Einfärbung prüfen.',
      ],
      timeComplexity: 'O(V+E)',
      spaceComplexity: 'O(V) für Queue und visited-Set'
    },
    deepDive: {
      overview: 'BFS garantiert Kurzestpfade auf ungewichteten Graphen; bidirektionale BFS verdoppelt die effektive Suchtiefe.',
      analogy: 'Bidirektionale BFS: Quelle und Ziel gleichzeitig erkunden – treffen in der Mitte schneller zusammen.',
      steps: [
        'Bipartit-Test: BFS mit 2-Farben-Einfärbung; Kante innerhalb gleicher Farbe → nicht bipartit.',
        'Mehrstufige BFS: \'Wort-Leiter\' Problem – BFS auf implizitem Graph.',
        '0-1-BFS: Kanten mit Gewicht 0 oder 1; Deque + 0-Kanten vorne, 1-Kanten hinten → O(V+E).',
        'Bidirektionale BFS: O(b^(d/2)) statt O(b^d), b=Verzweigungsfaktor, d=Tiefe.',
      ],
      visual: 'Bidirektional: Front-Quelle = {1,2,3}; Front-Ziel = {10,9,8}; Schnitt → Pfad gefunden.',
      commonMistakes: [
        '0-1-BFS: bei Gewicht-0-Kante deque.appendleft() verwenden, nicht append().',
        'Bidirektionale BFS: immer die kleinere Frontier expandieren für Effizienz.',
      ],
      practice: [
        'Word Ladder Problem mit BFS lösen.',
        '0-1-BFS für Minimum-Cost-Path implementieren.',
      ],
    },
  },
};

export default overlay;
