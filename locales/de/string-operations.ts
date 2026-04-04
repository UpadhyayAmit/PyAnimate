import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Schneiden Sie \'Python Programming\', um \'Prog\' zu erhalten. Kehren Sie dann den vollständigen String um.',
  hint: 'Slice-Syntax ist s[start:end]. Für Umkehrung verwenden Sie s[::-1].',
  explanation: {
    simple: {
      overview: 'Python-Strings sind unveränderliche Sequenzen mit vielfältigen eingebauten Methoden zum Suchen, Aufteilen und Transformieren.',
      analogy: 'Ein String ist eine Perlenkette: einzelne Perlen per Index anschaubar, aber Zerschneiden und Neuauffädeln erzeugt eine neue Kette.',
      steps: [
        's[i] greift auf Index i zu; s[a:b] schneidet aus.',
        's.split(sep) teilt nach Trennzeichen in eine Liste.',
        'sep.join(lst) verbindet eine Liste wieder zu einem String.',
        's.find(sub), s.replace(alt,neu), s.strip(), s.upper(), s.lower().',
      ],
      visual: '\'hello world\'.split() → [\'hello\',\'world\']; \'-\'.join([\'a\',\'b\']) → \'a-b\'',
      commonMistakes: [
        'Strings in einer Schleife mit + verketten (O(n²)); stattdessen \'\'.join(liste) verwenden.',
        'Vergessen, dass Strings unveränderlich sind: s[0]=\'H\' wirft TypeError.',
      ],
      practice: [
        'Wörter in einem Satz umkehren: \' \'.join(s.split()[::-1]).',
        'Vokale in einem String zählen.',
      ],
      timeComplexity: 'O(n) für die meisten Operationen',
      spaceComplexity: 'O(n) für neue Strings'
    },
    deepDive: {
      overview: 'CPython interniert kurze Strings; wiederholte String-Operationen laufen über das Puffer-Protokoll.',
      analogy: 'String-Interning: zwei Variablen mit \'hallo\' können auf dasselbe Objekt im Speicher zeigen.',
      steps: [
        'sys.intern(s) erzwingt Interning; danach ist Identitätsvergleich O(1).',
        'str.format und f-Strings werden zu CALL_FUNCTION-Bytecodes kompiliert.',
        'Das re-Modul nutzt kompilierte DFA/NFA für Mustererkennung.',
        'io.StringIO für das effiziente Aufbauen großer Strings verwenden.',
      ],
      visual: 'a=\'hallo\'; b=\'hallo\'; a is b → True (interniert); a=input(); b=input(); a is b → evtl. False',
      commonMistakes: [
        'Sich auf Interning für beliebige Strings verlassen (nur für Bezeichner/Literale garantiert).',
        '+ in einer Schleife für String-Verkettung verwenden (n² Kopien).',
      ],
      practice: [
        '\'+\'-Schleife vs \'\'.join für 10.000 Strings benchmarken.',
        're.compile für wiederholtes Mustererkennen verwenden.',
      ],
    },
  },
};

export default overlay;
