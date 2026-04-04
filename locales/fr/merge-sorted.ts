import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Fusionnez [1,3,5,7] et [2,4,6,8] en un tableau trié sans sort().',
  hint: 'Utilisez deux pointeurs. Comparez, ajoutez le plus petit, avancez ce pointeur.',
  explanation: {
    simple: {
      overview: 'Fusionner deux listes triées produit une seule liste triée en comparant les éléments depuis le début de chaque liste.',
      analogy: 'Comme fusionner deux files de personnes ordonnées — tu choisis toujours de prendre la personne la plus petite en tête.',
      steps: [
        'Utilise deux pointeurs, un par liste',
        'Compare les éléments actuels ; ajoute le plus petit',
        'Avance le pointeur de la liste dont l\'élément a été pris',
        'Ajoute les éléments restants quand une liste est épuisée',
      ],
      visual: `A=[1,3,5]  B=[2,4,6]
i=0,j=0 → prend 1
i=1,j=0 → prend 2
→ [1,2,3,4,5,6]`,
      commonMistakes: [
        'Oublier d\'ajouter les éléments restants de la liste non épuisée',
        'Conditions de comparaison incorrectes',
      ],
      practice: [
        'Fusionne deux listes de contacts triées',
        'Fusionne k listes triées en utilisant un tas',
      ],
      timeComplexity: 'O(n + m)',
      spaceComplexity: 'O(n + m)'
    },
    deepDive: {
      overview: 'heapq.merge() fusionne paresseusement des itérables triés en O(n log k) pour k voies ; utile pour le tri externe.',
      steps: [
        'Fusion à deux voies : O(n+m) avec deux pointeurs',
        'Fusion à k voies : O(n log k) avec un tas min',
        'heapq.merge() est paresseux — bon pour de grands ensembles de données',
        'La fusion en place est possible mais complexe',
      ],
      commonMistakes: [
        'Créer de nouvelles listes là où la fusion en place suffit',
        'Ne pas utiliser heapq.merge() pour la fusion à k voies',
      ],
      practice: [
        'Implémente la fusion à k voies avec heapq',
        'Utilise heapq.merge() pour fusionner des fichiers journaux triés',
      ],
    },
  },
};

export default overlay;
