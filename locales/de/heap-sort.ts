import type { LessonLocaleOverlay } from '../types';

const heapSort: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Heap Sort baut einen max-heap und legt in jedem Schritt das groesste Element ans Ende.',
      analogy: 'Wie eine Priority Queue: zuerst kommt immer der groesste Wert.',
      steps: [
        'Array per heapify in einen max-heap umwandeln.',
        'Wurzel mit letztem unsortierten Element tauschen.',
        'heap_size um 1 verkleinern.',
        'Von der Wurzel aus sift-down ausfuehren.',
        'Wiederholen bis heap_size = 1.',
      ],
      visual: '[heap | sorted tail] - der sortierte Bereich waechst rechts.',
      commonMistakes: [
        'Kinderindizes fuer 0-basierte Arrays falsch berechnen.',
        'heap_size nach extraction nicht reduzieren.',
        'Nach swap versehentlich sift-up statt sift-down nutzen.',
      ],
      practice: [
        'Heapify [4,10,3,5,1] Schritt fuer Schritt.',
        'Erklaeren, warum Heap Sort nicht stabil ist.',
        'Min-heap Version fuer absteigende Sortierung bauen.',
      ],
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Heap Sort garantiert O(n log n) im Worst Case bei konstantem Zusatzspeicher.',
      analogy: 'Vollstaendiger Binaerbaum, bei dem jede Reparatur einen Root-Leaf-Pfad folgt.',
      steps: [
        'Build-heap bottom-up in O(n).',
        'Fuer end von n-1 bis 1: root mit end tauschen.',
        'heap_size-- und root per sift-down reparieren.',
        'Invariant: Prefix ist heap, Suffix ist sortiert.',
        'Stop bei heap_size == 1.',
      ],
      visual: 'Der heap schrumpft, die sortierte Tail-Zone waechst.',
      commonMistakes: [
        'Falsches Kind fuer Vergleich im sift-down waehlen.',
        'Heap-Invariante nach swap nicht wiederherstellen.',
        'Unnoetige Rechenarbeit in inneren Schleifen.',
      ],
      practice: [
        'Herleiten, warum build-heap O(n) ist.',
        'Swap-Zahlen mit Quick Sort vergleichen.',
        'Iterative, stack-freie Implementierung schreiben.',
      ],
      timeComplexity: 'Theta(n log n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default heapSort;
