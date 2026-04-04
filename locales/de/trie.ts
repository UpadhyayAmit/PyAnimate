import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Erstellen Sie einen Trie aus [\'apple\',\'app\',\'apt\',\'banana\']. Implementieren Sie search und startsWith.',
  hint: 'Jeder Knoten ist ein Dict von Kindern + is_end Flag. Einfügen verfolgt Zeichen für Zeichen.',
  explanation: {
    simple: {
      overview: 'Ein Trie (Präfixbaum) speichert Strings über gemeinsame Präfixe und ermöglicht O(k) Einfügen, Suche und Präfixsuche.',
      analogy: 'Wörterbuch nach Buchstaben: Ast bei \'a\', dann \'ap\', dann \'app\', dann \'apple\'.',
      steps: [
        'Jeder Knoten hat children-Dict (oder Array mit 26 Einträgen) und is_end-Flag.',
        'Einfügen: für jedes Zeichen, bewege zu/erstelle Kind-Knoten; markiere letzten als Ende.',
        'Exakte Suche: Zeichen traversieren; is_end am letzten Knoten prüfen.',
        'Präfixsuche: Präfix traversieren; True wenn alle Zeichen gefunden (kein is_end nötig).',
      ],
      visual: 'Einfügen \'cat\',\'cap\': root→c→a→t(end), root→c→a→p(end); gemeinsamer Präfix \'ca\'.',
      commonMistakes: [
        'is_end nur am letzten Zeichen setzen (korrekt), nicht an Zwischenknoten.',
        'Löschen aus Trie erfordert sorgfältige Behandlung – gemeinsame Präfixknoten nicht löschen.',
      ],
      practice: [
        'Autocomplete implementieren: alle Wörter mit gegebenem Präfix zurückgeben.',
        'Trie für Suche nach längstem Wort in Wörterbuch verwenden.',
      ],
      timeComplexity: 'O(k) pro Operation (k = Wortlänge)',
      spaceComplexity: 'O(ALPHABET × n × k) worst-case'
    },
    deepDive: {
      overview: 'Komprimierter Trie (Patricia/Radix) fusioniert Einzelkind-Ketten; Suffix-Trie/-Baum löst Teilstring-Suche in O(n).',
      analogy: 'Radix-Trie: \'car\',\'card\',\'care\' so komprimieren, dass das gemeinsame \'car\'-Segment ein Knoten ist, nicht drei.',
      steps: [
        'Patricia-Trie: Knoten speichert Teilstring, nicht einzelnes Zeichen; spart Platz und Cache-Lines.',
        'Suffix-Baum: Trie aller Suffixe; O(n) Aufbau via Ukkonens Algorithmus.',
        'Aho-Corasick: Trie mit Failure-Links für Mehr-Muster-Suche in O(n+m+z).',
        'XOR-Trie: Binärdarstellungen speichern; max/min XOR-Paar in O(n log maxVal) finden.',
      ],
      visual: 'Ukkonens Suffix-Baum für \'banana$\': O(n) Aufbau, O(m) Mustersuche vs. O(n·m) naiv.',
      commonMistakes: [
        'Suffix-Trie (nicht Baum) ist O(n²) Raum – Ukkonen für O(n) Baum verwenden.',
        'XOR-Trie muss alle Zahlen auf gleiche Bitlänge auffüllen.',
      ],
      practice: [
        'Aho-Corasick für Mehr-Muster-Suche implementieren.',
        '\'Maximum XOR of Two Numbers\' mit XOR-Trie lösen.',
      ],
    },
  },
};

export default overlay;
