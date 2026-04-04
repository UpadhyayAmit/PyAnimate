import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Étant donné une liste d\'entiers, trouvez tous les éléments qui apparaissent plus de n/3 fois.',
  hint: 'Construisez d\'abord un dictionnaire de fréquences, puis filtrez.',
  explanation: {
    simple: {
      overview: 'Le comptage par hashmap utilise un dictionnaire pour compter les fréquences et résoudre des problèmes de tableau en O(n).',
      analogy: 'Comme tenir un registre de présence — tu notes chaque personne quand elle arrive.',
      steps: [
        'Crée un dict vide freq = {}',
        'Pour chaque élément, fais freq[elem] = freq.get(elem, 0) + 1',
        'Interroge le dictionnaire pour les fréquences',
        'Utilise collections.Counter pour les raccourcis',
      ],
      visual: `nums=[1,2,2,3,3,3]
freq={1:1, 2:2, 3:3}
# Compter en O(n), interroger en O(1)`,
      commonMistakes: [
        'KeyError lors d\'un accès direct sans .get() ou defaultdict',
        'Oublier que les dicts Python 3.7+ maintiennent l\'ordre d\'insertion',
      ],
      practice: [
        'Trouve le premier caractère non répété dans une chaîne',
        'Vérifie si deux chaînes sont des permutations',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(k) où k est le nombre de clés uniques'
    },
    deepDive: {
      overview: 'Les tables de hachage ont O(1) insertion/recherche amortie ; les collisions sont gérées par chaînage ou adressage ouvert.',
      steps: [
        'defaultdict(int) évite les KeyErrors dans le comptage',
        'Les tableaux de fréquences [0]*26 sont plus rapides pour les lettres ASCII',
        'Le hachage personnalisé permet les clés d\'objet pour les tableaux',
        'La résolution de collisions : chaînage (Python) vs sondage (Java)',
      ],
      commonMistakes: [
        'Utiliser une liste comme clé de dict (non hachable)',
        'Supposer un ordre constant dans les dicts (vrai en Python 3.7+)',
      ],
      practice: [
        'Implémente la vérification d\'anagrammes avec defaultdict',
        'Résous le problème de la plus longue sous-chaîne sans répétition',
      ],
    },
  },
};

export default overlay;
