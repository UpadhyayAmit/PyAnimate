import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Encuentra dos índices en [2,7,11,15] que sumen 9. Luego resuelve para objetivo=18.',
  hint: 'Usa un mapa hash: para cada número, verifica si (objetivo - num) ya está guardado.',
  explanation: {
    simple: {
      overview: 'Dado un arreglo de enteros y un objetivo, encuentra dos números que sumen al objetivo.',
      analogy: 'Como buscar dos piezas de puzzle que encajen: para cada pieza, buscas su complemento exacto.',
      steps: [
        'Para cada elemento, calcula el complemento = objetivo - elemento',
        'Comprueba si el complemento ya está en el hash map',
        'Si está: devuelve ambos índices',
        'Si no: añade el elemento actual al hash map y continúa',
      ],
      visual: `nums=[2,7,11,15], objetivo=9
i=0: complemento=7, no en map → {2:0}
i=1: complemento=2, ¡en map! → [0,1]`,
      commonMistakes: [
        'Usar doble bucle anidado → O(n²) innecesario',
        'No manejar duplicados correctamente',
      ],
      practice: [
        'Implementa versión con doble bucle primero, luego optimiza',
        'Resuelve 3-Sum y 4-Sum reduciendo a 2-Sum',
      ],
      timeComplexity: 'O(n) — una pasada con hash map',
      spaceComplexity: 'O(n) — para el hash map'
    },
    deepDive: {
      overview: 'Two-Sum es el arquetipo de optimización hash map O(n) vs fuerza bruta O(n²); 3-Sum se reduce a ordenación + dos punteros.',
      steps: [
        'Two-Sum con arreglo ordenado: dos punteros O(n) tiempo O(1) espacio',
        '3-Sum: ordena + fija un elemento + dos punteros O(n²)',
        'k-Sum: reduce recursivamente a (k-1)-Sum',
        'Two-Sum con flujo de datos: hash set + consulta para cada elemento nuevo',
      ],
      commonMistakes: [
        'Devolver valores en lugar de índices cuando se piden índices',
        'No manejar el caso de usar el mismo elemento dos veces (necesitas índice, no valor)',
      ],
      practice: [
        'Implementa Two-Sum con arreglo ordenado + dos punteros',
        'Generaliza a 4-Sum con reducción a Two-Sum',
      ],
    },
  },
};

export default overlay;
