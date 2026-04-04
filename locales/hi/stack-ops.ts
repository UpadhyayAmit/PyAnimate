import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'List से stack implement करें। push, pop, peek, is_empty add करें। Balanced brackets check के लिए use करें।',
  hint: 'Opens push करें, closing brackets को pop+match करें। Empty या mismatch पर तुरंत False return करें।',
  explanation: {
    simple: {
      overview: 'Stack LIFO (Last In First Out) structure hai jisme push, pop, peek operations hain.',
      analogy: 'Jaise thali stack karna—jo thali last rakhi woh pehle uthayenge.',
      steps: [
        'push element stack ke top par add karta hai',
        'pop top element delete karke return karta hai',
        'peek top dekhta hai lekin delete nahi karta',
        'is_empty check karta hai khaali hai ya nahi',
      ],
      visual: `stack = []
stack.append(1)  # push
stack.append(2)
stack.pop()      # → 2
stack[-1]        # peek → 1`,
      commonMistakes: [
        'Khaali stack par pop karna IndexError deta hai',
        'Queue operations use karna',
        'Peek pop nahi hai—delete nahi karta',
      ],
      practice: [
        'Stack se string reverse karo',
        'Stack se infix expression postfix mein convert karo',
      ],
      timeComplexity: 'O(1) push/pop/peek',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Python list se stack implement karo, saare operations amortized O(1), deque bhi use ho sakta hai.',
      steps: [
        'list.append()/pop() amortized O(1) stack operations',
        'Monotonic stack O(n) next greater/smaller element ke liye',
        'Iterative DFS stack se implement hoti hai',
        'Backtracking problems mein stack useful hai',
      ],
      commonMistakes: [
        'Monotonic stack ke applications nahi jaanna',
        'Recursive call stack aur stack data structure same principle par hai',
      ],
      practice: [
        'Monotonic stack se next greater element nikalo',
        'Stack se daily temperatures problem solve karo',
      ],
    },
  },
};

export default overlay;
