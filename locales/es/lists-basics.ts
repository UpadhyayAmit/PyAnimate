import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Crea una lista de 5 números. Agrega 99, elimina el menor, luego imprime ordenada.',
  hint: 'Usa append(), remove() y sorted(). La función min() encuentra el valor más pequeño.',
  explanation: {
    simple: {
      overview: 'Las listas son colecciones ordenadas que pueden contener cualquier tipo de dato. Son mutables — puedes cambiar su contenido.',
      analogy: 'Una lista es como una lista de compras: ordenada, puede tener duplicados y puedes añadir o quitar artículos.',
      steps: [
        'Crea: mi_lista = [1, 2, 3]',
        'Accede: mi_lista[0] devuelve 1',
        'Añade: mi_lista.append(4)',
        'Elimina: mi_lista.remove(2) o mi_lista.pop()',
      ],
      visual: `nums = [10, 20, 30]
nums[0] → 10
nums[-1] → 30
nums[1:] → [20, 30]`,
      commonMistakes: [
        'IndexError al acceder fuera del rango',
        'Confundir lista.sort() (en sitio) con sorted(lista)',
        'Variables de lista apuntan a la misma lista (copia superficial)',
      ],
      practice: [
        'Invierte una lista sin usar reverse()',
        'Encuentra los dos números más grandes',
      ],
    },
    deepDive: {
      overview: 'Las listas de Python son arrays dinámicos que crecen con factor 1.125; el slicing crea nuevas listas.',
      steps: [
        'append es O(1) amortizado; insert(0,x) es O(n)',
        'El slicing a[i:j] crea una copia nueva en O(k)',
        'list.sort() usa Timsort — O(n log n) estable',
        'collections.deque es mejor para inserciones en el frente',
      ],
      commonMistakes: [
        'Usar insert(0,x) en un bucle → O(n²)',
        'copy() es copia superficial — usa copy.deepcopy() para anidadas',
      ],
      practice: [
        'Compara el rendimiento de append vs insert(0,x)',
        'Practica rotaciones de lista con slicing',
      ],
    },
  },
};

export default overlay;
