import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Calculez somme et moyenne de scores = [85, 92, 78, 96, 88, 73]. Identifiez ceux au-dessus de la moyenne.',
  hint: 'Additionnez d\'abord, divisez par le nombre pour la moyenne. Filtrez avec une compréhension de liste.',
  explanation: {
    simple: {
      overview: 'Sommer une liste additionne tous les éléments. La moyenne est la somme divisée par le nombre d\'éléments.',
      analogy: 'Comme calculer la facture totale d\'un groupe et la diviser également entre les personnes.',
      steps: [
        'Utilise sum(liste) ou une boucle',
        'Divise par len(liste) pour la moyenne',
        'Gère le cas de liste vide pour éviter la division par zéro',
        'Utilise statistics.mean() pour les statistiques',
      ],
      visual: `nums = [10, 20, 30, 40]
total = sum(nums)  # 100
moyenne = total / len(nums)  # 25.0`,
      commonMistakes: [
        'Division par zéro sur une liste vide',
        'Integers division // au lieu de / pour la moyenne',
      ],
      practice: [
        'Calcule moyenne, min et max en une seule passe',
        'Calcule la moyenne mobile',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'statistics.mean() gère les types Fraction/Decimal exactement ; math.fsum() évite les erreurs d\'accumulation de virgule flottante.',
      steps: [
        'sum() a un argument start optionnel',
        'math.fsum() accumule en précision étendue',
        'statistics.median() et statistics.stdev() pour des statistiques étendues',
        'numpy.mean() pour de grands tableaux numériques',
      ],
      commonMistakes: [
        'Manque de précision avec sum() sur des floats',
        'Supposer que mean == median pour des distributions asymétriques',
      ],
      practice: [
        'Compare sum() vs math.fsum() sur des floats',
        'Calcule écart-type avec statistics.stdev()',
      ],
    },
  },
};

export default overlay;
