import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Construye un Trie de [\'apple\',\'app\',\'apt\',\'banana\']. Implementa search(\'app\') y startsWith(\'ap\').',
  hint: 'Cada nodo es un dict de hijos + bandera is_end. Insertar recorre carácter a carácter.',
  explanation: {
    simple: {
      overview: 'Un Trie (árbol de prefijos) almacena cadenas de forma que las palabras con prefijos comunes comparten nodos. Búsqueda e inserción en O(k) donde k es la longitud de la palabra.',
      analogy: 'Como un diccionario organizado por prefijos: "ba" lleva a "ball", "bat", "bar" — comparten la rama "ba".',
      steps: [
        'Nodo raíz vacío; cada nodo tiene un mapa hijo de caracteres',
        'Insertar: recorre cada carácter; crea nodos si no existen; marca el final de palabra',
        'Buscar: recorre cada carácter; devuelve False si falta algún nodo',
        'Prefijo: igual que buscar pero sin comprobar el marcador de fin de palabra',
      ],
      visual: `Insertar "cat","car","dog":
  root
  ├─c─a─t(fin)
  │   └─r(fin)
  └─d─o─g(fin)`,
      commonMistakes: [
        'Olvidar el marcador is_end para distinguir prefijo de palabra completa',
        'No manejar caracteres unicode (tamaño de alfabeto > 26)',
      ],
      practice: [
        'Implementa autocompletado con Trie',
        'Implementa búsqueda de palabras con comodines',
      ],
      timeComplexity: 'O(k) inserción y búsqueda (k = longitud de clave)',
      spaceComplexity: 'O(ALPHABET × N × k) en el peor caso'
    },
    deepDive: {
      overview: 'El Trie XOR resuelve la suma XOR máxima; Aho-Corasick añade enlaces de fallo para búsqueda multi-patrón; el trie comprimido (Patricia) fusiona caminos únicos.',
      steps: [
        'Aho-Corasick: trie + BFS para construir enlaces de fallo → O(n+m+z) multi-patrón',
        'Trie XOR: cada nodo es bit 0 o 1; para cada número, maximiza XOR eligiendo el bit opuesto',
        'Trie radix (Patricia): comprime caminos de longitud 1 → reduce nodos para alfabeto escaso',
        'Ukkonen: trie de sufijos O(n) en tiempo y espacio',
      ],
      commonMistakes: [
        'Construir Aho-Corasick sin los enlaces de fallo → pierde coincidencias',
        'Confundir trie de sufijos (caros) con árbol de sufijos simples',
      ],
      practice: [
        'Implementa Trie XOR para suma XOR máxima de par',
        'Implementa Aho-Corasick básico para múltiples patrones',
      ],
    },
  },
};

export default overlay;
