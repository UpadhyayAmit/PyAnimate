import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Try slicing \'Python Programming\' to get \'Prog\'. Then reverse the full string.',
  hint: 'Slicing syntax is s[start:end]. For reverse use s[::-1].',
  explanation: {
    simple: {
      overview: 'Python strings are immutable sequences with rich built-in methods for searching, splitting, and transforming.',
      analogy: 'A string is a bead necklace: you can look at any bead by index, but cutting and restringing creates a new necklace.',
      steps: [
          's[i] accesses index i; s[a:b] slices.',
          's.split(sep) splits by separator into a list.',
          'sep.join(lst) joins a list back into a string.',
          's.find(sub), s.replace(old,new), s.strip(), s.upper(), s.lower().',
      ],
      visual: '\'hello world\'.split() → [\'hello\',\'world\']; \'-\'.join([\'a\',\'b\']) → \'a-b\'',
      commonMistakes: [
          'Concatenating strings in a loop (O(n²)); use \'\'.join(list) instead.',
          'Forgetting strings are immutable: s[0]=\'H\' raises TypeError.',
      ],
      practice: [
          'Reverse words in a sentence: \' \'.join(s.split()[::-1]).',
          'Count vowels in a string.',
      ],
      timeComplexity: 'O(n) for most operations',
      spaceComplexity: 'O(n) for new strings',
    },
    deepDive: {
      overview: 'CPython interns short strings and small integers; repeated string operations go through the buffer protocol.',
      analogy: 'String interning: two variables holding \'hello\' may point to the same object in memory.',
      steps: [
          'sys.intern(s) forces interning; then identity comparison is O(1).',
          'str.format and f-strings compile to CALL_FUNCTION bytecodes.',
          're module uses compiled DFA/NFA for pattern matching.',
          'io.StringIO for building large strings efficiently.',
      ],
      visual: 'a=\'hello\'; b=\'hello\'; a is b → True (interned); a=input(); b=input(); a is b → maybe False',
      commonMistakes: [
          'Relying on interning for arbitrary strings (only guaranteed for identifiers/literals).',
          'Using + in a loop for string concatenation (n² copies).',
      ],
      practice: [
          'Benchmark \'+\' concat loop vs \'\'.join for 10000 strings.',
          'Use re.compile for repeated pattern matching.',
      ],
    },
  },
};

export default overlay;
