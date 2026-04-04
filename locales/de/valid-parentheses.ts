import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Prüfen Sie ob \'({[]})\' und \'([)]\' gültig sind. Behandeln Sie dann \'(((\'.',
  hint: 'Schieben Sie öffnende Klammern auf den Stack. Bei schließenden: Pop und Match prüfen.',
  explanation: {
    simple: {
      overview: 'Prüfen ob eine Klammerkette gültig ist: jede öffnende Klammer hat eine passende schließende in richtiger Reihenfolge.',
      analogy: 'Schachtelboxen: jede geöffnete Box muss geschlossen werden bevor die äußere geschlossen wird.',
      steps: [
        'Öffnende Klammern auf Stack ablegen.',
        'Für schließende Klammer: wenn Stack leer oder Top passt nicht → return False.',
        'Passende öffnende Klammer vom Stack poppen.',
        'Nach der Verarbeitung: Stack muss leer sein.',
      ],
      visual: '\'([{}])\': push(,[,{; }→passt zu {, pop; ]→passt zu [, pop; )→passt zu (, pop; leer → gültig',
      commonMistakes: [
        'Nicht prüfen ob Stack leer ist vor dem Pop.',
        'Vergessen nach der Verarbeitung zu prüfen ob Stack leer ist (ungeschlossene Klammern).',
      ],
      practice: [
        'Minimum Anzahl Swaps zur Gültigmachung berechnen.',
        'Längsten gültigen Klammerausdruck als Teilstring finden.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Längster gültiger Klammerausdruck mit DP oder Stack-mit-Index; DP-Ansatz in O(n) Zeit und Raum.',
      analogy: 'Stack speichert Indizes; beim Match wird die Spanne von aktuellem Index zu neuem Stack-Top berechnet.',
      steps: [
        'Push -1 als Sentinel; öffnende Klammer → Push Index.',
        'Bei \')\': pop; wenn Stack leer → push aktuellen Index als neue Basis; sonst: max_len = i - stack[-1].',
        'DP-Ansatz: dp[i] = Länge des gültigen Strings endend bei i.',
        'Wenn s[i]=\')\' und s[i-dp[i-1]-1]=\'(\': dp[i] = dp[i-1]+2+dp[i-dp[i-1]-2].',
      ],
      visual: '\'(()\': stack[-1,-1→0]; sehe ): pop 0, stack=[-1]; Länge=1-(-1)=2',
      commonMistakes: [
        'Stack-Ansatz braucht -1 Sentinel für saubere Behandlung des Basisfalls.',
        'DP Array-Indexierung geht außerhalb der Grenzen ohne sorgfältige Absicherung.',
      ],
      practice: [
        'Längsten gültigen Klammerausdruck mit Stack und DP implementieren.',
        '\'Minimum Add to Make Parentheses Valid\' lösen.',
      ],
    },
  },
};

export default overlay;
