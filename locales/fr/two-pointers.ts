import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Utilisez deux pointeurs sur le tableau trié [1,3,6,8,10] pour trouver les paires sommant à 11.',
  hint: 'Commencez left=0, right=len-1. Si somme < cible: avancez left; si > reculez right.',
  explanation: {
    simple: {
      overview: 'La technique deux-pointeurs utilise deux index se déplaçant vers l\'intérieur ou vers l\'avant pour résoudre des problèmes sur des tableaux/chaînes en O(n).',
      analogy: 'Comme deux personnes marchant l\'une vers l\'autre sur une route — elles se rencontrent au milieu.',
      steps: [
        'Place gauche=0 et droite=len-1',
        'En boucle tant que gauche < droite',
        'Vérifie la condition et déplace le pointeur approprié',
        'Stop quand ils se rencontrent',
      ],
      visual: `tableau=[1,2,3,4,5,6], cible=7
g=0(1), d=5(6) → 7 ✓
g=1(2), d=4(5) → 7 ✓
g=2(3), d=3(4) → 7 ✗`,
      commonMistakes: [
        'Ne pas trier d\'abord si l\'ordre est requis',
        'Conditions de déplacement de pointeur incorrectes',
      ],
      practice: [
        'Trouve toutes les paires avec une somme cible dans un tableau trié',
        'Supprime les doublons dans un tableau trié en place',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Les deux-pointeurs s\'étendent à la fenêtre glissante, 3Sum et la comparaison de chaînes avec une complexité linéaire.',
      steps: [
        'Même direction : fenêtre glissante, suppression de doublons',
        'Directions opposées : 2Sum trié, vérification palindrome',
        '3Sum : boucle externe + deux-pointeurs interne en O(n²)',
        'Pointeurs rapide/lent (Floyd) : détection de cycle',
      ],
      commonMistakes: [
        'Appliquer les deux-pointeurs à des tableaux non triés quand l\'ordre compte',
        'Confondre deux-pointeurs et fenêtre glissante',
      ],
      practice: [
        'Résous 3Sum avec deux-pointeurs imbriqués',
        'Implémente la détection de cycle de Floyd',
      ],
    },
  },
};

export default overlay;
