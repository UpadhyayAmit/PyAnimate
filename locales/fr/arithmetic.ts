import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Calculez l\'aire et le périmètre d\'un rectangle de largeur=7 et hauteur=4.',
  hint: 'Aire = largeur * hauteur. Périmètre = 2 * (largeur + hauteur). Utilisez ** pour les exposants.',
  explanation: {
    simple: {
      overview: 'Python supporte les opérations arithmétiques de base : addition, soustraction, multiplication, division, modulo et puissance.',
      analogy: 'C\'est la calculatrice de Python — les mêmes opérateurs qu\'en mathématiques, avec quelques bonus.',
      steps: [
        '+ addition, - soustraction',
        '* multiplication, / division (toujours float)',
        '// division entière, % modulo, ** puissance',
      ],
      visual: `10 + 3 = 13
10 / 3 = 3.333
10 // 3 = 3
10 % 3 = 1
2 ** 8 = 256`,
      commonMistakes: [
        'Oublier que / retourne toujours un float',
        'Confondre // (floor) avec int(a/b) pour les négatifs',
        '% retourne le reste, pas un pourcentage',
      ],
      practice: [
        'Calcule l\'aire d\'un cercle avec math.pi',
        'Utilise % pour vérifier si un nombre est pair ou impair',
      ],
    },
    deepDive: {
      overview: 'Les opérateurs arithmétiques de Python appliquent les règles de priorité PEMDAS ; les ints ont une précision arbitraire.',
      steps: [
        'Ordre : ** → unaire → * / // % → + -',
        'Les floats ont des erreurs de précision IEEE 754',
        'divmod(a,b) retourne (quotient, reste) en une seule fois',
        'decimal.Decimal pour l\'arithmétique à précision exacte',
      ],
      commonMistakes: [
        '0.1 + 0.2 != 0.3 à cause de la virgule flottante',
        'Confondre -2**2 = -4 vs (-2)**2 = 4',
      ],
      practice: [
        'Explore divmod() et math.fmod()',
        'Compare float vs Decimal pour des calculs financiers',
      ],
    },
  },
};

export default overlay;
