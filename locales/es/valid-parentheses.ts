import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Verifica si \'({[]})\' y \'([)]\' son válidos. Luego maneja el caso \'(((\'.',
  hint: 'Apila los paréntesis de apertura. Cuando viene uno de cierre, desapila y verifica coincidencia.',
  explanation: {
    simple: {
      overview: 'Comprueba si una cadena de paréntesis, corchetes y llaves está correctamente balanceada usando una pila.',
      analogy: 'Como verificar que todas las puertas abiertas se cierran: cada vez que abres una, la añades a la pila; al cerrar, compruebas que coincide con la última abierta.',
      steps: [
        'Itera cada carácter en la cadena',
        'Si es de apertura (([{): empuja a la pila',
        'Si es de cierre: comprueba que coincide con el tope de la pila',
        'Al final, la pila debe estar vacía',
      ],
      visual: `"({[]})" → pila: ( → ({
→ ({[ → ({  → (  → vacía → True
"([)]" → ( → ([ → ) ≠ [ → False`,
      commonMistakes: [
        'Olvidar comprobar si la pila está vacía antes de hacer pop',
        'No verificar que la pila esté vacía al final',
      ],
      practice: [
        'Extiende para contar paréntesis inválidos que deben eliminarse',
        'Encuentra la longitud de la subcadena de paréntesis válida más larga',
      ],
      timeComplexity: 'O(n) — se procesa cada carácter una vez',
      spaceComplexity: 'O(n) — en el peor caso la pila tiene todos los aperturas'
    },
    deepDive: {
      overview: 'La validación con pila se generaliza a cualquier estructura anidada; la longitud del paréntesis válido más largo usa pila de índices.',
      steps: [
        'Optimización: usa dict {")":"(","]":"[","}":"{"} para emparejamiento',
        'Las cartas sueltas (wild cards) convierten este problema en más complejo',
        'Pila de índices para subcadena válida más larga: rastrea índices de cierre inválidos',
        'Generación: genera todas las combinaciones válidas con backtracking',
      ],
      commonMistakes: [
        'Confundir isEmpty vs tamaño de pila para el chequeo final',
        'No manejar cadenas con solo aperturas o solo cierres',
      ],
      practice: [
        'Implementa validación de paréntesis con comodines (*)',
        'Genera todas las combinaciones válidas de n pares',
      ],
    },
  },
};

export default overlay;
