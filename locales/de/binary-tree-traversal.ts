import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implementieren Sie In-Order, Pre-Order und Post-Order Traversierung eines Binärbaums.',
  hint: 'Rekursion ist hier natürlich. In-Order: links→Knoten→rechts. Pre-Order: Knoten→links→rechts.',
  explanation: {
    simple: {
      overview:
        'Jeden Knoten eines Binärbaums besuchen: Inorder (links-Wurzel-rechts), Preorder (Wurzel-links-rechts), Postorder (links-rechts-Wurzel).',
      analogy:
        'Buch lesen: Inorder = linkes Kapitel, dieses Kapitel, rechtes Kapitel (alphabetisch für BST); Preorder = zuerst das Inhaltsverzeichnis.',
      steps: [
        'Inorder: traversiere(links); besuche(Wurzel); traversiere(rechts).',
        'Preorder: besuche(Wurzel); traversiere(links); traversiere(rechts).',
        'Postorder: traversiere(links); traversiere(rechts); besuche(Wurzel).',
        'Levelorder (BFS): verwende eine Queue.',
      ],
      visual: `    1
   / \\
  2   3
Inorder: 2,1,3  Preorder: 1,2,3  Postorder: 2,3,1`,
      commonMistakes: ['Inorder und Preorder verwechseln.', 'Basisfall vergessen: if node is None: return.'],
      practice: ['BST-Werte in sortierter Reihenfolge ausgeben (Inorder).', 'Baum serialisieren und deserialisieren mit Preorder.'],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(h) Stack, h = Baumhöhe',
    },
    deepDive: {
      overview: 'Iterative Traversierung mit explizitem Stack vermeidet Rekursionslimit; Morris-Traversierung benötigt O(1) Speicher.',
      analogy: 'Morris-Traversierung: Null-Zeiger vorübergehend zum Inorder-Nachfolger umleiten – den Baum selbst als temporären Speicher nutzen.',
      steps: [
        'Iterativer Inorder: Knoten linksseitig auf Stack legen, beim Pop verarbeiten, dann rechten Teilbaum.',
        'Morris: Inorder-Vorgänger finden; wenn right==None: verknüpfe zu current, gehe links; sonst: besuche, trenne Verbindung, gehe rechts.',
        'Levelorder: Queue für BFS – zeilenweise verarbeiten.',
        'Zickzack-Traversierung: Richtung pro Ebene wechseln mit zwei Stacks oder Deque-Flag.',
      ],
      visual: 'Morris: kein extra Speicher O(1) – right-null-Zeiger als Fäden verwenden und danach wiederherstellen.',
      commonMistakes: [
        'Morris modifiziert den Baum vorübergehend – nicht thread-sicher.',
        'Zickzack: gerade vs. ungerade Ebene Direction-Flag vergessen.',
      ],
      practice: ['Iterativen Inorder ohne Rekursion implementieren.', 'Morris-Inorder-Traversierung ohne Rekursion und Stack implementieren.'],
    },
  },
};

export default overlay;
