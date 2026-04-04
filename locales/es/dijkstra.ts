import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Algoritmo de Dijkstra',
  hint: 'Caminos más cortos en grafos con pesos no negativos.',
  approach: 'Procesa el nodo con menor distancia de la cola de prioridad, actualiza distancias de vecinos.',
  useCases: [
    'Navegación GPS y búsqueda de ruta más corta',
    'Protocolos de enrutamiento de red (OSPF)',
    'Pathfinding en IA de juegos',
  ],
  explanation: {
    simple: {
      overview: 'El algoritmo de Dijkstra encuentra el camino más corto desde un nodo de origen a todos los demás en grafos con pesos no negativos.',
      analogy: 'Como navegar en GPS: siempre expandes el destino alcanzable más barato siguiente, hasta haber encontrado el camino más corto a todo.',
      steps: [
        'Inicializa distancias: origen=0, todos los demás=∞',
        'Usa una cola de prioridad (min-heap)',
        'Extrae el nodo con distancia mínima',
        'Actualiza vecinos si se encuentra un camino más corto',
        'Repite hasta que todos los nodos estén procesados',
      ],
      visual: `A→B(1), A→C(4), B→C(2)
Dijkstra desde A:
dist[A]=0, dist[B]=1, dist[C]=3`,
      commonMistakes: [
        'Usar con pesos negativos → resultados incorrectos (usa Bellman-Ford)',
        'No actualizar el heap cuando se encuentra un camino más corto',
      ],
      practice: [
        'Encuentra el camino más corto en un mapa de ciudad',
        'Implementa con reconstrucción del camino usando el array de previo',
      ],
      timeComplexity: 'O((V+E) log V) con heap binario',
      spaceComplexity: 'O(V) para el heap y el array de distancias'
    },
    deepDive: {
      overview: 'Dijkstra es codicioso usando la propiedad de corte; las variantes A* y bidireccional lo hacen más eficiente en la práctica.',
      steps: [
        'La actualización perezosa del heap: inserta duplicados y omite si ya está relajado',
        'La implementación de heap de Fibonacci da O(E + V log V) teórico',
        'A*: añade heurística h(v) para guiar hacia el objetivo',
        'Dijkstra bidireccional: busca desde origen y destino simultáneamente',
      ],
      commonMistakes: [
        'No saber que Dijkstra falla con aristas de peso negativo',
        'Olvidar el conjunto de nodos finalizados — puede reprocesar nodos',
      ],
      practice: [
        'Implementa Dijkstra con reconstrucción de camino',
        'Extiende a A* con heurística de distancia Manhattan',
      ],
    },
  },
};

export default overlay;
