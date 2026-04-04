import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Búsqueda en anchura (BFS)',
  hint: 'Explora el grafo nivel a nivel usando una cola.',
  approach: 'Inserta el nodo inicial en la cola. Saca un nodo, añade vecinos no visitados a la cola.',
  useCases: [
    'Camino más corto en grafo sin pesos',
    'Grados de separación en redes sociales',
    'Descubrimiento de páginas en web crawler',
  ],
  explanation: {
    simple: {
      overview: 'La búsqueda en anchura (BFS) explora un grafo nivel por nivel, visitando todos los vecinos de un nodo antes de avanzar al siguiente nivel.',
      analogy: 'Como las ondas en el agua: cuando tiras una piedra, las ondas se expanden en círculos concéntricos, tocando cada punto a su distancia mínima.',
      steps: [
        'Añade el nodo de inicio a una cola',
        'Mientras la cola no esté vacía: saca el frente',
        'Visita todos sus vecinos no visitados y los añade a la cola',
        'Marca los nodos como visitados para evitar repeticiones',
      ],
      visual: `    1
   / \\
  2   3
 / \\
4   5
BFS: 1 → 2 3 → 4 5`,
      commonMistakes: [
        'No marcar los nodos como visitados → bucle infinito',
        'Usar pila en lugar de cola → se convierte en DFS',
      ],
      practice: [
        'Encuentra el camino más corto en un laberinto',
        'Comprueba si un grafo es bipartito con BFS',
      ],
      timeComplexity: 'O(V+E) — vertices más aristas',
      spaceComplexity: 'O(V) — para la cola y el conjunto visitado'
    },
    deepDive: {
      overview: 'BFS garantiza caminos más cortos en grafos no ponderados; 0-1 BFS con deque extiende esto para grafos de peso 0/1.',
      steps: [
        'BFS en árbol = recorrido por niveles',
        'BFS bidireccional: busca desde origen y destino simultáneamente — O(b^(d/2)) vs O(b^d)',
        '0-1 BFS: usa deque, appendleft para peso 0, append para peso 1',
        'Prueba bipartita: colorea con 2 colores durante BFS',
      ],
      commonMistakes: [
        'Olvidar inicializar el diccionario de distancias',
        'No manejar grafos desconectados (múltiples componentes)',
      ],
      practice: [
        'Implementa BFS bidireccional para grafos grandes',
        'Usa 0-1 BFS para el problema de la matriz de obstáculos',
      ],
    },
  },
};

export default overlay;
