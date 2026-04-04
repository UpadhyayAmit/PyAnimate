import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Vérifiez si \'({[]})\' et \'([)]\' sont valides. Puis gérez le cas \'(((\'.',
  hint: 'Empiler les parenthèses ouvrantes. À chaque fermante: dépiler et vérifier la correspondance.',
  explanation: {
    simple: {
      overview: 'Vérifie si une chaîne de parenthèses/crochets/accolades est bien équilibrée et correctement imbriquée.',
      analogy: 'Comme vérifier si chaque chapeau que tu poses sur ta tête a un chapeau correspondant que tu retires plus tard.',
      steps: [
        'Utilise une pile',
        'Pour chaque caractère d\'ouverture, empile-le',
        'Pour un caractère de fermeture, vérifie si la pile correspond',
        'Valide seulement si la pile est vide à la fin',
      ],
      visual: `"([])"
→ push (
→ push [
→ ] correspond à [ → pop
→ ) correspond à ( → pop
→ pile vide → valide !`,
      commonMistakes: [
        'Oublier de vérifier si la pile est vide avant de dépiler',
        'Retourner vrai quand la pile n\'est pas vide à la fin',
      ],
      practice: [
        'Étends à *  comme joker pour n\'importe quelle parenthèse',
        'Génère toutes les parenthèses valides pour n paires',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Les piles résolvent naturellement les problèmes d\'appariement imbriqués ; les variantes incluent les cas de joker et le calcul du score de parenthèses.',
      steps: [
        'Mappe les fermetures aux ouvertures avec un dict',
        'Pour *, utilise deux piles (indices des ouvertures et étoiles)',
        'Score de parenthèses : accumulation avec une pile',
        'Cas limite : chaîne vide est valide',
      ],
      commonMistakes: [
        'Utiliser des compteurs au lieu de pile (rate l\'imbrication croisée)',
        'Oublier de traiter les chaînes avec seulement des ouvertures',
      ],
      practice: [
        'Résous les parenthèses avec joker * ',
        'Calcule le score de parenthèses imbriquées',
      ],
    },
  },
};

export default overlay;
