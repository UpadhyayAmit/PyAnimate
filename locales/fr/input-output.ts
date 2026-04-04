import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Demandez deux nombres à l\'utilisateur et affichez leur somme, différence et produit.',
  hint: 'input() retourne toujours une chaîne. Convertissez avec int() ou float() avant les calculs.',
  explanation: {
    simple: {
      overview: 'input() lit la saisie de l\'utilisateur en tant que chaîne. print() affiche la sortie. Convertis avec int() ou float() si besoin.',
      analogy: 'input() est comme poser une question ; print() est comme donner une réponse.',
      steps: [
        'Utilise input("invite : ") pour lire la saisie',
        'Le résultat est toujours une chaîne',
        'Convertis avec int(), float() si nécessaire',
        'Utilise print() pour afficher les résultats',
      ],
      visual: `nom = input("Ton prénom : ")
age = int(input("Ton âge : "))
print(f"Bonjour {nom}, tu as {age} ans.")`,
      commonMistakes: [
        'Oublier de convertir la saisie en int/float',
        'ValueError si l\'utilisateur saisit du texte non numérique',
        'Utiliser print sans parenthèses (syntaxe Python 2)',
      ],
      practice: [
        'Crée une calculatrice simple avec input()',
        'Lis plusieurs nombres et calcule leur moyenne',
      ],
    },
    deepDive: {
      overview: 'Pour les E/S de fichiers, Python utilise open() avec des gestionnaires de contexte ; sys.stdin/stdout pour les E/S de flux.',
      steps: [
        'open(fichier, mode) : \'r\', \'w\', \'a\', \'rb\' pour binaire',
        'with open(...) as f assure la fermeture du fichier',
        'sys.stdin.readline() pour les entrées de compétition',
        'print(..., file=sys.stderr) pour la sortie d\'erreur',
      ],
      commonMistakes: [
        'Ne pas utiliser with → fuite de descripteur de fichier',
        'Lire un fichier entier en mémoire vs le lire ligne par ligne',
      ],
      practice: [
        'Lis un fichier texte ligne par ligne avec with open',
        'Écris les résultats dans un fichier CSV',
      ],
    },
  },
};

export default overlay;
