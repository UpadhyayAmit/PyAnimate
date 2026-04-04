import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Trouvez min et max de [34, 7, 23, 32, 5, 62] en UN pass sans min()/max().',
  hint: 'Initialisez les deux au premier élément, puis comparez chaque élément restant.',
  explanation: {
    simple: {
      overview: 'Trouver le minimum et le maximum signifie identifier les valeurs les plus petite et la plus grande dans une collection.',
      analogy: 'Comme scanner une rangée d\'étudiants pour trouver le plus petit et le plus grand.',
      steps: [
        'Initialise min et max avec le premier élément',
        'Parcours le reste de la liste',
        'Si l\'élément courant < min, mets min à jour',
        'Si l\'élément courant > max, mets max à jour',
      ],
      visual: `nums = [3,1,4,1,5,9]
min_val = nums[0]
for n in nums[1:]:
    if n < min_val:
        min_val = n
# min_val = 1`,
      commonMistakes: [
        'Initialiser min/max à 0 au lieu du premier élément',
        'Oublier de gérer la liste vide',
      ],
      practice: [
        'Trouve min et max sans utiliser les fonctions intégrées',
        'Trouve le deuxième plus grand élément',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Les fonctions intégrées min() et max() de Python acceptent un argument key= et peuvent opérer sur tout itérable.',
      steps: [
        'min(lst, key=len) trouve l\'élément avec la valeur de clé minimale',
        'zip() permet de trouver min/max en une seule passe',
        'heapq.nsmallest/nlargest pour le top-k',
        'numpy.argmin/argmax pour les tableaux',
      ],
      commonMistakes: [
        'Utiliser une boucle manuelle quand min()/max() suffisent',
        'Oublier que min([]) lève ValueError',
      ],
      practice: [
        'Utilise min() avec key= sur une liste de tuples',
        'Implémente un algorithme de sélection simultanee min+max en n*3/2 comparaisons',
      ],
    },
  },
};

export default overlay;
