import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Zählen Sie wie oft jedes Wort in \'the cat sat on the mat the cat\' vorkommt.',
  hint: 'Verwenden Sie ein Dictionary: d[w] = d.get(w, 0) + 1.',
  explanation: {
    simple: {
      overview: 'Zähle, wie oft jeder Wert vorkommt, indem du iterierst und in einem Wörterbuch tallierst.',
      analogy: 'Stimmen auszählen: jeder Stimmzettel erhöht den Zähler des Kandidaten um 1.',
      steps: [
        'Ein leeres Dict anlegen: counts = {}.',
        'Für jedes Element: counts[item] = counts.get(item, 0) + 1.',
        'Oder direkt collections.Counter(iterable) verwenden.',
      ],
      visual: '[\'a\',\'b\',\'a\',\'c\',\'b\',\'a\'] → {\'a\':3,\'b\':2,\'c\':1}',
      commonMistakes: [
        'KeyError beim Zugriff auf fehlenden Schlüssel – .get() oder defaultdict verwenden.',
        'Counter.most_common() gibt eine sortierte Liste zurück; für sortierte Ausgabe nicht direkt über Counter iterieren.',
      ],
      practice: [
        'Worthäufigkeiten in einem Satz zählen.',
        'Das häufigste Element ohne Counter finden.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(k) wobei k = Anzahl unterschiedlicher Werte'
    },
    deepDive: {
      overview: 'Counter erbt von dict und fügt arithmetische Operationen sowie most_common() hinzu.',
      analogy: 'Ein Stimmenzähler, der auch Stimmzettel aus zwei Wahlurnen durch Addition zusammenführen kann.',
      steps: [
        'Counter(a) + Counter(b) addiert entsprechende Zähler.',
        'Counter(a) - Counter(b) subtrahiert (löscht Nullen und Negative).',
        'Counter.elements() expandiert zurück in eine Liste.',
        'Counter.update() führt in-place zusammen.',
      ],
      visual: 'Counter(\'ab\') + Counter(\'bc\') → Counter({\'b\':2,\'a\':1,\'c\':1})',
      commonMistakes: [
        'Counter als Menge behandeln – das ignoriert Duplikatzähler.',
        'Subtrahieren kann negative Zähler erzeugen; & für Boden-0-Subtraktion verwenden.',
      ],
      practice: [
        'Worthäufigkeits-Ranking mit Counter.most_common(10) implementieren.',
        'Counter-Subtraktion nutzen, um zu prüfen, ob t ein Anagramm-Teilsatz von s ist.',
      ],
    },
  },
};

export default overlay;
