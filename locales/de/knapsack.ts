import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Lösen Sie 0/1 Rucksackproblem: items=[(2,6),(2,10),(3,12)], Kapazität=5. DP-Tabelle aufbauen.',
  hint: 'dp[i][w] = max(dp[i-1][w], dp[i-1][w-Gewicht[i]] + Wert[i]).',
  explanation: {
    simple: {
      overview: '0/1 Rucksackproblem: Gegenstände mit Gewicht und Wert, Gesamtwert maximieren ohne Kapazität zu überschreiten.',
      analogy: 'Koffer packen für eine Reise: jeden Gegenstand höchstens einmal mitnehmen; Gesamtgewicht begrenzt.',
      steps: [
        'dp[i][w] = maximaler Wert mit ersten i Gegenständen und Kapazität w.',
        'Für jeden Gegenstand i: für w=0..W. Wenn w<weight[i]: dp[i][w]=dp[i-1][w]. Sonst: dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i]).',
        'Antwort ist dp[n][W].',
      ],
      visual: 'Gegenstände [(2,3),(3,4),(4,5)] W=5 → dp-Tabelle → Maxwert=7 (Gegenstände 0+1)',
      commonMistakes: [
        '1D-Array vorwärts iterieren (muss rückwärts für 0/1 Rucksack).',
        'dp[i-1]-Zeile vergessen zu kopieren bei 1D-Optimierung.',
      ],
      practice: [
        'Gewählte Gegenstände durch Rückverfolgung der dp-Tabelle rekonstruieren.',
        'Teilmengensumme lösen (Wert=Gewicht, Ziel=W).',
      ],
      timeComplexity: 'O(n×W)',
      spaceComplexity: 'O(W) mit 1D-Optimierung'
    },
    deepDive: {
      overview: 'Varianten: Fraktionaler Rucksack (Greedy), Unbegrenzter Rucksack (Münzwechsel), Mehrfach-, Gruppen-Rucksack.',
      analogy: 'Fraktionaler Rucksack: wie Flüssigkeit – anteilige Menge des höchsten Wert-pro-Gewicht-Gegenstands nehmen.',
      steps: [
        'Fraktional: nach Wert/Gewicht-Verhältnis sortieren; gierig bis voll — O(n log n).',
        '0/1 1D-DP: w von W bis weight[i] rückwärts iterieren um Wiederverwendung zu verhindern.',
        'Unbegrenzt (kann wiederholt werden): w vorwärts iterieren – gleicher Gegenstand mehrfach nutzbar.',
        'Bitset-Optimierung: für Zielsumsenproblem Integer-Bit-Shifting statt DP-Array.',
      ],
      visual: '0/1 1D w-rückwärts: dp=[0,0,0,3,3,3]; nach item2: dp=[0,0,0,3,4,4]; nach item3: dp=[0,0,0,3,4,5]',
      commonMistakes: [
        '0/1 Rucksack 1D vorwärts → erlaubt Wiederverwendung (wird unbegrenzt).',
        'Fraktionaler Greedy schlägt bei 0/1 Rucksack fehl – gilt nie.',
      ],
      practice: [
        '0/1 Rucksack mit Gegenstandsrekonstruktion implementieren.',
        '\'Partition Equal Subset Sum\' als Rucksackproblem lösen.',
      ],
    },
  },
};

export default overlay;
