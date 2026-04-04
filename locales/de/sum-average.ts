import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Berechnen Sie Summe und Durchschnitt von scores = [85, 92, 78, 96, 88, 73]. Identifizieren Sie überdurchschnittliche.',
  hint: 'Erst summieren, dann durch Anzahl teilen für Durchschnitt. Filtern mit list comprehension.',
  explanation: {
    simple: {
      overview: 'Alle Zahlen in einer Liste summieren; durch die Anzahl teilen, um den Durchschnitt zu erhalten.',
      analogy: 'Den Kassenbon addieren und dann den durchschnittlichen Artikelpreis berechnen.',
      steps: [
        'total = sum(zahlen) (oder manuell in einer Schleife).',
        'count = len(zahlen).',
        'average = total / count (vorher prüfen: count != 0).',
        'Beide Werte zurückgeben oder ausgeben.',
      ],
      visual: '[1,2,3,4,5] → Summe=15, Länge=5 → Durchschnitt=3.0',
      commonMistakes: [
        'ZeroDivisionError wenn die Liste leer ist.',
        'Ganzzahldivision mit // verliert Nachkommastellen: / statt // verwenden.',
      ],
      practice: [
        'Den Notendurchschnitt einer Klasse berechnen.',
        'Summe und Durchschnitt nur gerader Zahlen berechnen.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Numerisch stabile Summierung (Kahan) reduziert Gleitkomma-Rundungsfehler bei großen Summen.',
      analogy: 'Eine Kompensationsvariable mitführen, die die bei jeder Addition verloren gegangenen Stellen auffängt.',
      steps: [
        'Naiv: total += x (akkumulierter Fehler ~n·ε).',
        'Kahan: Kompensation c verfolgt verlorene Bits; total += (x-c); c = (total-alt)-(x-c).',
        'statistics.mean() in Python nutzt Fraction für exakten rationalen Mittelwert.',
        'Für sehr große Datensätze in Teilsummen aufteilen und kombinieren.',
      ],
      visual: 'Kahan hält Fehler ~ε unabhängig von n; naiv ~n·ε',
      commonMistakes: [
        'sum() auf große Float-Listen nahe der Maschinengenauigkeit anwenden.',
        'NaN-Werte ignorieren, die sich durch Arithmetik fortpflanzen.',
      ],
      practice: [
        'Kahan-Summierung implementieren und Fehler mit naivem Ansatz vergleichen.',
        'NaN mit math.isnan-Filter vor der Summierung herausfiltern.',
      ],
    },
  },
};

export default overlay;
