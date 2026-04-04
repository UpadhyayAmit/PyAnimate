import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Erstellen Sie eine Liste mit 5 Zahlen. Fügen Sie 99 hinzu, entfernen Sie die kleinste, dann sortiert ausgeben.',
  hint: 'Verwenden Sie append(), remove() und sorted(). min() findet den kleinsten Wert.',
  explanation: {
    simple: {
      overview: 'Python-Listen sind geordnete, veränderliche, dynamisch große Container, die beliebige Typen unterstützen.',
      analogy: 'Eine Einkaufsliste, die wachsen oder schrumpfen kann; Elemente können frei hinzugefügt, entfernt oder umsortiert werden.',
      steps: [
        'Erstellen: lst = [1, 2, 3] oder lst = list(range(5)).',
        'Zugriff: lst[0] für erstes, lst[-1] für letztes Element.',
        'Anfügen: lst.append(x); Einfügen: lst.insert(i, x).',
        'Entfernen: lst.remove(x) nach Wert; del lst[i] nach Index; lst.pop(i) gibt Element zurück.',
      ],
      visual: 'lst=[1,2,3]; lst.append(4) → [1,2,3,4]; del lst[0] → [2,3,4]',
      commonMistakes: [
        'IndexError beim Zugriff außerhalb des gültigen Bereichs.',
        'list.remove() wirft ValueError, wenn das Element nicht vorhanden ist.',
      ],
      practice: [
        'Einen Stack mit einer Liste bauen (append/pop).',
        'Alle Duplikate in einer Liste finden.',
      ],
      timeComplexity: 'append O(1) amortisiert, insert/remove O(n)',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'CPython-Listen sind dynamische Arrays; append ist amortisiert O(1) durch Überallokation (Wachstumsfaktor ~1,125).',
      analogy: 'Wie ein Vektor in C++: wenn die Kapazität voll ist, wird ein größerer Puffer allokiert und kopiert – das passiert selten.',
      steps: [
        'sys.getsizeof([]) zeigt den Basis-Overhead; jeder Elementzeiger ist 8 Byte.',
        'Überallokation: eine Liste mit n Elementen kann Kapazität n×1,125 haben.',
        'insert(0, x) ist O(n) – verschiebt alle Elemente nach rechts.',
        'Sort: Timsort O(n log n) – stabil, adaptiv bei partieller Sortierung.',
      ],
      visual: 'Kapazitätswachstum: 0→4→8→16→25→... vermeidet O(n²) Kopieraufwand',
      commonMistakes: [
        'Liste als Queue verwenden (pop(0) ist O(n)); stattdessen collections.deque nutzen.',
        'Eine Liste mit gemischten Typen sortieren: wirft in Python 3 TypeError.',
      ],
      practice: [
        'Speicherverbrauch bei verschiedenen Listengrößen mit sys.getsizeof messen.',
        'deque.appendleft vs list.insert(0,x) für 10.000 Operationen vergleichen.',
      ],
    },
  },
};

export default overlay;
