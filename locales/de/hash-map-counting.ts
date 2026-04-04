import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Gegeben eine Liste von Ganzzahlen, finden Sie alle Elemente die mehr als n/3 mal vorkommen.',
  hint: 'Erstellen Sie erst ein Häufigkeitswörterbuch, dann filtern Sie.',
  explanation: {
    simple: {
      overview: 'Häufigkeitsanalyse von Elementen mit einem Dictionary (Hash Map) in O(1) durchschnittlich pro Zugriff.',
      analogy: 'Wörter in einem Text zählen: ein Notizbuch mit Wort als Schlüssel und Anzahl als Wert.',
      steps: [
        'Erstelle leeres Dict count = {}.',
        'Für jedes Element e: count[e] = count.get(e, 0) + 1.',
        'Oder: verwende collections.Counter(iterable) direkt.',
        'Abfrage: count[e] liefert O(1) im Durchschnitt.',
      ],
      visual: '[\'a\',\'b\',\'a\',\'c\',\'b\',\'a\'] → {\'a\':3, \'b\':2, \'c\':1}',
      commonMistakes: [
        'KeyError wenn Schlüssel nicht vorhanden – dict.get(key, 0) oder defaultdict(int) verwenden.',
        'Counter ist kein reguläres Dict – fehlende Schlüssel geben 0 zurück, nicht KeyError.',
      ],
      practice: [
        'Häufigste k Elemente mit Counter.most_common(k) finden.',
        'Zwei Strings auf Anagramm-Eigenschaft prüfen mit Counter-Vergleich.',
      ],
      timeComplexity: 'O(n) Aufbau, O(1) Ø Zugriff',
      spaceComplexity: 'O(k) wobei k = Anzahl unterschiedlicher Elemente'
    },
    deepDive: {
      overview: 'CPython-Dicts verwenden Open-Addressing mit Probing; seit Python 3.7 ist Einfügungsreihenfolge garantiert.',
      analogy: 'Hash-Kollision: wie zwei Personen denselben Spind wollen – eine muss zum nächsten freien weitersuchen.',
      steps: [
        'Hash-Funktion: slot = hash(key) % table_size.',
        'Open Addressing: bei Kollision probe: slot = (5*slot + 1 + perturb) % size.',
        'Load Factor ~2/3 in CPython – Resize wenn überschritten (amortisiert O(1)).',
        'Counter.subtract() und Counter + Counter vereinfachen Häufigkeitsoperationen.',
      ],
      visual: 'Resize: wenn len > 2/3 * capacity → neues Array der Größe 2x, rehash alle Einträge.',
      commonMistakes: [
        'Dict-Schlüssel müssen hashbar sein – Listen als Schlüssel lösen TypeError aus.',
        'Mutable Default Dict Argument: def f(d={}) teilt Dict zwischen Aufrufen.',
      ],
      practice: [
        'Top-K häufige Elemente mit Heap + Counter implementieren.',
        'LRU Cache konzeptionell mit OrderedDict erklären.',
      ],
    },
  },
};

export default overlay;
