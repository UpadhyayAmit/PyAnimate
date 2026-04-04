import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Aplica Floyd-Warshall a: [[0,3,∞,7],[8,0,2,∞],[5,∞,0,1],[2,∞,∞,0]].',
  hint: 'Tres bucles anidados: k (nodo relay), i (fuente), j (destino). Actualiza si dist[i][k]+dist[k][j] < dist[i][j].',
  explanation: {
    simple: {
      overview: 'Floyd-Warshall calcula los caminos más cortos entre todos los pares de vértices en un grafo ponderado.',
      analogy: 'Como calcular los precios de vuelo entre todas las ciudades: probar si hace escala en cada ciudad intermedia da un precio más barato.',
      steps: [
        'Inicializa dist[i][j] con pesos directos, 0 en diagonal, ∞ si no hay arista',
        'Para cada vértice intermedio k:',
        'Para cada par (i,j): dist[i][j] = min(dist[i][j], dist[i][k]+dist[k][j])',
        'Después de V iteraciones, dist[i][j] es el camino más corto',
      ],
      visual: `for k in range(V):
  for i in range(V):
    for j in range(V):
      dist[i][j] = min(dist[i][j], dist[i][k]+dist[k][j])`,
      commonMistakes: [
        'Poner el bucle k dentro en lugar de afuera → resultados incorrectos',
        'Olvidar que dist[i][i] < 0 indica ciclo negativo',
      ],
      practice: [
        'Encuentra todos los pares de caminos más cortos en un grafo pequeño',
        'Detecta ciclos negativos comprobando la diagonal',
      ],
      timeComplexity: 'O(V³) — tres bucles anidados sobre vértices',
      spaceComplexity: 'O(V²) — para la matriz de distancias'
    },
    deepDive: {
      overview: 'Floyd-Warshall es DP con dimensión de estado k; la transitividad (cierre transitivo) usa OR en lugar de min+.',
      steps: [
        'El bucle k DEBE ser el más externo — represent intermediary node set {0..k}',
        'Cierre transitivo: reemplaza min con OR, + con AND',
        'Camino minimax: reemplaza + con max, min sigue siendo min',
        'Reconstrucción de camino: almacena next[i][j] durante la actualización',
      ],
      commonMistakes: [
        'Reordenar los bucles → rompe la invariante DP',
        'No copiar la matriz inicial antes de modificarla in-place',
      ],
      practice: [
        'Implementa cierre transitivo con Floyd-Warshall',
        'Añade reconstrucción de camino con matriz next[][]',
      ],
    },
  },
};

export default overlay;
