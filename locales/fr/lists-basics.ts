import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Créez une liste de 5 nombres. Ajoutez 99, supprimez le plus petit, puis affichez triée.',
  hint: 'Utilisez append(), remove() et sorted(). La fonction min() trouve la plus petite valeur.',
  explanation: {
    simple: {
      overview: 'Les listes sont des collections ordonnées pouvant contenir n\'importe quel type de données. Elles sont mutables — tu peux modifier leur contenu.',
      analogy: 'Une liste est comme une liste de courses : ordonnée, peut avoir des doublons, et tu peux ajouter ou retirer des articles.',
      steps: [
        'Crée : ma_liste = [1, 2, 3]',
        'Accède : ma_liste[0] retourne 1',
        'Ajoute : ma_liste.append(4)',
        'Supprime : ma_liste.remove(2) ou ma_liste.pop()',
      ],
      visual: `nums = [10, 20, 30]
nums[0] → 10
nums[-1] → 30
nums[1:] → [20, 30]`,
      commonMistakes: [
        'IndexError en accédant hors des limites',
        'Confondre liste.sort() (en place) avec sorted(liste)',
        'Les variables de liste pointent vers la même liste (copie superficielle)',
      ],
      practice: [
        'Inverse une liste sans utiliser reverse()',
        'Trouve les deux plus grands nombres',
      ],
    },
    deepDive: {
      overview: 'Les listes Python sont des tableaux dynamiques qui croissent avec un facteur 1.125 ; le slicing crée de nouvelles listes.',
      steps: [
        'append est O(1) amorti ; insert(0,x) est O(n)',
        'Le slicing a[i:j] crée une nouvelle copie en O(k)',
        'list.sort() utilise Timsort — O(n log n) stable',
        'collections.deque est meilleur pour les insertions en tête',
      ],
      commonMistakes: [
        'Utiliser insert(0,x) dans une boucle → O(n²)',
        'copy() est une copie superficielle — utilise copy.deepcopy() pour les listes imbriquées',
      ],
      practice: [
        'Compare les performances de append vs insert(0,x)',
        'Pratique les rotations de liste avec le slicing',
      ],
    },
  },
};

export default overlay;
