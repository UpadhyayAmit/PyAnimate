import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implementa FizzBuzz del 1 al 30. Extiéndelo: añade \'Bazz\' para múltiplos de 7.',
  hint: 'Comprueba 3 y 5 juntos primero (FizzBuzz), luego individualmente. Añade el caso 7 igual.',
  explanation: {
    simple: {
      overview: 'Para cada número del 1 al 100: imprime "Fizz" si es divisible por 3, "Buzz" si por 5, "FizzBuzz" si por ambos, sino el número.',
      analogy: 'Como una canción con reglas: cada tercer beat dices "Fizz", cada quinto "Buzz", y si coinciden ambos dices "FizzBuzz".',
      steps: [
        'Itera del 1 al 100 con range(1, 101)',
        'Comprueba divisible por 15 PRIMERO (FizzBuzz)',
        'Luego comprueba divisible por 3 (Fizz)',
        'Luego comprueba divisible por 5 (Buzz)',
        'Sino imprime el número',
      ],
      visual: `1 → 1,  2 → 2,  3 → Fizz
4 → 4, 5 → Buzz, 15 → FizzBuzz`,
      commonMistakes: [
        'Comprobar 3 y 5 antes de 15 — pierde los casos FizzBuzz',
        'Usar división en lugar de módulo',
      ],
      practice: [
        'Generaliza FizzBuzz para cualquier conjunto de divisores',
        'Devuelve los resultados en una lista en lugar de imprimir',
      ],
      timeComplexity: 'O(n) — se procesa cada número una vez',
      spaceComplexity: 'O(1) — sin almacenamiento extra'
    },
    deepDive: {
      overview: 'FizzBuzz tiene múltiples soluciones elegantes: construcción de cadenas, diccionarios y generadores.',
      steps: [
        'Solución de concatenación: result=""; if n%3: result+="Fizz"...',
        'Solución de dict: {3:"Fizz",5:"Buzz"} luego join',
        'Generador para FizzBuzz perezoso de rango infinito',
        'Evita if-elif encadenado para extensibilidad',
      ],
      commonMistakes: [
        'Código no extensible cuando se añaden nuevos divisores',
        'Olvidar el caso donde no hay coincidencia → str(n)',
      ],
      practice: [
        'Implementa FizzBuzz con dict de reglas extensible',
        'Genera FizzBuzz infinito con generador',
      ],
    },
  },
};

export default overlay;
