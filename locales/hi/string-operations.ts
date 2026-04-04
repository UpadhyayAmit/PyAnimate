import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '\'Python Programming\' को slice करके \'Prog\' निकालें। फिर पूरी string को reverse करें।',
  hint: 'Slicing syntax है s[start:end]। Reverse के लिए s[::-1] use करें।',
  explanation: {
    simple: {
      overview: 'Strings characters ka sequence hain, Python mein operations ke liye bahut saare built-in methods hain.',
      analogy: 'String moti ke haar ki tarah hai—har moti ek character hai, kaat sakte hain, check kar sakte hain, jod sakte hain.',
      steps: [
        'Single ya double quotes se banao',
        '+  ya f-string se join karo',
        'Index/slice se characters access karo',
        'upper(), lower(), split(), strip() jaise methods use karo',
      ],
      visual: `s = "hello"
s[0] → "h"
s[-1] → "o"
s[1:4] → "ell"
s.upper() → "HELLO"`,
      commonMistakes: [
        'Strings immutable hain—methods naya string return karte hain',
        'str+int se TypeError aata hai',
        'Method return value save nahi karna',
      ],
      practice: [
        'Slicing se string reverse karo',
        'Sentence mein vowels count karo',
      ],
    },
    deepDive: {
      overview: 'Python strings immutable Unicode sequences hain, f-string aur str.format() powerful interpolation dete hain.',
      steps: [
        'String interning chhote strings reuse karta hai',
        'join() multiple strings concatenate karne ka fastest tarika hai',
        'encode()/decode() bytes↔str conversion',
        're module regular expression matching ke liye',
      ],
      commonMistakes: [
        'Loop mein + concatenation → O(n²)',
        'Python 3 mein bytes aur str mix karna',
      ],
      practice: [
        '"".join() aur loop concatenation ka performance compare karo',
        'str.format() se formatting practice karo',
      ],
    },
  },
};

export default overlay;
