import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Check karo ki \'({[]})\' aur \'([)]\' valid hain. Phir \'(((\' case handle karo.',
  hint: 'Open brackets ko stack par push karo. Close bracket aane par pop karke match verify karo.',
  explanation: {
    simple: {
      overview: 'Brackets balanced hain ya nahi check karo — stack ka classic use case.',
      analogy: 'Jaise dost ka kaam karo — jo khola wahi band karo, aur order sahi hona chahiye.',
      steps: [
        'Stack use karo',
        'Opening bracket: stack pe push karo',
        'Closing bracket: stack top se match karo',
        'End mein stack empty honi chahiye',
      ],
      visual: `"({[]})" -> push ( { [ -> ] matches [ -> } matches { -> ) matches ( -> stack empty OK
"({)" -> stack has { remaining FAIL`,
      commonMistakes: [
        'Empty stack pe pop — IndexError',
        'End mein stack empty check bhool jaana',
        'Closing bracket types ka matching galat karna',
      ],
      practice: [
        'Valid parentheses implement karo',
        'Minimum parentheses add/remove to make valid solve karo',
      ],
    },
    deepDive: {
      overview: 'Stack-based parsing ka foundation — expression evaluation, HTML/XML parsing, compiler design mein use hota hai.',
      steps: [
        'Time O(n), Space O(n) — optimal',
        'Matching: dict {")":"(", "}":"{", "]":"["} use karo',
        'Counter approach sirf single type brackets ke liye',
        'Recursion ya regex se complex nested structures',
      ],
      commonMistakes: [
        'Counter se single bracket type works — multi-type ke liye nahi',
        'Early exit when mismatch found — no need to continue',
      ],
      practice: [
        'Expression evaluator build karo parentheses ke saath',
        'Minimum bracket removals to make valid solve karo',
      ],
    },
  },
};

export default overlay;
