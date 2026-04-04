import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Apni age (int), height (float), aur naam (str) ke liye variables banao.',
  hint: 'type() se variable ka type check karo. f-strings se printing easy hoti hai.',
  explanation: {
    simple: {
      overview: 'Variables data store karne ke containers hain bhai. Python mein int, float, str, bool — ye sab types hain.',
      analogy: 'Variable ek labelled dabba hai — label naam hai, andar ka saman value hai.',
      steps: [
        'Meaningful naam choose karo',
        '= se value assign karo',
        'Python automatically type detect kar leta hai',
        'Different type se reassign bhi kar sakte ho',
      ],
      visual: `age = 25        # int
height = 1.75   # float
name = "Alice"  # str
active = True   # bool`,
      commonMistakes: [
        'Variable name mein space daal dena',
        '= (assign) aur == (compare) ka confusion',
        'Text ke liye quotes bhool jaana',
      ],
      practice: [
        'Naam, umar, height ke variables banao',
        'type() se type check karo',
      ],
    },
    deepDive: {
      overview: 'Python dynamically typed hai yaar: variables sirf object ke references hain, type variable mein nahi object mein hoti hai.',
      steps: [
        'id() se object ka memory address lo',
        'type() se object ki class pata karo',
        '-5 se 256 tak ke integers Python cache karta hai',
        'isinstance() se type aur inheritance check karo',
      ],
      commonMistakes: [
        'Sochna ki variable ka type fix hai',
        'is (identity) aur == (equality) ka mix-up',
      ],
      practice: [
        'id() se cached aur uncached integers compare karo',
        'Dynamic typing test karo value reassign karke',
      ],
    },
  },
};

export default overlay;
