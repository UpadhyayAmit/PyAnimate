import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Vérifiez si \'racecar\', \'hello\' et \'A man a plan a canal Panama\' sont des palindromes.',
  hint: 'Pour le dernier: passez en minuscules et supprimez espaces/ponctuation d\'abord.',
  explanation: {
    simple: {
      overview: 'Un palindrome est une chaîne qui se lit de la même façon dans les deux sens, comme "radar" ou "niveau".',
      analogy: 'Comme regarder dans un miroir — le reflet est identique à l\'original.',
      steps: [
        'Normalise la chaîne (minuscules, sans espaces)',
        'Compare la chaîne avec son inverse',
        'Si égales, c\'est un palindrome',
        'Pour les listes, comparer avec la version inversée',
      ],
      visual: `mot = "radar"
est_palindrome = mot == mot[::-1]
# True`,
      commonMistakes: [
        'Oublier d\'ignorer la casse et les espaces',
        'Ne pas gérer les chaînes vides (qui sont palindromes)',
      ],
      practice: [
        'Vérifie si une phrase est un palindrome (ignore espaces/ponctuation)',
        'Trouve tous les palindromes dans une liste de mots',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n) pour le slicing, O(1) avec deux pointeurs'
    },
    deepDive: {
      overview: 'Le slicing palindrome est O(n) en temps et en espace ; l\'approche deux-pointeurs est O(n) en temps et O(1) en espace.',
      steps: [
        'Deux pointeurs : gauche=0, droite=len-1, avance vers l\'intérieur',
        'Pour les phrases : utilise re.sub(r\'[^a-z0-9]\', \'\', s.lower())',
        'Le palindrome le plus long : algorithme de Manacher en O(n)',
        'La sous-séquence palindromique la plus longue : programmation dynamique',
      ],
      commonMistakes: [
        'Ignorer les caractères non alphanumériques dans les problèmes de phrase',
        'Confondre sous-séquence palindromique et sous-chaîne palindromique',
      ],
      practice: [
        'Implémente la vérification palindrome avec deux pointeurs',
        'Trouve la plus longue sous-chaîne palindromique',
      ],
    },
  },
};

export default overlay;
