import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Orden topológico de: 5→2, 5→0, 4→0, 4→1, 2→3, 3→1.',
  hint: 'Algoritmo de Kahn: calcula grados de entrada, encola nodos con grado 0, procesa la cola.',
  explanation: {
    simple: {
      overview: 'El ordenamiento topológico ordena los vértices de un DAG de modo que para cada arista u→v, u aparece antes que v.',
      analogy: 'Como ordenar tareas con dependencias: necesitas completar los prerrequisitos antes del curso principal — el orden topológico da una secuencia válida.',
      steps: [
        'Método 1 (Kahn): calcula in-degree de cada nodo',
        'Añade nodos con in-degree 0 a la cola',
        'Procesa: quita de la cola, reduce in-degree de vecinos',
        'Los nuevos in-degree 0 entran a la cola',
        'Método 2: DFS con postorden invertido',
      ],
      visual: `A→C, B→C, C→D
In-degree: A=0,B=0,C=2,D=1
Kahn: A,B → C → D`,
      commonMistakes: [
        'Intentar ordenar un grafo con ciclos → imposible',
        'Olvidar comprobar si todos los vértices fueron procesados (detecta ciclos)',
      ],
      practice: [
        'Implementa ambos métodos: Kahn y DFS',
        'Detecta si un plan de cursos tiene un ciclo',
      ],
      timeComplexity: 'O(V+E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'Kahn detecta ciclos contando si todos V nodos son procesados; DFS usa tiempos de finalización; el camino crítico usa DP sobre el orden topológico.',
      steps: [
        'Si Kahn procesa < V nodos → ciclo detectado',
        'DFS postorden: guarda en pila al finalizar cada nodo, invierte al final',
        'Camino crítico: DP en el orden topológico da el tiempo de finalización más tardío',
        'Componentes fuertemente conexas (SCCs): algoritmo de Kosaraju usa 2 DFS',
      ],
      commonMistakes: [
        'DFS topológico no detecta ciclos explícitamente — añade marcas grises',
        'Confundir topológico (DAG) con orden lineal en grafos generales',
      ],
      practice: [
        'Implementa detección de ciclo en el método de Kahn',
        'Calcula el camino crítico en un grafo de proyecto',
      ],
    },
  },
};

export default overlay;
