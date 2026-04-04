import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Check करें कि \'({[]})\' और \'([)]\' valid हैं। फिर \'(((\' case handle करें।',
  hint: 'Open brackets को stack पर push करें। Close bracket आने पर pop करके match verify करें।',
  explanation: {
    simple: {
      overview: 'Valid Parentheses: check karo ()، []، {} string mein properly matched aur nested hain.',
      analogy: 'Jaise ledger ka zero balance—har withdrawal (closing) ke liye corresponding deposit (opening) chahiye.',
      steps: [
        'Stack aur matching map use karo',
        'Opening brackets stack mein push karo',
        'Closing bracket stack top se compare karo',
        'End mein stack khaali hai toh valid',
      ],
      visual: `"({[]})" → stack:( { [ → ] match→}match→)match→empty=True
"(]" → ) ke baad ] → ( se match nahi=False`,
      commonMistakes: [
        'Khaali string invalid maanna (yeh valid hai)',
        'End mein stack khaali check karna bhool jana',
      ],
      practice: [
        'Valid banane ke liye minimum additions/deletions nikalo',
        'Longest valid parentheses substring nikalo',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Classic stack problem, most recent opening bracket track karta hai, extensions: nested structure parsing.',
      steps: [
        'Mapping: "]":"[", "}":"{", ")":"("',
        'Closing ko corresponding opening mein convert karke stack top se compare karo',
        'Early termination: khaali stack par closing bracket → False',
        'Variations: minimum additions/longest valid substring',
      ],
      commonMistakes: [
        'Closing brackets stack mein push karna',
        'Khaali stack par pop karna IndexError',
      ],
      practice: [
        'Minimum additions nikalo valid banane ke liye',
        'DP se longest valid parentheses substring nikalo',
      ],
    },
  },
};

export default overlay;
