import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Verwenden Sie verschachtelte Schleifen, um ein Multiplikationstabelle (1–5) als Raster zu drucken.',
  hint: 'Äußere Schleife für Zeilen, innere für Spalten. Verwenden Sie print(end=\'\\t\').',
  explanation: {
    simple: {
      overview: 'Erkunde, wie verschachtelte Schleifen, break, continue und else zusammenwirken, um den Iterationsfluss zu steuern.',
      analogy: 'Verschachtelte russische Puppen: die äußere Schleife ist die große Puppe, die innere jede kleinere darin.',
      steps: [
        'Äußere Schleife läuft n Mal; innere Schleife läuft m Mal pro Iteration → O(n×m) Schritte.',
        'break in der inneren Schleife verlässt nur die innere Schleife.',
        'continue überspringt den Rest der aktuellen Iteration.',
        'for/while else läuft nur, wenn kein break aufgetreten ist.',
      ],
      visual: 'for i in range(3): for j in range(2): print(i,j) → (0,0)(0,1)(1,0)(1,1)(2,0)(2,1)',
      commonMistakes: [
        'Denken, break verlässt alle Schleifen (ein Flag verwenden oder umstrukturieren).',
        'else fälschlicherweise unter for statt unter if platzieren.',
      ],
      practice: [
        'Ein Sterndreieck mit verschachtelten Schleifen ausgeben.',
        'for-else für die Suche verwenden und melden, wenn ein Element fehlt.',
      ],
      timeComplexity: 'O(n×m) für zwei verschachtelte Schleifen',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Loop-Transformationen (Fusion, Fission, Tiling) sind wichtige Compiler- und Performance-Techniken.',
      analogy: 'Cache-Blocking: Daten in Kacheln verarbeiten, um sie im CPU-L1-Cache zu halten.',
      steps: [
        'Loop-Fusion: zwei benachbarte Schleifen zusammenführen, um Iterator-Overhead zu reduzieren.',
        'Loop-Fission: eine Schleife für bessere Cache-Nutzung aufteilen.',
        'Loop-Unrolling: Rumpf duplizieren, um Branch-Overhead zu reduzieren.',
        'Generator-basierte Schleifen vermeiden, die gesamte Sequenz im Speicher zu materialisieren.',
      ],
      visual: 'Kachelweise: for i in range(0,n,B): for j in range(i,min(i+B,n)): process(j)',
      commonMistakes: [
        'Schleifen vor dem Profilen über-optimieren (verfrühte Optimierung).',
        'Vergessen, dass Python-Schleifen hohen Per-Iterations-Overhead im Vergleich zu kompiliertem Code haben.',
      ],
      practice: [
        'Eine verschachtelte Schleife mit cProfile profilieren.',
        'Inner-Loop-Akkumulation durch numpy-vektorisierte Operation ersetzen.',
      ],
    },
  },
};

export default overlay;
