import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Selection Sort',
  hint: 'Encuentra el mínimo en cada pasada y colócalo en su posición correcta.',
  approach: 'En cada iteración, encuentra el mínimo en la parte no ordenada y cámbialo al final de la parte ordenada.',
  useCases: [
    'Ordenar datasets pequeños de forma simple',
    'Ordenación in-place cuando la memoria es limitada',
    'Enseñanza gracias a su lógica clara',
  ],
  explanation: {
    simple: {
      overview: 'La ordenación por selección escanea repetidamente la parte no ordenada, selecciona el mínimo y lo intercambia al frente.',
      analogy: 'Como elegir el estudiante más bajo en una fila desordenada, ponerlo al frente y repetir con los restantes.',
      steps: [
        'Encuentra el mínimo en la parte no ordenada',
        'Intercámbialo con el primer elemento no ordenado',
        'Avanza el límite ordenado una posición',
        'Repite para todos los elementos',
      ],
      visual: '[64,25,12,22] → [12,25,64,22] → [12,22,64,25] → [12,22,25,64]',
      commonMistakes: [
        'Hacer swaps innecesarios cuando el mínimo ya está en posición',
        'No rastrear el índice del mínimo correctamente',
      ],
      practice: [
        'Traza la selección en [3,1,4,1,5,9]',
        'Implementa la variante de selección máxima (ordenando de atrás)',
      ],
      timeComplexity: 'O(n²) — siempre, sin importar los datos',
      spaceComplexity: 'O(1) — en sitio'
    },
    deepDive: {
      overview: 'La selección hace exactamente n-1 swaps (mínimo posible) pero O(n²) comparaciones; inestable pero minimiza escrituras.',
      steps: [
        'Siempre O(n²) comparaciones sin importar la entrada — no adaptativa',
        'Solo n-1 swaps — ideal cuando las escrituras son costosas (EEPROM)',
        'Inestable: puede cambiar el orden relativo de elementos iguales',
        'La variante de selección doble (elegir min y max simultáneamente) reduce comparaciones',
      ],
      commonMistakes: [
        'Usarla cuando importa la estabilidad — usa inserción en su lugar',
        'Confundir la falta de adaptabilidad con simplicidad',
      ],
      practice: [
        'Implementa selección doble (min+max en un paso)',
        'Muestra cuándo la selección supera a la inserción en escrituras',
      ],
    },
  },
};

export default overlay;
