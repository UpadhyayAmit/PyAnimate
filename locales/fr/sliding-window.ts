import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Trouvez le sous-tableau de somme maximale de taille k=3 dans [2, 1, 5, 1, 3, 2].',
  hint: 'Calculez la première somme de fenêtre, puis glissez: soustrayez le sortant, ajoutez l\'entrant.',
  explanation: {
    simple: {
      overview: 'La technique de fenêtre glissante maintient une sous-séquence contiguë d\'un tableau et la fait glisser pour résoudre des problèmes en O(n).',
      analogy: 'Comme regarder par un cadre de fenêtre fixe qui glisse le long d\'un panorama.',
      steps: [
        'Définis la taille de la fenêtre ou la condition',
        'Initialise les résultats avec la première fenêtre',
        'Fais glisser : ajoute le nouvel élément, retire l\'ancien',
        'Mets à jour le résultat optimal',
      ],
      visual: `nums=[2,1,5,1,3,2], k=3
[2,1,5]=8 → [1,5,1]=7 → [5,1,3]=9 → [1,3,2]=6
max=9`,
      commonMistakes: [
        'Recalculer toute la fenêtre à chaque étape (O(n²))',
        'Conditions d\'extension/contraction de fenêtre incorrectes',
      ],
      practice: [
        'Trouve la sous-séquence de longueur k avec la somme maximale',
        'Trouve la plus longue sous-chaîne sans caractères répétés',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1) ou O(k)'
    },
    deepDive: {
      overview: 'Les fenêtres glissantes de taille variable utilisent deux pointeurs ; les fenêtres fixes utilisent une déduction de somme. Les deques permettent les maximums de fenêtre en O(1).',
      steps: [
        'Fenêtre fixe : somme_fenêtre += new; somme_fenêtre -= old',
        'Fenêtre variable : expand droite jusqu\'à valide ; contraction gauche',
        'Maximum de fenêtre glissante : collections.deque queue monotone',
        'Minimum de fenêtre : deux pointeurs + dict de fréquences',
      ],
      commonMistakes: [
        'Confondre la taille de la fenêtre fixe et variable',
        'Ne pas utiliser la deque pour les problèmes de max de fenêtre glissante',
      ],
      practice: [
        'Implémente le maximum de fenêtre glissante avec une deque',
        'Résous la sous-chaîne minimale contenant tous les caractères',
      ],
    },
  },
};

export default overlay;
