import type { LessonLocaleOverlay } from '../types';

const linearSearch: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Linear Search prueft jedes Element der Reihe nach, bis das target gefunden ist.',
      analogy: 'Wie ein Buch in einem unsortierten Regal suchen: Ruecken fuer Ruecken.',
      steps: [
        'Bei index 0 starten.',
        'arr[i] mit target vergleichen.',
        'Bei Treffer i zurueckgeben.',
        'Sonst i erhoehen und weitermachen.',
        'Am Ende not found zurueckgeben.',
      ],
      visual: '[7 2 9 4] -> 7 nein -> 2 ja (index 1).',
      commonMistakes: [
        'i < n-1 verwenden und letztes Element ueberspringen.',
        'Leeres Array nicht behandeln.',
        'Bei sortierten Daten nicht auf binary search umstellen.',
      ],
      practice: [
        'Best/Worst/Average Vergleiche zaehlen.',
        'Alle Trefferpositionen zurueckgeben.',
        'Suche von beiden Enden vergleichen.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Linear Search ist robust und fuer kleine n oder Streams oft ausreichend.',
      analogy: 'Ein einziger Durchlauf durch Daten, die nicht zurueckgespult werden koennen.',
      steps: [
        'Invariant: alle Indizes < i wurden bereits geprueft.',
        'Jedes Element genau einmal vergleichen.',
        'Bei erstem Treffer sofort abbrechen.',
        'Ohne Treffer nach n Vergleichen beenden.',
        'Index oder -1 liefern.',
      ],
      visual: 'Gepruefter Bereich waechst von links nach rechts.',
      commonMistakes: [
        'Float-Gleichheit ohne Toleranz vergleichen.',
        'Hash-Map Option ignorieren, wenn viele Suchen noetig sind.',
        'Ueberoptimieren bei sehr kleinem n.',
      ],
      practice: [
        'Invariant formal beweisen.',
        'Sentinel-Technik implementieren.',
        'Case-insensitive String-Suche bauen.',
      ],
      timeComplexity: 'Theta(n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default linearSearch;
