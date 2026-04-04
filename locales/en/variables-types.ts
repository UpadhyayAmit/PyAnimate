import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Create variables for your age (int), height (float), and name (str). Print each with its type.',
  hint: 'Use type() to inspect the variable type. f-strings make printing cleaner.',
  explanation: {
    simple: {
      overview: 'Variables are named storage boxes; types tell Python what kind of data lives inside.',
      analogy: 'Labeled jars: an \'age\' jar holds a number, a \'name\' jar holds text.',
      steps: [
          'Assign with =: x = 5.',
          'Python infers the type automatically.',
          'Use type(x) to inspect the type.',
      ],
      visual: 'x = 42  →  box labeled x contains int 42',
      commonMistakes: [
          'Using a variable before assigning it.',
          'Expecting + to concatenate an int and a string without conversion.',
      ],
      practice: [
          'Create variables for name, age, and height; print their types.',
          'Reassign a variable from int to string and observe.',
      ],
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(1) per variable',
    },
    deepDive: {
      overview: 'Python variables are references (pointers) to heap objects; assignment rebinds the reference, not the object.',
      analogy: 'Sticky notes pointing to objects on a shelf; two notes can point to the same object.',
      steps: [
          'a = 5 creates int object 5, binds name \'a\'.',
          'b = a makes \'b\' point to same object.',
          'a = 6 rebinds \'a\'; \'b\' still points to 5.',
      ],
      visual: 'a → [5], b → [5]  then  a → [6], b → [5]',
      commonMistakes: [
          'Thinking b = a copies the value (it copies the reference for mutables).',
          'Forgetting Python ints are immutable so rebinding is safe.',
      ],
      practice: [
          'Check id(a) before and after reassignment.',
          'Compare mutable list aliasing: a=[1,2]; b=a; a.append(3); print(b).',
      ],
    },
  },
};

export default overlay;
