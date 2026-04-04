import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Encuentra el subarray de suma máxima de tamaño k=3 en [2, 1, 5, 1, 3, 2].',
  hint: 'Calcula la primera suma de ventana, luego desliza: resta el que sale, suma el que entra.',
  explanation: {
    simple: {
      overview: 'Una ventana deslizante mantiene un subconjunto contiguo de elementos y desliza para explorar todos los subarreglos sin recalcular desde cero.',
      analogy: 'Como mirar por una ventana de tren: ves un trozo del paisaje, y mientras el tren avanza, el panorama se actualiza — entra un nuevo árbol, sale uno viejo.',
      steps: [
        'Define el tamaño de ventana (fijo) o condición (variable)',
        'Inicializa la ventana con los primeros elementos',
        'Desliza: añade el próximo elemento, elimina el que se va',
        'Actualiza el resultado en cada paso',
      ],
      visual: `[2,1,5,1,3,2], k=3
[2,1,5]=8 → [1,5,1]=7 → [5,1,3]=9 → [1,3,2]=6
Máximo: 9`,
      commonMistakes: [
        'Recalcular la suma de la ventana desde cero — O(nk)',
        'Olvidar manejar el caso donde k > longitud de la lista',
      ],
      practice: [
        'Suma máxima de subarray de tamaño k',
        'Subcadena sin caracteres repetidos más larga',
      ],
      timeComplexity: 'O(n) — cada elemento entra y sale de la ventana una vez',
      spaceComplexity: 'O(k) — para la ventana de tamaño k'
    },
    deepDive: {
      overview: 'Las ventanas variables usan dos punteros; la deque monótona da O(n) para el máximo de ventana deslizante.',
      steps: [
        'Ventana fija: elimina nums[i], añade nums[i+k] en cada paso',
        'Ventana variable: expande R, contrae L cuando se viola la condición',
        'Deque monótona: mantiene índices en orden decreciente para O(n) max',
        'Tabla hash + dos punteros para ventana de caracteres únicos',
      ],
      commonMistakes: [
        'Olvidar contraer la ventana cuando se viola la condición',
        'Deque monótona: olvidar sacar los elementos fuera del rango de ventana',
      ],
      practice: [
        'Implementa máximo de ventana deslizante con deque monótona',
        'Resuelve el problema de ventana mínima (LeetCode 76)',
      ],
    },
  },
};

export default overlay;
