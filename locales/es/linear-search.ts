import type { LessonLocaleOverlay } from '../types';

const linearSearch: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'La busqueda lineal revisa cada elemento hasta encontrar el target o terminar.',
      analogy: 'Como buscar un libro en una repisa desordenada mirando lomo por lomo.',
      steps: [
        'Empieza en index 0.',
        'Compara arr[i] con target.',
        'Si coincide, devuelve i.',
        'Si no, incrementa i y sigue.',
        'Si llegas al final, devuelve not found.',
      ],
      visual: '[7 2 9 4] -> 7 no -> 2 si (index 1).',
      commonMistakes: [
        'Usar i < n-1 y saltar el ultimo elemento.',
        'No manejar arreglo vacio.',
        'Usarla sobre datos ordenados donde binary search es mejor.',
      ],
      practice: [
        'Cuenta comparaciones best/worst/average.',
        'Devuelve todas las posiciones del target.',
        'Prueba busqueda desde ambos extremos.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Linear search es simple y robusta para n pequeno o datos en streaming.',
      analogy: 'Un solo recorrido sobre un flujo que no puedes rebobinar.',
      steps: [
        'Invariante: indices < i ya fueron verificados.',
        'Cada elemento se compara una vez.',
        'Se corta al primer match.',
        'Sin match: termina tras n comparaciones.',
        'Retorna index o -1.',
      ],
      visual: 'La zona revisada crece de izquierda a derecha.',
      commonMistakes: [
        'Comparar floats sin tolerancia.',
        'Ignorar estructuras mejores como hash map.',
        'Sobre-optimizar cuando n es muy pequeno.',
      ],
      practice: [
        'Prueba formalmente la invariante.',
        'Implementa la tecnica del sentinel.',
        'Haz una version case-insensitive para strings.',
      ],
      timeComplexity: 'Theta(n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default linearSearch;
