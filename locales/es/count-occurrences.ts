import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Cuenta cuántas veces aparece cada palabra en \'the cat sat on the mat the cat\'.',
  hint: 'Usa un diccionario: d[w] = d.get(w, 0) + 1 para cada palabra.',
  explanation: {
    simple: {
      overview: 'Contar cuántas veces aparece cada elemento en una colección. Usa un diccionario o Counter para rastrear las frecuencias.',
      analogy: 'Como clasificar una baraja de cartas: creas una pila por palo y cuentas cada pila.',
      steps: [
        'Crea un diccionario vacío o usa Counter',
        'Itera sobre la colección',
        'Para cada elemento, incrementa su contador',
        'Devuelve el diccionario de frecuencias',
      ],
      visual: `nums = [1,2,2,3,3,3]
conteo = {}
for n in nums:
    conteo[n] = conteo.get(n, 0) + 1
# {1:1, 2:2, 3:3}`,
      commonMistakes: [
        'Usar lista en lugar de dict → O(n²)',
        'Olvidar inicializar conteos a 0',
      ],
      practice: [
        'Encuentra el carácter más frecuente en una cadena',
        'Cuenta palabras en una frase',
      ],
      timeComplexity: 'O(n) — se visita cada elemento una vez',
      spaceComplexity: 'O(k) — k es el número de elementos únicos'
    },
    deepDive: {
      overview: 'collections.Counter extiende dict con métodos most_common(), elements() y aritmética de contadores.',
      steps: [
        'Counter(iterable) construye frecuencias en O(n)',
        'most_common(k) devuelve los k más frecuentes en O(n log k)',
        'La resta de contadores elimina elementos con conteo ≤ 0',
        'defaultdict(int) es alternativa a .get(k, 0) + 1',
      ],
      commonMistakes: [
        'Usar Counter.update() en bucle en lugar de Counter(iterable)',
        'Olvidar que los conteos de Counter pueden ser negativos',
      ],
      practice: [
        'Usa Counter para encontrar anagrama más frecuente',
        'Implementa conteo de palabras con defaultdict',
      ],
    },
  },
};

export default overlay;
