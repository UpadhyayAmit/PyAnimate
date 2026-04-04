import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Encuentra MST de aristas: (A-B,4), (A-C,2), (B-C,1), (B-D,5), (C-D,8).',
  hint: 'Ordena aristas por peso. Usa Union-Find para detectar ciclos. Añade greedily las que no formen ciclos.',
  explanation: {
    simple: {
      overview: 'El algoritmo de Kruskal construye el árbol de expansión mínima (MST) añadiendo repetidamente la arista más barata que no forma un ciclo.',
      analogy: 'Como conectar ciudades con el menor costo de carreteras: siempre construyes la carretera más barata que conecta dos ciudades no conectadas aún.',
      steps: [
        'Ordena todas las aristas por peso ascendente',
        'Inicializa Union-Find para cada vértice',
        'Para cada arista (u, v, w) en orden:',
        'Si u y v están en componentes distintos: añade la arista al MST y únelos',
        'Para cuando el MST tenga V-1 aristas',
      ],
      visual: `Aristas ordenadas: (1,2,1),(3,4,2),(1,3,3)...
Añade (1,2,1) → no ciclo ✓
Añade (3,4,2) → no ciclo ✓
Añade (1,3,3) → no ciclo ✓`,
      commonMistakes: [
        'No usar Union-Find → ciclos de detección O(V) en lugar de O(α(V))',
        'Confundir MST (árbol de expansión mínima) con camino más corto',
      ],
      practice: [
        'Implementa Kruskal con Union-Find de compresión de ruta',
        'Compara con el algoritmo de Prim para grafos densos vs escasos',
      ],
      timeComplexity: 'O(E log E) — dominado por la ordenación',
      spaceComplexity: 'O(V) — para Union-Find'
    },
    deepDive: {
      overview: 'Kruskal con Union-Find compresión de ruta + unión por rango da O(E log E) práctico; Prim con heap es mejor para grafos densos.',
      steps: [
        'Union-Find: compresión de ruta hace find() casi O(1) amortizado O(α(n))',
        'Unión por rango: mantiene los árboles planos para evitar cadenas',
        'Kruskal vs Prim: Kruskal mejor E << V², Prim mejor E ≈ V²',
        'MST de Borůvka: O(E log V) fácilmente paralelizable',
      ],
      commonMistakes: [
        'Compresión de ruta sin unión por rango puede degradar el rendimiento',
        'Olvidar que el MST no es único si hay pesos de aristas iguales',
      ],
      practice: [
        'Implementa Union-Find completo con compresión de ruta + unión por rango',
        'Prueba Kruskal en grafos densos y compara con Prim',
      ],
    },
  },
};

export default overlay;
