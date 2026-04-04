import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Usa un bucle while para imprimir números del 1 al 10, luego imprime su suma.',
  hint: 'Mantén una variable contador y actualízala en cada iteración.',
  explanation: {
    simple: {
      overview: 'Un bucle while repite un bloque de código mientras una condición sea verdadera.',
      analogy: 'Como hacer flexiones — sigues mientras puedas, paras cuando no puedes más.',
      steps: [
        'Escribe while condición:',
        'El bloque se ejecuta si la condición es True',
        'Actualiza algo para que la condición sea False',
        'Usa break para salir antes',
      ],
      visual: `n = 1
while n <= 5:
    print(n)
    n += 1
# Imprime 1 2 3 4 5`,
      commonMistakes: [
        'Olvidar actualizar la variable → bucle infinito',
        'Olvidar los dos puntos después de while',
        'Lógica de condición incorrecta',
      ],
      practice: [
        'Bucle de adivinanza de números',
        'Contar dígitos en un número con while',
      ],
    },
    deepDive: {
      overview: 'Los bucles while soportan cláusula else (se ejecuta si no hubo break) y las sentencias continue/break.',
      steps: [
        'while-else: else se ejecuta si el bucle termina normalmente',
        'continue salta a la siguiente iteración',
        'break sale del bucle completamente',
        'Usa while True con break para bucles "haz-mientras"',
      ],
      commonMistakes: [
        'No saber que while-else no es try-except',
        'Colocar continue/break fuera del bucle correcto',
      ],
      practice: [
        'Implementa búsqueda con while-else',
        'Construye un menú interactivo con while True',
      ],
    },
  },
};

export default overlay;
