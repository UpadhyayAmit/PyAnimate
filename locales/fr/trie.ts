import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Construisez un Trie à partir de [\'apple\',\'app\',\'apt\',\'banana\']. Implémentez search et startsWith.',
  hint: 'Chaque nœud est un dict d\'enfants + drapeau is_end. L\'insertion trace caractère par caractère.',
  explanation: {
    simple: {
      overview: 'Un Trie (arbre de préfixes) est une structure arborescente pour stocker des chaînes où les nœuds partagent des préfixes communs.',
      analogy: 'Comme les suggestions de saisie automatique de ton téléphone — les mots commençant par les mêmes lettres partagent les mêmes nœuds initiaux.',
      steps: [
        'Chaque nœud représente un caractère',
        'Insère un mot lettre par lettre',
        'Marque le dernier nœud comme fin de mot',
        'La recherche suit les arêtes des caractères',
      ],
      visual: `Insérer: "chat","chant","chien"
  ch
  ├─a─t (fin)
  │  └─n─t (fin)
  └─i─e─n (fin)`,
      commonMistakes: [
        'Oublier de marquer la fin de mot',
        'Supposer des caractères ASCII uniquement (utiliser un dict pour Unicode)',
      ],
      practice: [
        'Implémente un Trie avec insertion et recherche',
        'Construis une fonction d\'autocomplétion',
      ],
      timeComplexity: 'O(L) par opération, L = longueur du mot',
      spaceComplexity: 'O(ALPHABET × N × L)'
    },
    deepDive: {
      overview: 'Les Tries compressés (Patricia/Radix) réduisent les nœuds ; les Tries de suffixe activent la recherche O(m) de motifs.',
      steps: [
        'Trie compressé : fusionne les nœuds sans branchement',
        'Tableau de suffixes : alternative compacte au Trie de suffixe',
        'Comptage de préfixes : stocke le compte dans chaque nœud',
        'Recherche floue dans un Trie avec BFS par distance d\'édition',
      ],
      commonMistakes: [
        'Utiliser un tableau [26] au lieu de dict (ne couvre pas l\'Unicode)',
        'Pas de nœud de fin de mot → impossible de distinguer "chat" de "chateau"',
      ],
      practice: [
        'Implémante un Trie compressé (Radix)',
        'Résous le problème de la paire XOR maximale avec un Trie binaire',
      ],
    },
  },
};

export default overlay;
