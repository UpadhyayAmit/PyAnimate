import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implementa Fibonacci recursivo. Comprueba fib(10) y fib(35). Nota la diferencia de tiempo.',
  hint: 'Añade memoización con un diccionario caché. El árbol de llamadas pasa de 2^n a n.',
  explanation: {
    simple: {
      overview: 'La versión recursiva de Fibonacci llama directamente a la definición matemática: fib(n) = fib(n-1) + fib(n-2) con casos base.',
      analogy: 'Como preguntar a dos personas el resultado y combinarlos. Pero cada persona también pregunta a otras dos — el árbol crece exponencialmente.',
      steps: [
        'Caso base: fib(0)=0, fib(1)=1',
        'Caso recursivo: fib(n) = fib(n-1) + fib(n-2)',
        'El árbol de recursión tiene 2^n nodos sin memo',
        'Con @lru_cache: cada estado se calcula solo una vez → O(n)',
      ],
      visual: `fib(4): fib(3)+fib(2)
= fib(2)+fib(1)+fib(1)+fib(0)
= fib(1)+fib(0)+1+1+0 = 3`,
      commonMistakes: [
        'Olvidar el caso base → recursión infinita',
        'No añadir memoización para inputs grandes',
      ],
      practice: [
        'Agrega @lru_cache y compara tiempos de ejecución',
        'Dibuja el árbol de recursión para fib(5) a mano',
      ],
      timeComplexity: 'O(2^n) sin memo, O(n) con memoización',
      spaceComplexity: 'O(n) — profundidad de pila'
    },
    deepDive: {
      overview: 'El Fibonacci recursivo es el ejemplo canónico de subproblemas solapados; la memoización lo convierte en el primer problema de DP.',
      steps: [
        'Árbol de recursión: nodos = O(2^n), llamadas únicas = O(n)',
        '@lru_cache convierte automáticamente recursión en memoización',
        'Bottom-up DP elimina la sobrecarga de recursión',
        'La exponenciación de matrices da F(n) en O(log n)',
      ],
      commonMistakes: [
        'Calcular fib(35+) sin memo en producción — muy lento',
        'No entender que la memoización convierte el árbol en un DAG',
      ],
      practice: [
        'Implementa Fibonacci con memoización manual (dict)',
        'Compara tiempos: recursivo O(2^n) vs memo O(n) vs iterativo O(n)',
      ],
    },
  },
};

export default overlay;
