import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'अपनी age (int), height (float), और name (str) के लिए variables बनाएं।',
  hint: 'type() function से variable का type check करें। f-strings से printing आसान होती है।',
  explanation: {
    simple: {
      overview: 'Variables data store karne ke containers hain. Python mein int, float, str, bool types hain.',
      analogy: 'Variable ek labelled box ki tarah hai—label naam hai, andar ka saman value hai.',
      steps: [
        'Meaningful naam chunen',
        '= se value assign karo',
        'Python automatically type detect karta hai',
        'Different type se reassign kar sakte hain',
      ],
      visual: `age = 25        # int
height = 1.75   # float
name = "Alice"  # str
active = True   # bool`,
      commonMistakes: [
        'Variable name mein space daalna',
        '= (assign) aur == (compare) ka confusion',
        'Text ke liye quotes bhool jana',
      ],
      practice: [
        'Naam, umar, height ke variables banao',
        'type() se type check karo',
      ],
    },
    deepDive: {
      overview: 'Python dynamically typed hai: variables objects ke references hain, objects ke paas type, id aur value hoti hai.',
      steps: [
        'id() se object ka memory address lo',
        'type() se object ki class lo',
        '-5 se 256 tak ke integers cache hote hain',
        'isinstance() se type inheritance check karo',
      ],
      commonMistakes: [
        'Yeh sochna ki variable type fixed hai',
        'is (identity) aur == (equality) ka confusion',
      ],
      practice: [
        'id() se cached aur uncached integers compare karo',
        'Different type reassign karke dynamic typing test karo',
      ],
    },
  },
};

export default overlay;
