import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Vérifiez si (\'listen\',\'silent\'), (\'hello\',\'world\') sont des anagrammes. Trouvez tous les groupes.',
  hint: 'Triez et comparez, ou utilisez Counter(). Pour le regroupement, utilisez le mot trié comme clé.',
  explanation: {
    simple: {
      overview: 'Deux chaînes sont des anagrammes si elles contiennent exactement les mêmes caractères avec les mêmes fréquences.',
      analogy: 'Comme des lettres de scrabble réarrangées — même ensemble, ordre différent.',
      steps: [
        'Normalise les deux chaînes (minuscules, sans espaces)',
        'Méthode 1 : trie les deux et compare',
        'Méthode 2 : compare les Counter des deux',
        'Si identiques, ce sont des anagrammes',
      ],
      visual: `"écouter" et "réécoute"
sorted("écouter") == sorted("réécoute") ?`,
      commonMistakes: [
        'Ne pas normaliser la casse et les espaces',
        'Oublier que les chiffres et la ponctuation comptent si non filtrés',
      ],
      practice: [
        'Vérifie des paires d\'anagrammes comme "listen"/"silent"',
        'Groupe une liste de mots en ensembles d\'anagrammes',
      ],
      timeComplexity: 'O(n log n) avec tri, O(n) avec Counter',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'La vérification d\'anagrammes basée sur Counter est O(n) ; le tri des chaînes est O(n log n) mais simple.',
      steps: [
        'Counter(s1) == Counter(s2) est O(n) en temps et en espace',
        'sorted(s1) == sorted(s2) est O(n log n) en temps',
        'Pour de nombreuses chaînes, group by sorted tuple',
        'L\'utilisation de tableau de fréquences [0]*26 est O(n) O(1) pour ASCII uniquement',
      ],
      commonMistakes: [
        'Utiliser sort quand on peut utiliser Counter pour de meilleures performances',
        'Ne pas gérer les caractères Unicode (utilise Counter, pas le tableau de fréquences)',
      ],
      practice: [
        'Groupe des anagrammes depuis une liste de mots',
        'Implémente avec un tableau de fréquences pour les chaînes ASCII',
      ],
    },
  },
};

export default overlay;
