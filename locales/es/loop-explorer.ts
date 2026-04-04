import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Usa bucles anidados para imprimir una tabla de multiplicar (1-5) como cuadrícula.',
  hint: 'Bucle externo para filas, interno para columnas. Usa print(end=\'\\t\') para tabulaciones.',
  explanation: {
    simple: {
      overview: 'Explora cómo funcionan los bucles anidados e itera sobre múltiples dimensiones de datos.',
      analogy: 'Como buscar en una cuadrícula: recorres fila por fila, y dentro de cada fila columna por columna.',
      steps: [
        'El bucle externo itera sobre filas',
        'El bucle interno itera sobre columnas',
        'Cada par (fila, columna) se procesa una vez',
        'El total de iteraciones = filas × columnas',
      ],
      visual: `for i in range(3):
    for j in range(3):
        print(f"({i},{j})", end=" ")
# (0,0)(0,1)(0,2)(1,0)...`,
      commonMistakes: [
        'Bucles profundamente anidados → complejidad exponencial',
        'Modificar el iterable mientras se itera',
      ],
      practice: [
        'Crea una tabla de multiplicar',
        'Genera todos los pares de una lista',
      ],
      timeComplexity: 'O(n×m) para bucles anidados sobre n×m elementos',
      spaceComplexity: 'O(1) si solo se imprimen resultados'
    },
    deepDive: {
      overview: 'Los patrones de bucles anidados y el control de flujo con break/continue/else permiten algoritmos eficientes.',
      steps: [
        'El break externo requiere una bandera o lanzar una excepción',
        'itertools.product() reemplaza bucles anidados elegantemente',
        'zip() paralelo evita la indexación manual de dos listas',
        'Los generadores hacen que las tuplas anidadas sean perezosas',
      ],
      commonMistakes: [
        'Asumir que break sale de todos los bucles — solo sale del más interno',
        'Olvidar combinar itertools.product con zip para matrices',
      ],
      practice: [
        'Reescribe bucles anidados 3D con itertools.product',
        'Usa zip() para iterar matrices por columna',
      ],
    },
  },
};

export default overlay;
