import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Encuentra min y max de [34, 7, 23, 32, 5, 62] en UNA pasada sin usar min()/max().',
  hint: 'Inicializa min_val y max_val con el primer elemento, luego compara cada elemento restante.',
  explanation: {
    simple: {
      overview: 'Encontrar el valor más pequeño o más grande en una colección recorriendo todos los elementos.',
      analogy: 'Como encontrar la persona más alta o más baja en una fila — recorres todos y llevas la cuenta del récord.',
      steps: [
        'Inicializa min/max con el primer elemento',
        'Recorre los elementos restantes',
        'Actualiza si encuentras un nuevo mínimo o máximo',
        'Devuelve el resultado final',
      ],
      visual: `nums = [3,1,4,1,5,9,2,6]
minimo = nums[0]
for n in nums[1:]:
    if n < minimo:
        minimo = n
# minimo = 1`,
      commonMistakes: [
        'Inicializar a 0 en lugar del primer elemento',
        'Usar float("inf") sin entender por qué funciona',
      ],
      practice: [
        'Encuentra el segundo mínimo sin ordenar',
        'Devuelve índices de los valores mínimo y máximo',
      ],
      timeComplexity: 'O(n) — siempre se escanea la lista completa',
      spaceComplexity: 'O(1) — solo se almacenan dos variables'
    },
    deepDive: {
      overview: 'Las funciones incorporadas min()/max() de Python aceptan iterable o *args con argumento de clave opcional.',
      steps: [
        'min(iterable, key=func) aplica func antes de comparar',
        'min() en diccionario itera sobre claves por defecto',
        'heapq.nsmallest(k) es O(n log k) vs sorted O(n log n)',
        'Para streaming: mantén un heap de tamaño k en O(n log k)',
      ],
      commonMistakes: [
        'Llamar min() en lista vacía → ValueError',
        'Confundir min(d) (claves) con min(d.values()) (valores)',
      ],
      practice: [
        'Encuentra la k-ésima estadística de orden con heapq',
        'Implementa min/max en stream sin pre-carga',
      ],
    },
  },
};

export default overlay;
