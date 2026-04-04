import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Écrivez une fonction greet(name, greeting=\'Bonjour\') qui retourne un message de salutation formaté.',
  hint: 'Les paramètres par défaut viennent après les requis. Retournez un f-string formaté.',
  explanation: {
    simple: {
      overview: 'Les fonctions sont des blocs de code réutilisables qui effectuent une tâche spécifique. Elles sont définies avec def et appelées par leur nom.',
      analogy: 'Une fonction est comme une recette : tu la définis une fois avec les étapes, puis tu l\'«appelles» chaque fois que tu veux cuisiner ce plat.',
      steps: [
        'Écris def nom_fonction(parametres):',
        'Ajoute le corps de la fonction avec indentation',
        'Utilise return pour renvoyer une valeur',
        'Appelle la fonction avec nom_fonction(arguments)',
      ],
      visual: `def saluer(prenom):
    return f"Bonjour, {prenom} !"

print(saluer("Marie"))  # Bonjour, Marie !`,
      commonMistakes: [
        'Oublier return — la fonction renvoie None',
        'Confondre paramètres (définition) et arguments (appel)',
        'Appeler la fonction avant de la définir',
      ],
      practice: [
        'Écris une fonction qui calcule l\'aire d\'un rectangle',
        'Crée une fonction qui vérifie si un nombre est premier',
      ],
    },
    deepDive: {
      overview: 'Les fonctions Python sont des objets de première classe ; elles supportent les arguments par défaut, *args, **kwargs et les fermetures.',
      steps: [
        'Les arguments par défaut sont évalués une seule fois à la définition',
        '*args collecte les arguments positionnels supplémentaires',
        '**kwargs collecte les arguments nommés supplémentaires',
        'Les fermetures capturent les variables de leur portée englobante',
      ],
      commonMistakes: [
        'Utiliser une liste mutable comme valeur par défaut',
        'Confondre portée locale et globale (mot-clé global)',
      ],
      practice: [
        'Écris une fonction avec *args pour sommer n nombres',
        'Explore les fermetures avec une fonction fabrique de compteur',
      ],
    },
  },
};

export default overlay;
