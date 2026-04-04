import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Parcourez une liste de fruits et affichez chacun avec son index en utilisant enumerate().',
  hint: 'enumerate(liste) donne des paires (index, valeur). Décompressez dans le for.',
  explanation: {
    simple: {
      overview: 'Une boucle for itère sur une séquence (liste, chaîne, plage) et exécute du code pour chaque élément.',
      analogy: 'Comme lire les pages d\'un livre — tu traites chacune dans l\'ordre jusqu\'à la fin.',
      steps: [
        'Écris for element in sequence:',
        'elem prend chaque valeur de la séquence',
        'Le bloc s\'exécute une fois par élément',
        'range() génère des séquences de nombres',
      ],
      visual: `for i in range(5):
    print(i)
# 0 1 2 3 4

for ch in "Bonjour":
    print(ch)`,
      commonMistakes: [
        'Modifier la liste pendant qu\'on itère dessus',
        'Confondre range(5) → 0-4 vs range(1,6) → 1-5',
        'Logique d\'index hors limites avec range(len())',
      ],
      practice: [
        'Somme tous les éléments d\'une liste',
        'Affiche une table de multiplication avec for imbriqué',
      ],
    },
    deepDive: {
      overview: 'Les boucles for de Python utilisent le protocole itérateur ; enumerate(), zip() et les compréhensions de liste en étendent la puissance.',
      steps: [
        'enumerate() donne l\'index et la valeur ensemble',
        'zip() itère sur plusieurs itérables en parallèle',
        'Les compréhensions de liste sont des boucles for en ligne',
        'iter() et next() pour le contrôle manuel de l\'itérateur',
      ],
      commonMistakes: [
        'Réinventer enumerate() avec for i in range(len(lst))',
        'Fuite de variable de boucle (elem existe après le for)',
      ],
      practice: [
        'Réécris les boucles avec des compréhensions de liste',
        'Utilise zip() pour itérer sur deux listes ensemble',
      ],
    },
  },
};

export default overlay;
