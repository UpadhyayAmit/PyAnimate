import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Comptez combien de fois chaque mot apparaît dans \'the cat sat on the mat the cat\'.',
  hint: 'Utilisez un dictionnaire: d[w] = d.get(w, 0) + 1 pour chaque mot.',
  explanation: {
    simple: {
      overview: 'Compter les occurrences signifie trouver combien de fois chaque élément apparaît dans une liste ou une chaîne.',
      analogy: 'Comme compter combien de fois chaque mot apparaît dans un paragraphe.',
      steps: [
        'Crée un dictionnaire vide',
        'Parcours chaque élément',
        'Si présent, incrémente le compteur ; sinon, initialise-le à 1',
        'Optionnellement, utilise collections.Counter',
      ],
      visual: `lst = [1,2,2,3,3,3]
compteur = {}
for x in lst:
    compteur[x] = compteur.get(x,0)+1
# {1:1, 2:2, 3:3}`,
      commonMistakes: [
        'KeyError lors de l\'accès direct sans .get()',
        'Oublier d\'initialiser les compteurs',
      ],
      practice: [
        'Compte la fréquence des caractères dans une chaîne',
        'Trouve l\'élément le plus fréquent',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(k) où k est le nombre de clés uniques'
    },
    deepDive: {
      overview: 'collections.Counter est une sous-classe de dict optimisée pour le comptage ; elle supporte les opérations arithmétiques.',
      steps: [
        'Counter(iterable) construit en O(n)',
        'most_common(k) retourne les k éléments les plus fréquents',
        'Les compteurs peuvent être additionnés et soustraits',
        'elements() retourne un itérateur sur les éléments avec répétition',
      ],
      commonMistakes: [
        'Réinventer Counter alors qu\'il est dans la bibliothèque standard',
        'Oublier que Counter retourne 0 pour les clés manquantes',
      ],
      practice: [
        'Utilise Counter.most_common(3)',
        'Additionne deux Counters et explore le résultat',
      ],
    },
  },
};

export default overlay;
