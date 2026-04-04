import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Calcula suma y promedio de scores = [85, 92, 78, 96, 88, 73]. Identifica quiénes están por encima del promedio.',
  hint: 'Suma todo primero, divide por el conteo. Luego filtra con comprensión de lista.',
  explanation: {
    simple: {
      overview: 'Calcular la suma de todos los elementos y la media (suma dividida por el conteo).',
      analogy: 'Como sumar las notas de todos los estudiantes y dividir por el número de estudiantes para obtener la nota media.',
      steps: [
        'Inicializa la suma a 0',
        'Suma cada elemento en un bucle (o usa sum())',
        'Divide por len() para obtener la media',
        'Maneja el caso de lista vacía',
      ],
      visual: `nums = [4, 8, 15, 16, 23]
total = sum(nums)      # 66
media = total / len(nums) # 13.2`,
      commonMistakes: [
        'División entera con // en lugar de /  para media',
        'División por cero si la lista está vacía',
        'Sumar cadenas en lugar de números',
      ],
      practice: [
        'Calcula media de una lista de notas',
        'Encuentra elementos por encima de la media',
      ],
      timeComplexity: 'O(n) — se visita cada elemento',
      spaceComplexity: 'O(1) — sin estructura de datos extra'
    },
    deepDive: {
      overview: 'La función sum() de Python acepta un start opcional; statistics.mean() gestiona tipos y NaN de forma segura.',
      steps: [
        'sum(iterable, start=0) — start inicializa el acumulador',
        'math.fsum() evita errores de punto flotante en sumas largas',
        'statistics.mean() lanza StatisticsError en lista vacía',
        'Use reduce(operator.add, lst) para operaciones funcionales',
      ],
      commonMistakes: [
        'Olvidar que sum de floats acumula error de redondeo',
        'Usar mean en datos de conteo ordinal — puede ser engañoso',
      ],
      practice: [
        'Compara sum() vs math.fsum() para floats',
        'Implementa media móvil con deque de tamaño fijo',
      ],
    },
  },
};

export default overlay;
