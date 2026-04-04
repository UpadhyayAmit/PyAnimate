import type { LessonLocaleOverlay } from '../types';

const binarySearch: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'La recherche binaire divise en deux un tableau trié jusqu’à trouver la cible ou épuiser l’intervalle.',
      analogy: 'Comme chercher un mot dans un dictionnaire : ouvrir au milieu, décider gauche ou droite, recommencer.',
      steps: [
        'low = 0, high = n-1.',
        'mid = (low + high) // 2.',
        'Si arr[mid] == cible → retour mid.',
        'Si cible < arr[mid] → high = mid - 1.',
        'Sinon low = mid + 1, tant que low <= high.',
      ],
      visual: '[1 3 5 7 9] → tester 5 → aller à droite → tester 7 → trouvé à l’index 3.',
      commonMistakes: [
        'Oublier de recalculer mid après la mise à jour des bornes.',
        'Boucle avec < au lieu de <= qui saute le dernier élément.',
        'mid = (low+high) overflow dans certains langages (préférer low + (high-low)//2).',
      ],
      practice: [
        'Tracer l’algorithme sur 7 éléments avec cible aux extrémités et absente.',
        'Renvoyer l’index d’insertion si la cible est absente.',
        'Expliquer pourquoi le tableau doit être trié (contre‑exemple à l’appui).',
      ],
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Recherche binaire = décision sur un prédicat monotone ; chaque comparaison élimine la moitié de l’espace.',
      analogy: 'Arbre de décision de hauteur log₂ n : chaque nœud coupe l’intervalle en deux.',
      steps: [
        'Bornes inclusives [low, high].',
        'mid = low + ((high - low) >> 1) pour éviter l’overflow.',
        'Le prédicat choisit la moitié conservée ; invariant : si la cible existe, elle reste dans [low, high].',
        'Fin quand low > high ; l’index d’insertion vaut low.',
        'Gérer les doublons via lower_bound / upper_bound.',
      ],
      visual: 'Intervalles : [0,n-1] → [0,mid-1] ou [mid+1,n-1] ; hauteur ~ log₂ n.',
      commonMistakes: [
        'Mettre low = mid ou high = mid (boucle infinie sur 2 éléments).',
        'Appliquer sur des données non triées (prédicat non monotone).',
        'Ignorer le cas des doublons (première vs dernière occurrence).',
      ],
      practice: [
        'Prouver l’invariant de boucle.',
        'Coder lower_bound (premier ≥ cible) et upper_bound (premier > cible).',
        'Montrer l’échec sur un tableau pivoté et expliquer la version pivotée.',
      ],
      timeComplexity: 'Θ(log n)',
      spaceComplexity: 'Θ(1)',
    },
  },
};

export default binarySearch;
