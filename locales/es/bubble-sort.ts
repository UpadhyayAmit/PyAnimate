import type { LessonLocaleOverlay } from '../types';

const bubbleSort: LessonLocaleOverlay = {
  prompt: 'Cambia array a [9, 1, 5, 3, 7]. Predice cuántos swaps se necesitan antes de que la array quede ordenada.',
  hint: 'Cuenta los eventos de swap en color naranja en la timeline. Cada swap mueve el elemento mayor una posición a la derecha.',
  useCases: [
    'Enseñar conceptos de ordenamiento - el algoritmo más visual',
    'Detectar arrays casi ordenadas (optimización de salida temprana)',
    'Sistemas embebidos con poca memoria donde O(1) space importa',
  ],
  approach:
    'Bubble sort compara cada par adyacente y hace swap si están fuera de orden. Después de cada outer pass completa, el mayor elemento no ordenado queda garantizado en su posición final correcta. Usamos nested loops: el outer loop controla las pasadas (n-1), y el inner loop controla las comparaciones (se reduce en cada pasada porque el final ya está ordenado). No es eficiente para datos grandes - O(n²) - pero es el algoritmo más visual para aprender ordenamiento por comparación.',
  executionFrames: [
    {
      summary: 'arr = [5, 3, 8, 1, 2] - 5 elementos desordenados.',
      why: 'Guardamos los valores en una list para poder acceder a elementos por index (arr[j], arr[j+1]). Bubble sort es un algoritmo in-place: modificamos esta misma list en vez de crear una nueva, lo que mantiene la space complexity en O(1).',
    },
    {
      summary: 'n = 5 - necesitamos hasta 4 outer passes.',
      why: 'Guardamos n = len(arr) una sola vez en lugar de llamar len() en cada iteración. Es una micro-optimización, pero sobre todo hace que los límites del loop sean claros. Necesitamos n-1 outer passes porque después de n-1 pasadas, el elemento más pequeño queda garantizado en la posición 0.',
    },
    {
      summary: 'arr[0]=5 > arr[1]=3 - swap necesario.',
      why: 'Comparamos arr[j] > arr[j+1] (mayor estricto) para mantener estabilidad: elementos iguales no hacen swap, preservando su orden relativo original. Esta comparación es el núcleo de todos los sort basados en comparación.',
    },
    {
      summary: 'Python tuple swap - no se necesita temp variable.',
      why: 'arr[j], arr[j+1] = arr[j+1], arr[j] es la asignación simultánea elegante de Python. En C necesitarías una temp variable. Python evalúa primero el lado derecho como tuple y luego desempaqueta, así que ambos valores se capturan antes de sobrescribir.',
    },
    {
      summary: '8 está bubble hacia la derecha - es el mayor hasta ahora.',
      why: 'Observa que 8 se movió dos posiciones a la derecha en dos pasos. El elemento más grande siempre bubble al final de cada pasada; de ahí viene el nombre Bubble sort. Después de esta outer pass (i=0), 8 quedará en su posición final.',
    },
    {
      summary: '8 ahora está en su posición final en index 4.',
      why: "El inner loop se ejecuta n - i - 1 veces. El '- i' es la optimización: después de la pasada i, los últimos i elementos ya están ordenados y en su posición final. No hace falta compararlos de nuevo, lo que reduce el trabajo total.",
    },
    {
      summary: '5 bubble hacia la derecha. [3, 5, 1, 2, 8] -> [3, 1, 2, 5, 8]',
      why: 'Cada outer pass fija un elemento más. Después de la pasada 2, tanto 5 como 8 ya están finales. El algoritmo garantiza progreso incluso en el peor caso: n-1 pasadas siempre producen una array ordenada.',
    },
    {
      summary: 'Final sorted array: [1, 2, 3, 5, 8].',
      why: 'Comparaciones totales: n×(n-1)/2 = 10 para n=5. Por eso Bubble sort es O(n²): el número de comparaciones crece cuadráticamente. Para n=1000, eso es cerca de 500 000 comparaciones. Merge Sort lo hace en cerca de 10 000. Usa Bubble sort para aprender, no en producción.',
    },
  ],
  explanation: {
    simple: {
      overview:
        'Bubble Sort compara elementos adyacentes y hace swap cuando están fuera de orden. En cada pasada, el mayor elemento pendiente termina al final.',
      analogy:
        'Como burbujas en agua: las más grandes suben a la superficie en cada ronda.',
      steps: [
        'Recorre la lista y compara arr[j] con arr[j+1].',
        'Si arr[j] > arr[j+1], realiza swap.',
        'Después de una pasada, el mayor elemento queda fijo al final.',
        'Reduce el rango de la siguiente pasada porque el final ya está sorted.',
        'Si no hubo swaps, termina temprano.',
      ],
      visual: 'Pasada 1: [5,3,8,1,2] -> [3,5,1,2,8]; luego se recorta el rango en cada pasada.',
      commonMistakes: [
        'No reducir el límite del inner loop.',
        'Usar >= en lugar de > y perder estabilidad.',
        'No aplicar early exit cuando una pasada tiene 0 swaps.',
      ],
      practice: [
        'Traza Bubble Sort en una lista ya ordenada con y sin early exit.',
        'Explica por qué Bubble Sort es estable.',
        'Adáptalo para ordenar de mayor a menor.',
      ],
      timeComplexity: 'O(n²) peor/promedio, O(n) mejor caso con early exit',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview:
        'Bubble Sort hace n-1 pasadas. En la pasada i, el máximo del segmento no ordenado llega a su posición final.',
      analogy:
        'Como tamizar piedras en rondas: las grandes se van moviendo al extremo derecho.',
      steps: [
        'Inicializa swapped=false y recorre j desde 0 hasta n-i-2.',
        'Compara arr[j] > arr[j+1] y haz swap si corresponde.',
        'Si no hubo swaps, el array ya está ordenado (break).',
        'Tras la pasada i, los últimos i elementos quedan finalizados.',
        'Continúa hasta i = n-2 o hasta salida anticipada.',
      ],
      visual: 'El rango de exploración baja en escalera: n-1, n-2, n-3...',
      commonMistakes: [
        'Error de límites (off-by-one) en el inner loop.',
        'Recalcular len(arr) en cada comparación.',
        'Comparar con una clave incorrecta.',
      ],
      practice: [
        'Demuestra formalmente la estabilidad con condición estricta >.',
        'Deriva el conteo exacto de comparaciones sin early exit.',
        'Implementa Cocktail Sort y compara cantidad de swaps.',
      ],
      timeComplexity: 'O(n²) comparaciones, O(n²) swaps en peor caso',
      spaceComplexity: 'O(1) auxiliar',
    },
  },
};

export default bubbleSort;
