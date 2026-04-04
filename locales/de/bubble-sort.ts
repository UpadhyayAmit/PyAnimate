import type { LessonLocaleOverlay } from '../types';

const bubbleSort: LessonLocaleOverlay = {
  prompt: 'Ändere array zu [9, 1, 5, 3, 7]. Schätze, wie viele swaps es braucht, bevor die array sortiert ist.',
  hint: 'Zähle die orangefarbenen swap-Events in der timeline. Jeder swap verschiebt das größere Element um eine Position nach rechts.',
  useCases: [
    'Sortierkonzepte vermitteln - der visuellste Algorithmus',
    'Fast sortierte arrays erkennen (Early-Exit-Optimierung)',
    'Eingebettete Systeme mit wenig Speicher, wo O(1) space wichtig ist',
  ],
  approach:
    'Bubble sort vergleicht jedes benachbarte Paar und führt einen swap aus, wenn die Reihenfolge falsch ist. Nach jedem vollständigen outer pass steht das größte unsortierte Element garantiert an seiner finalen Position. Wir verwenden nested loops: der outer loop steuert die Durchläufe (n-1), der inner loop steuert Vergleiche (wird pro Durchlauf kürzer, weil das Ende schon sortiert ist). Für große Daten ist das nicht effizient - O(n²) - aber es ist der visuellste Algorithmus zum Lernen von vergleichsbasiertem Sortieren.',
  executionFrames: [
    {
      summary: 'arr = [5, 3, 8, 1, 2] - 5 unsortierte Elemente.',
      why: 'Wir speichern Werte in einer list, damit wir per index auf Elemente zugreifen können (arr[j], arr[j+1]). Bubble sort ist ein in-place Algorithmus: Wir verändern dieselbe list statt eine neue zu erstellen, wodurch die space complexity O(1) bleibt.',
    },
    {
      summary: 'n = 5 - wir brauchen maximal 4 outer passes.',
      why: 'Wir speichern n = len(arr) einmal statt len() in jeder Iteration aufzurufen. Das ist eine Mikro-Optimierung und macht die loop-Grenzen besser lesbar. Wir brauchen n-1 outer passes, weil nach n-1 Durchläufen das kleinste Element garantiert auf Position 0 liegt.',
    },
    {
      summary: 'arr[0]=5 > arr[1]=3 - swap notwendig.',
      why: 'Wir vergleichen arr[j] > arr[j+1] (streng größer), um Stabilität zu erhalten: gleiche Elemente werden nicht geswapt und behalten ihre relative Reihenfolge. Dieser Vergleich ist der Kern jedes vergleichsbasierten Sortierverfahrens.',
    },
    {
      summary: 'Python tuple swap - keine temp variable nötig.',
      why: 'arr[j], arr[j+1] = arr[j+1], arr[j] ist Pythons elegante simultane Zuweisung. In C bräuchte man eine temp variable. Python bewertet zuerst die rechte Seite als tuple und entpackt dann, sodass beide Werte gesichert sind, bevor etwas überschrieben wird.',
    },
    {
      summary: '8 bubble nach rechts - es ist bisher das größte Element.',
      why: 'Man sieht, dass sich 8 in zwei Schritten um zwei Positionen nach rechts bewegt hat. Das größte Element bubble in jedem Durchlauf ans Ende - daher der Name Bubble sort. Nach diesem outer pass (i=0) ist 8 auf seiner finalen Position.',
    },
    {
      summary: '8 ist jetzt auf seiner finalen Position bei index 4.',
      why: "Der inner loop läuft n - i - 1 Mal. Das '- i' ist die Optimierung: Nach Durchlauf i sind die letzten i Elemente bereits sortiert und final. Sie müssen nicht erneut verglichen werden - das reduziert die Gesamtarbeit deutlich.",
    },
    {
      summary: '5 bubble nach rechts. [3, 5, 1, 2, 8] -> [3, 1, 2, 5, 8]',
      why: 'Jeder outer pass fixiert ein weiteres Element. Nach Pass 2 sind sowohl 5 als auch 8 final. Der Algorithmus garantiert Fortschritt selbst im Worst Case: n-1 Durchläufe liefern immer eine sortierte array.',
    },
    {
      summary: 'Final sorted array: [1, 2, 3, 5, 8].',
      why: 'Gesamtvergleiche: n×(n-1)/2 = 10 bei n=5. Deshalb ist Bubble sort O(n²) - die Anzahl der Vergleiche wächst quadratisch. Für n=1000 sind das etwa 500 000 Vergleiche. Merge Sort schafft das in etwa 10 000. Bubble sort ist für Lernen, nicht für Produktion.',
    },
  ],
  explanation: {
    simple: {
      overview:
        'Bubble Sort vergleicht benachbarte Elemente und tauscht sie bei falscher Reihenfolge. In jedem Durchlauf wandert das größte verbleibende Element nach rechts.',
      analogy:
        'Wie Luftblasen im Wasser: die größten Blasen steigen in jeder Runde nach oben.',
      steps: [
        'Liste durchlaufen und arr[j] mit arr[j+1] vergleichen.',
        'Wenn arr[j] > arr[j+1], swap ausführen.',
        'Nach einem Durchlauf steht das größte Element am Ende.',
        'Bereich verkleinern, weil das Ende bereits sorted ist.',
        'Früh abbrechen, wenn kein swap stattfindet.',
      ],
      visual: 'Pass 1: [5,3,8,1,2] -> [3,5,1,2,8]; danach wird der Suchbereich pro Pass kleiner.',
      commonMistakes: [
        'Innere Schleifengrenze nicht verkleinern.',
        '>= statt > verwenden und Stabilität verlieren.',
        'Kein early exit bei 0 swaps.',
      ],
      practice: [
        'Bubble Sort auf bereits sortierter Liste mit/ohne early exit vergleichen.',
        'Erklären, warum Bubble Sort stabil ist.',
        'Auf absteigende Sortierung umstellen.',
      ],
      timeComplexity: 'O(n²) schlechtester/avg Fall, O(n) bester Fall mit early exit',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview:
        'Bubble Sort macht n-1 Durchläufe. Im i-ten Durchlauf landet das Maximum des unsortierten Bereichs auf seiner finalen Position.',
      analogy:
        'Wie wiederholtes Sieben: große Werte rollen in jeder Runde weiter nach rechts.',
      steps: [
        'swapped=false setzen und j von 0 bis n-i-2 iterieren.',
        'arr[j] > arr[j+1] prüfen und bei Bedarf swap.',
        'Bei keinem swap ist das Array schon sortiert (break).',
        'Nach Pass i sind die letzten i Positionen final.',
        'Fortsetzen bis i = n-2 oder früher Abbruch.',
      ],
      visual: 'Der Scan-Bereich schrumpft stufenförmig: n-1, n-2, n-3...',
      commonMistakes: [
        'Off-by-one-Fehler in der inneren Schleife.',
        'len(arr) in jeder Iteration neu berechnen.',
        'Mit falschem Vergleichsschlüssel sortieren.',
      ],
      practice: [
        'Stabilität formal mit striktem > beweisen.',
        'Exakte Vergleichszahl ohne early exit herleiten.',
        'Cocktail Sort implementieren und Swap-Zahlen vergleichen.',
      ],
      timeComplexity: 'O(n²) Vergleiche, O(n²) Swaps im Worst Case',
      spaceComplexity: 'O(1) Hilfsspeicher',
    },
  },
};

export default bubbleSort;
