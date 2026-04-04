import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Prüfen Sie ob (\'listen\',\'silent\'), (\'hello\',\'world\') Anagramme sind. Finden Sie alle Anagrammgruppen.',
  hint: 'Sortieren und vergleichen, oder Counter() verwenden. Für Gruppierung sortierten String als Schlüssel.',
  explanation: {
    simple: {
      overview: 'Zwei Strings sind Anagramme, wenn sie exakt dieselben Zeichen in beliebiger Reihenfolge enthalten.',
      analogy: '\'hören\' und \'röhren\' – dieselben Buchstaben, nur anders angeordnet.',
      steps: [
        'Beide Strings sortieren und vergleichen: sorted(a) == sorted(b).',
        'Oder Counter verwenden: Counter(a) == Counter(b).',
        'Schnellste Methode: Zählarray mit 26 Einträgen für reinen ASCII-Kleinbuchstaben-Input.',
      ],
      visual: '\'anagram\'→sortiert→\'aaagmnr\'; \'nagaram\'→sortiert→\'aaagmnr\' → gleich',
      commonMistakes: [
        'Groß-/Kleinschreibung nicht normieren.',
        'Leerzeichen/Satzzeichen nicht behandeln, wenn das Problem bereinigte Eingabe erwartet.',
      ],
      practice: [
        'Prüfen, ob zwei Sätze Anagramme sind (Leerzeichen ignorieren).',
        'Alle Anagramm-Gruppen in einer Wortliste finden.',
      ],
      timeComplexity: 'O(n log n) sortieren, O(n) mit Counter',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Anagramme in O(n·k·log k) gruppieren durch sortierten Tuple als Hash-Key, oder O(n·k) mit Zeichenanzahl-Tuple.',
      analogy: 'Ein Aktenschrank nach Buchstabenbestand geordnet: alle Wörter mit denselben Buchstaben kommen in dieselbe Schublade.',
      steps: [
        'Für jedes Wort kanonischen Schlüssel berechnen: tuple(sorted(wort)).',
        'In defaultdict(list) nach Schlüssel gruppieren.',
        'Zeichenanzahl-Schlüssel: Tuple von 26 Zählern vermeidet die Sortierung.',
        'Beide Ansätze sind O(n·k) über alle n Wörter.',
      ],
      visual: '{\'eat\',\'tea\',\'ate\'} → Schlüssel (a,e,t) → gleicher Bucket',
      commonMistakes: [
        'frozenset verwenden – verliert Duplikat-Zeicheninformation (\'aab\' ≠ \'ab\').',
        'Unicode-Normalisierung für Nicht-ASCII-Eingaben nicht berücksichtigen.',
      ],
      practice: [
        'group_anagrams(wörter) implementieren, das eine Liste von Gruppen zurückgibt.',
        'Sortiert-Schlüssel vs. Anzahl-Tuple-Schlüssel für 100.000 Wörter zeitlich vergleichen.',
      ],
    },
  },
};

export default overlay;
