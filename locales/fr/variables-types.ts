import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Créez des variables pour votre âge (int), taille (float) et nom (str).',
  hint: 'Utilisez type() pour inspecter le type de variable. Les f-strings simplifient l\'affichage.',
  explanation: {
    simple: {
      overview: 'Les variables sont des conteneurs qui stockent des données. Python possède des types comme int, float, str et bool.',
      analogy: 'Une variable est comme une boîte étiquetée : l\'étiquette est le nom, le contenu est la valeur.',
      steps: [
        'Choisis un nom descriptif',
        'Utilise = pour affecter une valeur',
        'Python détecte le type automatiquement',
        'Tu peux réaffecter avec un type différent',
      ],
      visual: `age = 25          # int
taille = 1.75     # float
prenom = "Marie"  # str
actif = True      # bool`,
      commonMistakes: [
        'Utiliser des espaces dans les noms de variables',
        'Confondre = (affectation) avec == (comparaison)',
        'Oublier que les chaînes nécessitent des guillemets',
      ],
      practice: [
        'Crée des variables pour ton prénom, ton âge et ta taille',
        'Vérifie le type avec type()',
      ],
    },
    deepDive: {
      overview: 'Python utilise le typage dynamique : les variables sont des références à des objets. Chaque objet a un type, une identité et une valeur.',
      steps: [
        'id() retourne l\'adresse mémoire de l\'objet',
        'type() retourne la classe de l\'objet',
        'Les petits entiers (-5 à 256) sont mis en cache',
        'isinstance() vérifie l\'héritage de type',
      ],
      commonMistakes: [
        'Supposer que les variables ont un type fixe',
        'Confondre is (identité) avec == (égalité de valeur)',
      ],
      practice: [
        'Vérifie id() sur des entiers mis en cache vs grands entiers',
        'Explore le typage dynamique en réaffectant des types',
      ],
    },
  },
};

export default overlay;
