import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Selection Sort',
  hint: 'Trouve le minimum à chaque passage et place-le à sa position correcte.',
  approach: 'À chaque itération, trouvez le minimum dans la partie non triée et échangez-le avec l\'élément en fin du tri.',
  useCases: [
    'Tri simple de petits ensembles de données',
    'Tri en place quand la mémoire est limitée',
    'Enseignement grâce à sa logique claire',
  ],
  explanation: {
    simple: {
      overview: 'Le tri par sélection trouve à plusieurs reprises l\'élément minimum dans la partie non triée et le place en premier.',
      analogy: 'Comme choisir la plus petite carte de ta main, la placer en premier, puis répéter pour le reste.',
      steps: [
        'Trouve le minimum dans le tableau non trié',
        'Échange-le avec le premier élément non trié',
        'Avance la frontière de la partie triée',
        'Répète jusqu\'à ce que tout soit trié',
      ],
      visual: `[64,25,12,22,11]
→ [11,25,12,22,64]
→ [11,12,25,22,64]
→ [11,12,22,25,64]
→ [11,12,22,25,64]`,
      commonMistakes: [
        'Oublier de mettre à jour l\'index du minimum',
        'Effectuer des échanges inutiles quand l\'élément est déjà à sa place',
      ],
      practice: [
        'Implémente le tri par sélection et compte les échanges',
        'Compare le nombre d\'échanges avec le tri à bulles',
      ],
      timeComplexity: 'O(n²) toujours',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Le tri par sélection effectue toujours Θ(n²) comparaisons mais seulement O(n) échanges — bon quand les écritures sont coûteuses.',
      steps: [
        'Toujours O(n²) même sur des données triées — pas adaptatif',
        'Instable : les échanges peuvent changer l\'ordre des doublons',
        'Minimise les écritures : seulement n-1 échanges au maximum',
        'Variante stable possible en décalant au lieu d\'échanger',
      ],
      commonMistakes: [
        'Choisir le tri par sélection quand les données sont presque triées',
        'Oublier la nature instable lors du tri d\'objets complexes',
      ],
      practice: [
        'Implémente une version stable du tri par sélection',
        'Analyse quand le tri par sélection bat le tri par insertion',
      ],
    },
  },
};

export default overlay;
