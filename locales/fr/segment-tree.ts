import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Construisez un arbre de segments pour [1,3,5,7,9,11]. Interrogez la somme des indices 1-3.',
  hint: 'Construire bottom-up. Requêtes par division récursive de la plage. Màj se propage vers le haut.',
  explanation: {
    simple: {
      overview: 'Un arbre de segments est une structure de donnée qui permet des requêtes de plage et des mises à jour en O(log n).',
      analogy: 'Comme diviser le pays en régions, puis sous-régions — les requêtes sur une province combinent de petites régions connues.',
      steps: [
        'Construis l\'arbre en divisant récursivement en deux',
        'Chaque nœud stocke la somme/min/max de sa plage',
        'Pour les requêtes : combine les nœuds qui couvrent la plage demandée',
        'Pour les mises à jour : met à jour le nœud feuille et remonte',
      ],
      visual: `[1,3,5,7,9,11]
Racine=36
├─ [1,3,5,7]=16
│  ├─ [1,3]=4
│  └─ [5,7]=12
└─ [9,11]=20`,
      commonMistakes: [
        'Indexation incorrecte (basée sur 0 vs 1)',
        'Oublier la propagation vers le haut après la mise à jour',
      ],
      practice: [
        'Implémente les requêtes de somme de plage et les mises à jour ponctuelles',
        'Étends pour les requêtes de minimum de plage',
      ],
      timeComplexity: 'O(log n) par requête/mise à jour',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Les arbres de segments avec propagation paresseuse gèrent les mises à jour de plage en O(log n) ; les arbres de Fenwick (BIT) sont plus simples pour les sommes préfixées.',
      steps: [
        'Propagation paresseuse : diffère les mises à jour avec des tags paresseux',
        'Arbre de Fenwick (BIT) : plus simple pour les sommes préfixées, O(log n)',
        'Arbre de segments persistant : copie partielle pour les requêtes de version',
        'Merge sort tree : requêtes de classement sur des plages',
      ],
      commonMistakes: [
        'Confondre les arbres de Fenwick et les arbres de segments',
        'Propager les tags paresseux incorrectement',
      ],
      practice: [
        'Implémente les mises à jour de plage avec la propagation paresseuse',
        'Compare l\'arbre de Fenwick pour les sommes préfixées simples',
      ],
    },
  },
};

export default overlay;
