import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Utilisez des boucles imbriquées pour afficher une table de multiplication (1–5) en grille.',
  hint: 'Boucle externe pour les lignes, interne pour les colonnes. Utilisez print(end=\'\\t\').',
  explanation: {
    simple: {
      overview: 'L\'exploration de boucles consiste à itérer à travers des structures de données avec différentes conditions et contrôles.',
      analogy: 'Comme explorer une ville avec une carte — tu peux sauter des rues, rebrousser chemin ou t\'arrêter quand tu trouves ce que tu cherches.',
      steps: [
        'Utilise for pour des itérations à nombre fixe',
        'Utilise while pour des conditions dynamiques',
        'Utilise break pour sortir tôt',
        'Utilise continue pour sauter des éléments',
      ],
      visual: `for i in range(10):
    if i % 2 == 0:
        continue  # saute les pairs
    if i > 7:
        break     # arrête à 7
    print(i)  # 1 3 5 7`,
      commonMistakes: [
        'Confusion entre break et continue',
        'Boucles infinies dues à l\'oubli de la mise à jour de la condition',
      ],
      practice: [
        'Trouve le premier premier dans une plage',
        'Implémente FizzBuzz en utilisant continue',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Les boucles Python supportent else, enumerate(), zip() et des compréhensions pour des patterns d\'itération expressifs.',
      steps: [
        'for-else/while-else s\'exécute quand aucun break ne se produit',
        'enumerate(lst, start=1) pour les indices basés sur 1',
        'any()/all() pour les tests booléens sur des itérables',
        'itertools.islice() pour les tranchées paresseuses',
      ],
      commonMistakes: [
        'Penser que for-else est lié aux conditionnels if-else',
        'Ignorer les outils itertools pour des patterns de boucle complexes',
      ],
      practice: [
        'Utilise for-else pour implémenter la recherche linéaire',
        'Explore itertools.chain() pour itérer sur plusieurs listes',
      ],
    },
  },
};

export default overlay;
