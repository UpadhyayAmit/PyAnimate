import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Prüfen Sie ob \'racecar\', \'hello\' und \'A man a plan a canal Panama\' Palindrome sind.',
  hint: 'Für den letzten: kleinschreiben und Leerzeichen/Satzzeichen entfernen.',
  explanation: {
    simple: {
      overview: 'Ein Palindrom liest sich vorwärts und rückwärts gleich – prüfen durch Vergleich des Strings mit seiner Umkehrung.',
      analogy: '\'Rentner\' – egal ob du von links oder rechts liest, du liest dasselbe Wort.',
      steps: [
        'String bereinigen: Kleinbuchstaben, Nicht-Alphanumerisches entfernen.',
        'Vergleichen: s == s[::-1].',
        'Manuelle Prüfung: Zwei-Zeiger – s[links] und s[rechts] vergleichen, nach innen bewegen.',
      ],
      visual: '\'racecar\' → umgekehrt=\'racecar\' → gleich → Palindrom',
      commonMistakes: [
        'Groß-/Kleinschreibung nicht normieren (\'Racecar\' ≠ \'racecar\' vor lower()).',
        'Leerzeichen/Satzzeichen bei Satz-Palindromen nicht entfernen.',
      ],
      practice: [
        '\'Ein Esel lese nie\' als Palindrom prüfen.',
        'Den längsten palindromischen Teilstring finden.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n) für Slice, O(1) für Zwei-Zeiger'
    },
    deepDive: {
      overview: 'Der längste palindromische Teilstring nutzt Expand-Around-Center in O(n²) oder Manachers Algorithmus in O(n).',
      analogy: 'Manacher verarbeitet den String mit Trennzeichen vor, sodass alle Palindrome ungerade Länge haben.',
      steps: [
        'Von jedem Zentrum expandieren (n Zentren für ungerade, n-1 für gerade): O(n²) naiv.',
        'Manacher verfolgt bereits berechnete Radien, um redundante Arbeit zu überspringen.',
        'Spiegeleigenschaft: Punkte innerhalb von Radius c erben Radius ≥ min(r, Randabstand).',
        'Abschließender Scan über das Radien-Array findet das Maximum.',
      ],
      visual: 'String: a|b|c|b|a mit |s → Radien-Array; Spiegel beschleunigt die Befüllung.',
      commonMistakes: [
        'Gerade-Längen-Palindrome vergessen (n-1 Extra-Zentren nötig).',
        'Manacher-Index-Arithmetik off-by-one durch die eingefügten Trennzeichen.',
      ],
      practice: [
        'Expand-Around-Center für alle palindromischen Teilstrings implementieren.',
        'Manachers Algorithmus implementieren und auf \'abacaba\' verifizieren.',
      ],
    },
  },
};

export default overlay;
