import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Utilisez une boucle while pour afficher les nombres de 1 à 10, puis leur somme.',
  hint: 'Gardez une variable compteur et mettez-la à jour à chaque itération.',
  explanation: {
    simple: {
      overview: 'Une boucle while répète un bloc de code tant qu\'une condition est vraie.',
      analogy: 'Comme faire des pompes — tu continues tant que tu le peux, tu t\'arrêtes quand tu ne peux plus.',
      steps: [
        'Écris while condition:',
        'Le bloc s\'exécute si la condition est True',
        'Mets à jour quelque chose pour que la condition devienne False',
        'Utilise break pour sortir plus tôt',
      ],
      visual: `n = 1
while n <= 5:
    print(n)
    n += 1
# Affiche 1 2 3 4 5`,
      commonMistakes: [
        'Oublier de mettre à jour la variable → boucle infinie',
        'Oublier les deux-points après while',
        'Logique de condition incorrecte',
      ],
      practice: [
        'Boucle de devinette de nombre',
        'Compter les chiffres dans un nombre avec while',
      ],
    },
    deepDive: {
      overview: 'Les boucles while supportent la clause else (exécutée s\'il n\'y a pas eu de break) et les instructions continue/break.',
      steps: [
        'while-else : else s\'exécute si la boucle se termine normalement',
        'continue passe à l\'itération suivante',
        'break quitte la boucle complètement',
        'Utilise while True avec break pour des boucles "do-while"',
      ],
      commonMistakes: [
        'Ne pas savoir que while-else n\'est pas try-except',
        'Placer continue/break hors de la bonne boucle',
      ],
      practice: [
        'Implémente une recherche avec while-else',
        'Construis un menu interactif avec while True',
      ],
    },
  },
};

export default overlay;
