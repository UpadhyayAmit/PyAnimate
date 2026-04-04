import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Tri topologique de: 5→2, 5→0, 4→0, 4→1, 2→3, 3→1.',
  hint: 'Algorithme de Kahn: calculez les degrés internes, mettez en file les nœuds à degré 0.',
  explanation: {
    simple: {
      overview: 'Le tri topologique ordonne linéairement les nœuds d\'un DAG de sorte que chaque arête va d\'un nœud antérieur à un nœud postérieur.',
      analogy: 'Comme planifier des tâches avec des dépendances — tu dois terminer les prérequis avant d\'avancer.',
      steps: [
        'Calcule le degré entrant de chaque nœud',
        'Ajoute tous les nœuds avec degré entrant 0 à une file',
        'Retire un nœud, ajoute à l\'ordre, réduit le degré des voisins',
        'Si un voisin atteint le degré 0, ajoute-le à la file',
      ],
      visual: `A→C, B→C, C→D
Degrés: A=0,B=0,C=2,D=1
File:[A,B]→traite A→C=1
File:[B]→traite B→C=0→[C]→D`,
      commonMistakes: [
        'Appliquer à des graphes avec des cycles (pas un DAG)',
        'Oublier de gérer les nœuds déconnectés',
      ],
      practice: [
        'Tri topologique du planning de cours',
        'Détecte les cycles en vérifiant si tous les nœuds ont été traités',
      ],
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'L\'algorithme de Kahn (BFS) et le DFS (ordre de fin inverse) donnent tous deux un tri topologique valide ; Kahn détecte aussi les cycles.',
      steps: [
        'L\'algorithme de Kahn : BFS basé sur les degrés entrants',
        'DFS : empile les nœuds dans l\'ordre post-ordre inverse',
        'Détection de cycle : si les nœuds traités < V, il y a un cycle',
        'Tous les tris topologiques valides existent si plusieurs ordres sont possibles',
      ],
      commonMistakes: [
        'Utiliser le tri topologique sur des graphes non dirigés',
        'Confondre le tri topologique avec le BFS/DFS ordinaire',
      ],
      practice: [
        'Implémente les deux approches (Kahn et DFS)',
        'Résous le planning de cours avec détection des prérequis cycliques',
      ],
    },
  },
};

export default overlay;
