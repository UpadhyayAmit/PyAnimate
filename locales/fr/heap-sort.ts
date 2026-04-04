import type { LessonLocaleOverlay } from '../types';

const heapSort: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Heap Sort construit un max-heap puis place le plus grand element a la fin a chaque tour.',
      analogy: 'Comme une file de priorite: on prend toujours la valeur la plus grande en premier.',
      steps: [
        'Transformer le tableau en max-heap (heapify).',
        'Echanger la racine avec la derniere case non triee.',
        'Reduire la taille du heap de 1.',
        'Faire sift-down depuis la racine.',
        'Repeter jusqu a taille 1.',
      ],
      visual: '[heap | sorted tail] : la partie triee grandit a droite.',
      commonMistakes: [
        'Confondre index enfants en base 0 et base 1.',
        'Oublier de reduire heap_size apres chaque extraction.',
        'Utiliser sift-up au lieu de sift-down apres swap.',
      ],
      practice: [
        'Heapify [4,10,3,5,1] pas a pas.',
        'Expliquer pourquoi Heap Sort n est pas stable.',
        'Adapter en min-heap pour tri descendant.',
      ],
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Heap Sort garantit O(n log n) en pire cas avec espace auxiliaire constant.',
      analogy: 'Un arbre binaire complet ou chaque reparation suit un chemin racine-feuille.',
      steps: [
        'Build-heap en O(n) via la methode bottom-up.',
        'Pour end de n-1 a 1: swap root/end.',
        'heap_size-- puis sift-down root.',
        'Invariant: prefixe est un heap, suffixe est trie.',
        'Arreter quand heap_size == 1.',
      ],
      visual: 'Le heap retrecit, la queue triee s allonge.',
      commonMistakes: [
        'Comparer avec le mauvais enfant lors du sift-down.',
        'Ne pas garder l invariant heap apres chaque extraction.',
        'Recalculs inutiles qui degradent les constantes.',
      ],
      practice: [
        'Deriver pourquoi build-heap est O(n).',
        'Comparer nombre de swaps avec Quick Sort.',
        'Implementer version iterative claire sans recursion.',
      ],
      timeComplexity: 'Theta(n log n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default heapSort;
