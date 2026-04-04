import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Inversez [1, 2, 3, 4, 5] en place avec deux pointeurs. N\'utilisez PAS list.reverse().',
  hint: 'Commencez avec left=0, right=len-1. Échangez arr[left] et arr[right], rapprochez-les.',
  explanation: {
    simple: {
      overview: 'Inverser une liste signifie réarranger ses éléments dans l\'ordre inverse.',
      analogy: 'Comme retourner un paquet de cartes — la dernière carte devient la première.',
      steps: [
        'Méthode 1 : utilise liste.reverse() en place',
        'Méthode 2 : utilise liste[::-1] pour un nouveau slice',
        'Méthode 3 : utilise reversed() pour un itérateur',
        'Méthode manuelle : échange les éléments avec deux pointeurs',
      ],
      visual: `lst = [1,2,3,4,5]
lst[::-1] → [5,4,3,2,1]
lst.reverse() → modifie en place`,
      commonMistakes: [
        'Confondre .reverse() (en place) avec [::-1] (nouvelles liste)',
        'Oublier que reversed() retourne un itérateur, pas une liste',
      ],
      practice: [
        'Inverse une chaîne en utilisant le slicing',
        'Vérifie si une liste est un palindrome',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1) en place, O(n) avec slicing'
    },
    deepDive: {
      overview: 'list.reverse() est O(n) en place avec O(1) d\'espace ; le slicing [::-1] crée une nouvelle liste en O(n) avec O(n) d\'espace.',
      steps: [
        'L\'inversion en place échange paires[0,n-1], [1,n-2]...',
        'reversed() retourne un objet list_reverseiterator',
        'Pour les chaînes : "".join(reversed(s)) ou s[::-1]',
        'Pour les grands ensembles de données, préfère reversed() (paresseux)',
      ],
      commonMistakes: [
        'Utiliser [::-1] quand on a juste besoin d\'itérer en ordre inverse (utiliser reversed())',
        'Modifier la liste pendant l\'itération avec reversed()',
      ],
      practice: [
        'Benchmark list.reverse() vs slicing',
        'Implémente l\'inversion en place avec deux pointeurs',
      ],
    },
  },
};

export default overlay;
