import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Recorre una lista de frutas e imprime cada una con su índice usando enumerate().',
  hint: 'enumerate(lista) da pares (índice, valor). Desempaquétalos en el for.',
  explanation: {
    simple: {
      overview: 'Un bucle for itera sobre una secuencia (lista, cadena, rango) y ejecuta código para cada elemento.',
      analogy: 'Como leer páginas de un libro — procesas cada una en orden hasta terminar.',
      steps: [
        'Escribe for elemento in secuencia:',
        'elem toma cada valor de la secuencia',
        'El bloque se ejecuta una vez por elemento',
        'range() genera secuencias de números',
      ],
      visual: `for i in range(5):
    print(i)
# 0 1 2 3 4

for ch in "Hola":
    print(ch)`,
      commonMistakes: [
        'Modificar la lista mientras se itera sobre ella',
        'Confundir range(5) → 0-4 vs range(1,6) → 1-5',
        'Lógica de índice fuera de rango con range(len())',
      ],
      practice: [
        'Suma todos los elementos de una lista',
        'Imprime una tabla de multiplicar con for anidado',
      ],
    },
    deepDive: {
      overview: 'Los bucles for de Python usan el protocolo iterador; enumerate(), zip() y comprensiones de lista extienden su potencia.',
      steps: [
        'enumerate() da índice y valor juntos',
        'zip() itera sobre múltiples iterables en paralelo',
        'Las comprensiones de lista son bucles for inline',
        'iter() y next() para control manual del iterador',
      ],
      commonMistakes: [
        'Reinventar enumerate() con for i in range(len(lst))',
        'Fugas de variable del bucle (elem existe después del for)',
      ],
      practice: [
        'Reescribe bucles con comprensiones de lista',
        'Usa zip() para iterar dos listas juntas',
      ],
    },
  },
};

export default overlay;
