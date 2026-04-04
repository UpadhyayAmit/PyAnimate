import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Búsqueda en profundidad (DFS)',
  hint: 'Explora el grafo en profundidad con pila o recursión.',
  approach: 'Explora desde el nodo inicial, siguiendo recursivamente cada camino hasta el final antes de retroceder.',
  useCases: [
    'Resolver laberintos y encontrar caminos',
    'Orden topológico y detección de ciclos',
    'Componentes fuertemente conexos',
  ],
  explanation: {
    simple: {
      overview: 'La búsqueda en profundidad (DFS) explora tan lejos como sea posible por cada rama antes de retroceder.',
      analogy: 'Como explorar un laberinto: vas hacia adelante sin parar hasta un callejón sin salida, luego retrocedes y pruebas otro camino.',
      steps: [
        'Comienza en el nodo de inicio (o primer nodo)',
        'Marca el nodo actual como visitado',
        'Visita recursivamente cada vecino no visitado',
        'Retrocede cuando no hay vecinos no visitados',
      ],
      visual: `    1
   / \\
  2   3
 / \\
4   5
DFS: 1→2→4→5→3`,
      commonMistakes: [
        'No rastrear los nodos visitados → ciclos infinitos',
        'Confundir el orden de visita pre/in/post-orden',
      ],
      practice: [
        'Detecta ciclos en un grafo dirigido con DFS',
        'Encuentra todos los caminos entre dos nodos',
      ],
      timeComplexity: 'O(V+E) — cada vértice y arista se visita una vez',
      spaceComplexity: 'O(V) — para la pila de recursión o pila explícita'
    },
    deepDive: {
      overview: 'DFS produce timestamps de descubrimiento/finalización; el postorden da ordenación topológica; Tarjan SCC usa DFS.',
      steps: [
        'DFS iterativo: usa pila explícita para evitar límites de recursión',
        'Timestamps: disc[] y fin[] para clasificar aristas (árbol, hacia atrás, adelante, cruzada)',
        'Ordenación topológica: postorden DFS invertido en grafo acíclico dirigido',
        'Tarjan SCC: un DFS con pila para encontrar componentes fuertemente conexas',
      ],
      commonMistakes: [
        'DFS iterativo no produce el mismo orden que DFS recursivo sin cuidado',
        'Olvidar que DFS puede no encontrar el camino más corto',
      ],
      practice: [
        'Implementa DFS iterativo con pila explícita',
        'Implementa el algoritmo de Tarjan para SCCs',
      ],
    },
  },
};

export default overlay;
