import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Construye un árbol de segmentos para [1,3,5,7,9,11]. Consulta suma del índice 1-3, actualiza índice 2 a 10.',
  hint: 'Construir bottom-up. Las consultas dividen el rango recursivamente. Las actualizaciones se propagan hacia arriba.',
  explanation: {
    simple: {
      overview: 'Un árbol de segmentos permite consultas de rango (suma, mínimo, máximo) y actualizaciones de puntos en O(log n).',
      analogy: 'Como un árbol de empresa: el CEO (raíz) conoce el total de la empresa, cada gerente conoce el total de su departamento — actualizar un empleado actualiza hacia arriba.',
      steps: [
        'Construye árbol: cada nodo almacena el agregado de su rango',
        'La raíz cubre [0,n-1]; los hijos cubren mitad izquierda y derecha',
        'Actualizar posición i: actualiza el camino desde la hoja a la raíz',
        'Consultar rango [l,r]: combina nodos que cubren exactamente el rango',
      ],
      visual: `[1,3,5,7,9,11]
Raíz: suma[0..5]=36
 Izq: suma[0..2]=9, Der: suma[3..5]=27`,
      commonMistakes: [
        'Tamaño del array del árbol: necesitas 4n, no 2n',
        'Lógica de consulta de rango incorrecta — manejar l>r correctamente',
      ],
      practice: [
        'Implementa árbol de segmentos de suma con actualización puntual',
        'Extiende a consultas de rango mínimo',
      ],
      timeComplexity: 'O(n) construcción, O(log n) consulta y actualización',
      spaceComplexity: 'O(n) — el árbol tiene 4n nodos'
    },
    deepDive: {
      overview: 'La propagación perezosa da O(log n) para actualizaciones de rango; el árbol de segmentos persistente preserva versiones históricas.',
      steps: [
        'Propagación perezosa: almacena actualizaciones pendientes, empuja hacia abajo solo cuando se accede',
        'Árbol de segmentos persistente: crea nuevos nodos en cada actualización, O(log n) nuevos nodos',
        'Árbol de Fenwick (BIT): más simple para suma de prefijo pura, O(log n) en tiempo/espacio',
        'Árbol de segmentos 2D: para consultas de rango en matrices',
      ],
      commonMistakes: [
        'Olvidar empujar hacia abajo el lazy tag antes de manipular hijos',
        'Usar Fenwick cuando se necesita rango arbitrario (no solo prefijo)',
      ],
      practice: [
        'Implementa árbol de segmentos con propagación perezosa para suma de rango',
        'Compara árbol de Fenwick vs árbol de segmentos para suma de prefijo',
      ],
    },
  },
};

export default overlay;
