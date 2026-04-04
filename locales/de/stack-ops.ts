import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implementieren Sie einen Stack mit einer Liste. Fügen Sie push, pop, peek, is_empty hinzu.',
  hint: 'Push öffnende, pop+match schließende Klammern. Sofort False bei leerem Stack oder Nichtübereinstimmung.',
  explanation: {
    simple: {
      overview: 'Stack (Stapel): LIFO-Datenstruktur – zuletzt hinzugefügtes Element wird zuerst entfernt.',
      analogy: 'Tellerstapel: man nimmt immer den obersten Teller, nie einen aus der Mitte.',
      steps: [
        'Push: stack.append(element) – O(1).',
        'Pop: stack.pop() – O(1), wirft IndexError wenn leer.',
        'Peek: stack[-1] ohne Entfernen.',
        'Prüfen ob leer: not stack oder len(stack) == 0.',
      ],
      visual: 'push(1)→[1]; push(2)→[1,2]; push(3)→[1,2,3]; pop()→3, Stack=[1,2]',
      commonMistakes: [
        'pop() auf leerem Stack löst IndexError aus – vorher prüfen.',
        'Python list.pop(0) ist O(n) – für Queue collections.deque verwenden.',
      ],
      practice: [
        'Gültige Klammerung prüfen mit Stack.',
        'Postfix-Ausdruck auswerten mit Stack.',
      ],
      timeComplexity: 'O(1) push/pop/peek',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Monotoner Stack löst \'nächstes größeres Element\' in O(n); Min-Stack unterstützt O(1) Minimum-Abfrage.',
      analogy: 'Min-Stack: zweiter Hilfstack speichert jeweils das aktuelle Minimum – beide In sync halten.',
      steps: [
        'Monotoner Stack (absteigend): beim Push alle kleineren Elemente poppen → \'nächstes größeres Element\'.',
        'Min-Stack: bei push(x), push min(x, min_stack[-1]) auf min_stack.',
        'Iterativer DFS: ersetzt rekursiven Aufruf durch expliziten Stack.',
        'Histogram largest rectangle: Monotoner Stack in O(n).',
      ],
      visual: 'Nxt Größer: [2,1,2,4,3]→Ergebnis:[4,2,4,-1,-1]; Stack-Trace zeigt Entfernung von Elementen.',
      commonMistakes: [
        'Min-Stack: bei pop() auch aus min_stack poppen.',
        'Monotone Stack-Invariante nach Push Verletzung: zu wenige Pops.',
      ],
      practice: [
        'Nächstes größeres Element für jedes Array-Element finden.',
        'Min-Stack mit O(1) getMin() implementieren.',
      ],
    },
  },
};

export default overlay;
