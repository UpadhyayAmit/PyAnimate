import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Modifiez le programme pour afficher votre nom et votre langage préféré.',
  hint: 'Utilisez print() avec un argument de chaîne. N\'oubliez pas les guillemets.',
  explanation: {
    simple: {
      overview: 'Un programme Bonjour Monde est le premier programme que la plupart des programmeurs écrivent. Il affiche simplement "Bonjour, Monde !" à l\'écran.',
      analogy: 'C\'est comme saluer quelqu\'un pour la première fois : simple, direct et la première étape pour se connecter.',
      steps: [
        'Appelle la fonction print()',
        'Passe-lui la chaîne "Bonjour, Monde !"',
        'Python affiche le texte à l\'écran',
      ],
      visual: 'print("Bonjour, Monde !")  →  Bonjour, Monde !',
      commonMistakes: [
        'Oublier les guillemets autour du texte',
        'Écrire Print au lieu de print (Python est sensible à la casse)',
      ],
      practice: [
        'Affiche ton nom à la place de Bonjour Monde',
        'Affiche plusieurs lignes avec plusieurs print()',
      ],
    },
    deepDive: {
      overview: 'print() est une fonction intégrée qui écrit sur la sortie standard. Par défaut elle ajoute un caractère de nouvelle ligne à la fin.',
      steps: [
        'print() appelle sys.stdout.write() en interne',
        'Le paramètre end=\'\\n\' ajoute la nouvelle ligne',
        'Le paramètre sep=\' \' sépare les arguments multiples',
        'flush=True force le vidage du tampon de sortie',
      ],
      commonMistakes: [
        'Confondre print() et return — print affiche, return renvoie une valeur',
        'Ne pas savoir que print() renvoie None',
      ],
      practice: [
        'Utilise print(end="") pour éviter la nouvelle ligne',
        'Affiche plusieurs valeurs : print("a", "b", sep=", ")',
      ],
    },
  },
};

export default overlay;
