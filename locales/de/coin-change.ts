import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Minimale Münzen für amount=11 mit Münzen=[1,5,6,9]. DP-Array schrittweise aufbauen.',
  hint: 'dp[0]=0, dp[i]=unendlich. Für jede Münze c: dp[i] = min(dp[i], dp[i-c]+1) wenn i>=c.',
  explanation: {
    simple: {
      overview: 'Minimale Anzahl Münzen aus einem gegebenen Set um genau einen Zielbetrag zu erreichen.',
      analogy: 'Wechselgeld an der Kasse herausgeben: wenigste Münzen/Scheine für exakten Betrag.',
      steps: [
        'dp[0]=0; dp[i]=∞ für i=1..Betrag.',
        'Für jede Münze c und jeden Betrag i≥c: dp[i] = min(dp[i], dp[i-c]+1).',
        'Wenn dp[Betrag] noch ∞ → return -1 (unmöglich).',
      ],
      visual: 'coins=[1,2,5], amount=11: dp=[0,1,1,2,2,1,2,2,3,3,2,3] → dp[11]=3 (5+5+1)',
      commonMistakes: [
        'dp[0]=1 statt 0 initialisieren.',
        'Greedy (immer größte Münze) funktioniert nicht für beliebige Münzsets.',
      ],
      practice: [
        'Anzahl der Möglichkeiten (nicht Minimum) zählen.',
        'Die tatsächlich verwendeten Münzen rekonstruieren.',
      ],
      timeComplexity: 'O(Betrag × Anzahl Münzen)',
      spaceComplexity: 'O(Betrag)'
    },
    deepDive: {
      overview: 'Münzwechsel ist unbegrenztes Rucksackproblem; Zähl-Varianten verwenden Summe statt Minimum.',
      analogy: 'Unbegrenzter Rucksack: jede Münze ist ein Gegenstand mit Gewicht=Wert; unbegrenzt oft verwendbar.',
      steps: [
        'Min Münzen: dp[i] = min(dp[i-c]+1 for c in coins if i>=c).',
        'Anzahl Möglichkeiten: dp[i] += dp[i-c] für jede Münze c (Reihenfolge der Schleifen entscheidet).',
        'Für Kombinationen: Münzen in äußerer Schleife iterieren (verhindert Permutationen).',
        'Für Permutationen: Beträge in äußerer Schleife iterieren.',
      ],
      visual: 'Möglichkeiten dp[4] mit coins [1,2]: erst Münze 1→dp=[1,1,1,1,1]; dann Münze 2→dp=[1,1,2,2,3]',
      commonMistakes: [
        'Schleifenreihenfolge tauschen ändert Zählung von Kombinationen zu Permutationen.',
        '2D-DP verwenden wenn 1D Rolling-Array ausreicht (verschwendet Platz).',
      ],
      practice: [
        'Münzwechsel-Zählung (Kombinationen vs. Permutationen) implementieren und vergleichen.',
        '\'Perfect Squares\' lösen (gleicher Ansatz mit quadratischen Zahlen als Münzset).',
      ],
    },
  },
};

export default overlay;
