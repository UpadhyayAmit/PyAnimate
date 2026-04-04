import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implementa una pila con una lista. Añade push, pop, peek, is_empty. Úsala para verificar brackets.',
  hint: 'Push abre, pop+compara brackets de cierre. Devuelve False si la pila está vacía o hay discrepancia.',
  explanation: {
    simple: {
      overview: 'Una pila es una colección LIFO (último en entrar, primero en salir). Las operaciones push y pop trabajan en el tope.',
      analogy: 'Como una pila de platos: siempre añades y quitas del tope. El último plato puesto es el primero en ser usado.',
      steps: [
        'Usa una lista de Python como pila',
        'push: lista.append(elemento)',
        'pop: lista.pop() devuelve y elimina el tope',
        'peek: lista[-1] ve el tope sin eliminar',
      ],
      visual: `pila = []
pila.append(1)  # [1]
pila.append(2)  # [1,2]
pila.pop()      # devuelve 2, pila=[1]`,
      commonMistakes: [
        'pop() en pila vacía → IndexError',
        'Usar insert(0,x) en lugar de append — O(n) vs O(1)',
      ],
      practice: [
        'Comprueba paréntesis válidos con pila',
        'Evalúa expresión postfija (notación polaca inversa)',
      ],
      timeComplexity: 'O(1) push y pop amortizado',
      spaceComplexity: 'O(n) — para n elementos'
    },
    deepDive: {
      overview: 'Las pilas permiten DFS iterativo, paréntesis válidos, historial de deshacer y la pila monótona para siguientes-mayores.',
      steps: [
        'DFS iterativo: usa pila explícita en lugar de recursión',
        'Pila monótona: mantiene secuencia creciente/decreciente para O(n) siguiente-mayor',
        'Seguimiento de mínimo: par (valor, min_actual) para min O(1) de pila',
        'collections.deque como pila para operaciones de ambos extremos en O(1)',
      ],
      commonMistakes: [
        'Olvidar que la recursión usa la pila de llamadas implícitamente',
        'Pila monótona: confundir cuándo hacer pop',
      ],
      practice: [
        'Implementa DFS iterativo con pila explícita',
        'Implementa pila con getMin() en O(1)',
      ],
    },
  },
};

export default overlay;
