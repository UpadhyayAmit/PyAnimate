import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Finden Sie LCS von \'ABCBDAB\' und \'BDCAB\'. Erstellen Sie die DP-Matrix.',
  hint: 'dp[i][j] = dp[i-1][j-1]+1 wenn Zeichen übereinstimmen, sonst max(dp[i-1][j], dp[i][j-1]).',
  explanation: {
    simple: {
      overview: 'Längste gemeinsame Teilsequenz: die längste Zeichenfolge, die in beiden Strings in Reihenfolge erscheint.',
      analogy: 'Zwei DNA-Stränge mit gemeinsamem genetischem Signal: den längsten gemeinsamen Faden finden.',
      steps: [
        'dp[i][j] = LCS-Länge von s1[:i] und s2[:j].',
        'Wenn s1[i-1]==s2[j-1]: dp[i][j] = dp[i-1][j-1] + 1.',
        'Sonst: dp[i][j] = max(dp[i-1][j], dp[i][j-1]).',
        'Antwort ist dp[m][n].',
      ],
      visual: 's1=\'ABCBD\', s2=\'ACBD\': dp-Tabelle → LCS=3 (\'ABD\')',
      commonMistakes: [
        'LCS (Teilsequenz, nicht zusammenhängend) mit längstem gemeinsamen Teilstring (zusammenhängend) verwechseln.',
        '(m+1)×(n+1) Tabelle allokieren aber ab Index 0 falsch indizieren.',
      ],
      practice: [
        'Eigentlichen LCS-String durch Rückverfolgung rekonstruieren.',
        'Edit-Distanz berechnen (ED = m+n-2*LCS).',
      ],
      timeComplexity: 'O(m×n)',
      spaceComplexity: 'O(m×n), O(min(m,n)) mit Rolling Rows'
    },
    deepDive: {
      overview: 'LCS ist Grundlage für diff-Tools (GNU diff), Gensequenzausrichtung und Edit-Distanz-Berechnung.',
      analogy: 'git diff nutzt LCS-Variante um minimale Menge von hinzugefügten/entfernten Zeilen zu finden.',
      steps: [
        'Edit-Distanz = m + n - 2*LCS (nur Einfügen/Löschen, keine Substitutionen).',
        'Hirschberg-Algorithmus: LCS in O(m+n) Raum via Divide-and-Conquer.',
        'Four-Russians-Trick: O(n²/log n) mit Lookup-Tabellen für kleine Blöcke.',
        'Für DNA: Suffix-Arrays mit LCP-Array liefern O(n log n) Vorverarbeitung für alle Paar-LCS-Anfragen.',
      ],
      visual: 'diff: nur in A \'+\', nur in B \'-\', gemeinsam als Kontext; LCS = gemeinsame Zeilen',
      commonMistakes: [
        'Rolling-Array-Optimierung bricht Rückverfolgung – volle Tabelle behalten wenn Rekonstruktion nötig.',
        'LCS ≠ Edit-Distanz; Substitution fügt einen weiteren DP-Fall hinzu.',
      ],
      practice: [
        'Shortest Edit Script (SES) mit LCS-Rückverfolgung implementieren.',
        'Hirschberg verwenden um LCS für sehr lange Strings mit O(n) Raum zu berechnen.',
      ],
    },
  },
};

export default overlay;
