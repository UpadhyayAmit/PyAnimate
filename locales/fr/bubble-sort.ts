import type { LessonLocaleOverlay } from '../types';

const bubbleSort: LessonLocaleOverlay = {
  prompt: "Modifiez array en [9, 1, 5, 3, 7]. Prédisez combien de swaps seront nécessaires avant que l'array soit triée.",
  hint: "Comptez les événements de swap en orange dans la timeline. Chaque swap déplace l'élément le plus grand d'une position vers la droite.",
  useCases: [
    "Enseigner les concepts de tri - l'algorithme le plus visuel",
    'Détecter les arrays presque triées (optimisation par sortie anticipée)',
    'Systèmes embarqués avec peu de mémoire où O(1) space est crucial',
  ],
  approach:
    "Bubble sort compare chaque paire adjacente et swap si l'ordre est incorrect. Après chaque outer pass complète, le plus grand élément non trié est garanti à sa position finale. Nous utilisons des nested loops : l'outer loop contrôle les passes (n-1), et l'inner loop contrôle les comparaisons (elle rétrécit à chaque pass car la fin est déjà triée). Ce n'est pas efficace pour de grands jeux de données - O(n²) - mais c'est l'algorithme le plus visuel pour apprendre le tri par comparaison.",
  executionFrames: [
    {
      summary: 'arr = [5, 3, 8, 1, 2] - 5 éléments non triés.',
      why: "Nous stockons les valeurs dans une list afin d'accéder aux éléments par index (arr[j], arr[j+1]). Bubble sort est un algorithme in-place : nous modifions la même list au lieu d'en créer une nouvelle, ce qui maintient la complexité spatiale à O(1).",
    },
    {
      summary: 'n = 5 - nous avons besoin de 4 outer passes au maximum.',
      why: "Nous stockons n = len(arr) une seule fois au lieu d'appeler len() à chaque itération. C'est une micro-optimisation, mais surtout cela rend les limites de boucle plus lisibles. Nous avons besoin de n-1 outer passes car après n-1 passes, le plus petit élément est garanti à la position 0.",
    },
    {
      summary: 'arr[0]=5 > arr[1]=3 - swap nécessaire.',
      why: 'Nous comparons arr[j] > arr[j+1] (strictement supérieur) pour conserver la stabilité : les éléments égaux ne swap pas, donc leur ordre relatif reste identique. Cette comparaison est le coeur de chaque tri par comparaison.',
    },
    {
      summary: 'Python tuple swap - pas de temp variable nécessaire.',
      why: "arr[j], arr[j+1] = arr[j+1], arr[j] est l'affectation simultanée élégante de Python. En C il faudrait une temp variable. Python évalue d'abord le côté droit comme tuple, puis dépile, donc les deux valeurs sont capturées avant toute écriture.",
    },
    {
      summary: "8 bubble vers la droite - c'est le plus grand élément jusqu'ici.",
      why: "Remarquez que 8 s'est déplacé de deux positions vers la droite en deux étapes. Le plus grand élément bubble toujours vers la fin de chaque pass, d'où le nom Bubble sort. Après cette outer pass (i=0), 8 sera à sa position finale.",
    },
    {
      summary: '8 est maintenant à sa position finale à index 4.',
      why: "L'inner loop s'exécute n - i - 1 fois. Le '- i' est l'optimisation : après la pass i, les i derniers éléments sont déjà triés et à leur position finale. Inutile de les comparer à nouveau - cela réduit fortement le travail total.",
    },
    {
      summary: '5 bubble vers la droite. [3, 5, 1, 2, 8] -> [3, 1, 2, 5, 8]',
      why: "Chaque outer pass place un élément supplémentaire. Après la pass 2, 5 et 8 sont tous les deux finaux. L'algorithme garantit un progrès même dans le pire des cas : n-1 passes produisent toujours une array triée.",
    },
    {
      summary: 'Final sorted array: [1, 2, 3, 5, 8].',
      why: "Total des comparaisons : n×(n-1)/2 = 10 pour n=5. C'est pourquoi Bubble sort est O(n²) - le nombre de comparaisons augmente quadratiquement. Pour n=1000, c'est environ 500 000 comparaisons. Merge Sort en fait environ 10 000. Utilisez Bubble sort pour apprendre, pas pour la production.",
    },
  ],
  explanation: {
    simple: {
      overview:
        'Bubble Sort compare des elements adjacents et les echange quand ils sont dans le mauvais ordre. A chaque passe, le plus grand element restant va a droite.',
      analogy:
        'Comme des bulles dans l eau: les plus grosses montent vers le haut a chaque tour.',
      steps: [
        'Parcourir la liste et comparer arr[j] avec arr[j+1].',
        'Si arr[j] > arr[j+1], faire un swap.',
        'Apres une passe, le plus grand element est place en fin de tableau.',
        'Reduire la zone de parcours car la fin est deja triee.',
        'Arreter plus tot si aucune permutation n est faite.',
      ],
      visual: 'Passe 1: [5,3,8,1,2] -> [3,5,1,2,8], puis la fenetre se reduit a chaque passe.',
      commonMistakes: [
        'Ne pas reduire la borne de la boucle interne.',
        'Utiliser >= au lieu de > et perdre la stabilite.',
        'Oublier l arret anticipe quand il n y a aucun swap.',
      ],
      practice: [
        'Tracer Bubble Sort sur une liste deja triee avec et sans arret anticipe.',
        'Montrer pourquoi Bubble Sort est stable.',
        'Modifier la logique pour trier en ordre descendant.',
      ],
      timeComplexity: 'O(n²) pire/moyenne, O(n) meilleur cas avec early exit',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview:
        'Bubble Sort effectue n-1 passes. A la passe i, le maximum de la zone non triee est envoye en position finale.',
      analogy:
        'Comme un tamis incline: les plus grandes valeurs glissent progressivement vers la fin.',
      steps: [
        'Initialiser swapped=false puis iterer j de 0 a n-i-2.',
        'Comparer arr[j] > arr[j+1] et swap si necessaire.',
        'Si aucun swap pendant la passe, la liste est deja triee.',
        'Apres la passe i, les i derniers elements sont finalises.',
        'Continuer jusqu a i = n-2 ou jusqu a une sortie anticipee.',
      ],
      visual: 'La plage analysee diminue comme un escalier: n-1, n-2, n-3...',
      commonMistakes: [
        'Erreur off-by-one dans la boucle interne.',
        'Recalculer la taille dans la boucle au lieu de la memoriser.',
        'Comparer une mauvaise cle de tri.',
      ],
      practice: [
        'Prouver formellement la stabilite avec la condition stricte >.',
        'Deriver le nombre exact de comparaisons sans early exit.',
        'Implementer Cocktail Sort et comparer les echanges.',
      ],
      timeComplexity: 'O(n²) comparaisons, O(n²) swaps au pire',
      spaceComplexity: 'O(1) auxiliaire',
    },
  },
};

export default bubbleSort;
