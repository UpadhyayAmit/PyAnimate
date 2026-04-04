import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Trouvez deux indices dans [2,7,11,15] dont la somme est 9. Puis pour cible=18.',
  hint: 'Utilisez une table de hachage: pour chaque nombre, vérifiez si (cible - num) est déjà stocké.',
  explanation: {
    simple: {
      overview: 'Deux-Somme : trouve deux nombres dans un tableau qui s\'additionnent à une cible. Retourne leurs indices.',
      analogy: 'Comme chercher deux produits dans un magasin dont les prix s\'additionnent exactement à ton budget.',
      steps: [
        'Crée un dictionnaire vide',
        'Pour chaque nombre, calcule complement = cible - nombre',
        'Si complement est dans le dict, retourne les deux indices',
        'Sinon, stocke le nombre et son index dans le dict',
      ],
      visual: `nums=[2,7,11,15], cible=9
Complement de 2 = 7 → pas encore vu
Complement de 7 = 2 → vu à index 0 !
Résultat: [0,1]`,
      commonMistakes: [
        'Utiliser O(n²) boucle double imbriquée au lieu de O(n) hashmap',
        'Retourner des valeurs au lieu d\'indices',
      ],
      practice: [
        'Variante : les deux nombres doivent être distincts',
        'Étends à 3Sum et 4Sum',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Deux-Somme est le problème de hashmap classique ; il s\'étend à k-Sum avec complexité O(n^(k-1)) avec tri ou O(n^(k-1)) avec hashmap.',
      steps: [
        'Passe en une fois : stocke et cherche simultanément',
        'Tableau trié + deux-pointeurs : O(n log n) temps, O(1) espace',
        '3Sum : trier + deux-pointeurs O(n²)',
        '4Sum : double boucle + deux-pointeurs O(n³) → O(n²) avec hashmap',
      ],
      commonMistakes: [
        'Utiliser le même élément deux fois s\'il ne peut être utilisé qu\'une fois',
        'Retourner des valeurs au lieu d\'indices pour le problème original',
      ],
      practice: [
        'Résous 3Sum sans doublons',
        'Implémente k-Sum de manière générique',
      ],
    },
  },
};

export default overlay;
