import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Écrivez un programme qui vérifie si un nombre est positif, négatif ou zéro.',
  hint: 'Utilisez if/elif/else. Testez chaque branche en changeant la valeur d\'entrée.',
  explanation: {
    simple: {
      overview: 'Les instructions if-else permettent à ton programme de prendre des décisions en exécutant du code différent selon les conditions.',
      analogy: 'Comme un feu de circulation : si c\'est vert, avance ; si c\'est rouge, arrête-toi.',
      steps: [
        'Écris if condition:',
        'Ajoute le bloc de code à exécuter si c\'est True',
        'Ajoute elif pour des conditions supplémentaires',
        'Ajoute else pour le cas par défaut',
      ],
      visual: `if x > 0:
    print("positif")
elif x == 0:
    print("zéro")
else:
    print("négatif")`,
      commonMistakes: [
        'Oublier les deux-points après la condition',
        'Indentation incorrecte',
        'Utiliser = au lieu de == pour comparer',
      ],
      practice: [
        'Classifie les températures comme froide, agréable ou chaude',
        'Construis une calculatrice de notes avec if-elif-else',
      ],
    },
    deepDive: {
      overview: 'Python évalue les conditions if comme des valeurs truthy/falsy ; il supporte les expressions conditionnelles ternaires.',
      steps: [
        'Valeurs falsy : None, 0, "", [], {}, set()',
        'Ternaire : valeur_si_vrai if condition else valeur_si_faux',
        'Les conditions if acceptent n\'importe quelle expression',
        'Utilise and/or/not pour la logique composée',
      ],
      commonMistakes: [
        'Ne pas savoir que les conteneurs vides sont falsy',
        'Comparer avec ==True/==False au lieu d\'utiliser directement la condition',
      ],
      practice: [
        'Utilise l\'expression ternaire pour la valeur absolue',
        'Teste la véracité de différents types de données',
      ],
    },
  },
};

export default overlay;
