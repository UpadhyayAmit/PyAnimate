import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Verwenden Sie Bit-Operationen: (1) 13 gerade/ungerade, (2) Set-Bits in 255 zählen, (3) XOR-Swap.',
  hint: 'Gerade: n & 1 == 0. Bits zählen: while n: count += n & 1; n >>= 1. XOR swap: a^=b; b^=a; a^=b.',
  explanation: {
    simple: {
      overview: 'Bit-Manipulation operiert direkt auf der Binärdarstellung von Ganzzahlen mit &, |, ^, ~, <<, >>.',
      analogy: 'Eine Reihe von Lichtschaltern (Bits): AND schaltet verschiedene Schalter ab, OR schaltet eingeschaltete an, XOR schaltet bei Unterschieden um.',
      steps: [
        'AND (&): beide Bits müssen 1 sein.',
        'OR (|): eines der Bits muss 1 sein.',
        'XOR (^): Bits müssen verschieden sein; x^x=0, x^0=x.',
        'Shift: x<<1 multipliziert mit 2; x>>1 dividiert durch 2.',
        'Bit k prüfen: (x >> k) & 1. Setzen: x | (1 << k). Löschen: x & ~(1 << k).',
      ],
      visual: '5=0101, 3=0011: 5&3=0001=1, 5|3=0111=7, 5^3=0110=6',
      commonMistakes: [
        '& (bitweise) mit and (logisch) verwechseln.',
        'Negative Zahlen Bitmuster unterscheidet sich zwischen Sprachen (Python hat unbegrenzte Präzision, keine feste Breite).',
      ],
      practice: [
        'Prüfen ob Zahl eine Zweierpotenz ist: n > 0 and (n & n-1) == 0.',
        'Gesetzte Bits zählen (Popcount) mit Brian Kernighans Algorithmus.',
      ],
      timeComplexity: 'O(1) pro Operation, O(log n) für Iteration über Bits',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Bit-Tricks ermöglichen O(1)-Lösungen für Probleme die sonst Schleifen brauchen: niedrigstes gesetztes Bit, nächste Zweierpotenz, Gray Code.',
      analogy: 'Compiler-Intrinsic __builtin_popcount: moderne CPUs haben einen einzelnen Befehl für Popcount.',
      steps: [
        'Niedrigstes gesetztes Bit: x & (-x) (Zweierkomplement-Trick).',
        'Niedrigstes gesetztes Bit entfernen: x & (x-1) – bei Popcount-Schleife verwendet.',
        'Nächste Zweierpotenz: n=x-1; n|=n>>1; n|=n>>2; n|=n>>4; n|=n>>8; n|=n>>16; return n+1.',
        'XOR-Swap: a^=b; b^=a; a^=b – kein temporäre Variable nötig.',
      ],
      visual: 'x=12=1100; x&-x=0100=4 (niedrigstes gesetztes Bit); x&(x-1)=1000=8 (niedrigstes entfernt)',
      commonMistakes: [
        'XOR-Swap schlägt fehl wenn a und b dieselbe Variable sind (a^=a ergibt 0).',
        'Python-Ganzzahlen sind vorzeichenbehaftet mit unbegrenzter Breite – kein 32-Bit-Overflow.',
      ],
      practice: [
        'Popcount mit x & (x-1) Schleife implementieren.',
        'Gray-Code Sequenz kodieren/dekodieren.',
      ],
    },
  },
};

export default overlay;
