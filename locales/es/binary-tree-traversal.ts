import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implementa el recorrido en orden, pre-orden y post-orden de un árbol binario.',
  hint: 'La recursión es natural aquí. En orden: izq→nodo→der. Pre-orden: nodo→izq→der. Post-orden: izq→der→nodo.',
  explanation: {
    simple: {
      overview: 'Los recorridos de árboles binarios visitan nodos en un orden específico: en-orden (izq-raíz-der), pre-orden (raíz-izq-der) o post-orden (izq-der-raíz).',
      analogy: 'Como explorar un árbol genealógico: en-orden es alfabético, pre-orden visita padres primero, post-orden visita hijos primero.',
      steps: [
        'En-orden: visita izquierdo, luego raíz, luego derecho (da BST ordenado)',
        'Pre-orden: visita raíz, luego izquierdo, luego derecho (copia el árbol)',
        'Post-orden: visita izquierdo, derecho, luego raíz (borra árbol)',
        'Por niveles: usa BFS para visitar nivel por nivel',
      ],
      visual: `    4
   / \\
  2   6
 / \\ / \\
1  3 5  7
En-orden: 1 2 3 4 5 6 7`,
      commonMistakes: [
        'Confundir el orden de en/pre/post-orden',
        'No manejar el caso de árbol vacío (None)',
      ],
      practice: [
        'Implementa los 4 tipos de recorrido',
        'Reconstituye un árbol dado pre-orden e in-orden',
      ],
      timeComplexity: 'O(n) — se visita cada nodo exactamente una vez',
      spaceComplexity: 'O(h) — h es la altura del árbol'
    },
    deepDive: {
      overview: 'El recorrido de Morris usa O(1) espacio sin pila ni recursión; el recorrido iterativo usa pila explícita.',
      steps: [
        'Morris (en-orden): modifica temporalmente los punteros right para crear "hilos"',
        'Iterativo en-orden con pila: empuja nodos izquierdos, procesa y va a la derecha',
        'Por niveles con deque: agrupa nodos por nivel para problemas de nivel',
        'Serialización/deserialización: pre-orden con marcadores null',
      ],
      commonMistakes: [
        'Morris modifica el árbol temporalmente — no usar con estructuras compartidas',
        'Olvidar restaurar los punteros en el recorrido de Morris',
      ],
      practice: [
        'Implementa recorrido de Morris en-orden',
        'Implementa recorrido por niveles con salida por nivel',
      ],
    },
  },
};

export default overlay;
