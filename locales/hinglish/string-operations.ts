import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '\'Python Programming\' ko slice karo \'Prog\' nikalne ke liye. Phir poori string ko reverse karo.',
  hint: 'Slicing syntax hai s[start:end]. Reverse ke liye s[::-1] use karo.',
  explanation: {
    simple: {
      overview: 'Strings text data store karte hain — Python mein ye immutable sequences of characters hain.',
      analogy: 'String ek sealed letter ki tarah — padh sakte ho, copy bana sakte ho, par original change nahi kar sakte.',
      steps: [
        'Quotes mein text: "hello" ya \'hello\'',
        'Concatenation: "Hello" + " " + "World"',
        'f-strings se format: f"Naam: {name}"',
        'Methods: upper(), lower(), strip(), split()',
      ],
      visual: `s = "Hello World"
s.upper()    # "HELLO WORLD"
s.split()    # ["Hello", "World"]
s[0:5]       # "Hello"`,
      commonMistakes: [
        'Strings immutable hain — modify karna new string banata hai',
        'String ko number se alag concatenate karna error deta hai',
        'Single vs double quotes dono same hain Python mein',
      ],
      practice: [
        'Email address se username nikalo (@ se pehle)',
        'String palindrome hai ya nahi check karo',
      ],
    },
    deepDive: {
      overview: '"".join() bade strings ke liye efficient hai — + concatenation O(n^2) hoti hai loop mein.',
      steps: [
        'str.format() vs f-strings — f-strings faster hain',
        'encode()/decode() se bytes aur str convert karo',
        're module se regular expressions',
        'str.translate() se character mapping efficient hai',
      ],
      commonMistakes: [
        'Loop mein + se string build karna — use join()',
        'Unicode vs bytes confusion',
        'Regex special characters escape karna bhool jaana',
      ],
      practice: [
        'Word frequency counter banao',
        'CSV line ko parse karo without csv module',
      ],
    },
  },
};

export default overlay;
