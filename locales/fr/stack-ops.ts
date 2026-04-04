import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implémentez une pile avec une liste. Ajoutez push, pop, peek, is_empty. Utilisez pour brackets.',
  hint: 'Push les ouvrants, pop+match les fermants. Retournez False si vide ou non-concordance.',
  explanation: {
    simple: {
      overview: 'Une pile est une structure de données LIFO (Dernier Entré, Premier Sorti). Les éléments sont empilés ou dépilés depuis le sommet.',
      analogy: 'Comme une pile d\'assiettes — tu poses et prends toujours depuis le dessus.',
      steps: [
        'Push : ajoute un élément au sommet',
        'Pop : retire l\'élément du sommet',
        'Peek/Top : regarde le sommet sans retirer',
        'isEmpty : vérifie si la pile est vide',
      ],
      visual: `pile = []
pile.append(1)  # [1]
pile.append(2)  # [1,2]
pile.pop()      # retourne 2, pile=[1]`,
      commonMistakes: [
        'Pop sur une pile vide → IndexError',
        'Utiliser les mauvaises opérations de liste pour simuler la pile',
      ],
      practice: [
        'Vérifie la correspondance des parenthèses avec une pile',
        'Implémente l\'évaluation d\'expressions postfixées',
      ],
      timeComplexity: 'O(1) pour push/pop',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'En Python, les listes comme pile ont O(1) amorti push/pop ; collections.deque a O(1) garanti.',
      steps: [
        'list.append()/pop() : O(1) amorti — simple et commun',
        'collections.deque : O(1) garanti pour append/pop des deux côtés',
        'Piles pour DFS, undo/redo, backtracking, gestion de la récursion',
        'La pile d\'appels Python est limitée (sys.getrecursionlimit())',
      ],
      commonMistakes: [
        'Oublier que list.pop(0) est O(n) — utiliser deque pour des files',
        'Dépassement de la profondeur de récursion sur des piles profondes',
      ],
      practice: [
        'Implémente une pile min avec push/pop en O(1)',
        'Utilise une pile pour évaluer des expressions infixes',
      ],
    },
  },
};

export default overlay;
