import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Bitten Sie den Benutzer um zwei Zahlen und geben Sie deren Summe, Differenz und Produkt aus.',
  hint: 'input() gibt immer einen String zurück. Konvertieren Sie vor Berechnungen mit int() oder float().',
  explanation: {
    simple: {
      overview: 'input() liest eine Zeile vom Benutzer; print() schreibt auf den Bildschirm.',
      analogy: 'Ein Getränkeautomat: du tippst einen Code (Eingabe), er gibt ein Getränk aus (Ausgabe).',
      steps: [
        'name = input(\'Name eingeben: \') pausiert für Benutzereingabe.',
        'Der Benutzer tippt und drückt Enter; input() gibt den String zurück.',
        'print(f\'Hallo, {name}!\') zeigt das Ergebnis an.',
      ],
      visual: 'stdin → input() → Variable → print() → stdout',
      commonMistakes: [
        'Vergessen, dass input() immer einen String zurückgibt; mit int() für Zahlen konvertieren.',
        'Den Prompt-String weglassen und den Benutzer verwirren.',
      ],
      practice: [
        'Zwei Zahlen abfragen, addieren und die Summe ausgeben.',
        'Fehlerhafte Eingaben mit try/except ValueError behandeln.',
      ],
    },
    deepDive: {
      overview: 'input() umhüllt sys.stdin.readline(), entfernt das abschließende Newline und gibt immer str zurück.',
      analogy: 'Ein Netzwerk-Socket-Lesen: Daten kommen als Bytes an, werden vor dem Zugriff zu einem String dekodiert.',
      steps: [
        'sys.stdin.readline() liest bis zum Newline.',
        'Das Newline wird entfernt.',
        'Der Rückgabewert ist immer str, unabhängig vom Inhalt.',
      ],
      visual: 'sys.stdin (Bytes) → decode(encoding) → str → deine Variable',
      commonMistakes: [
        'Eingaben aus einer Datei pipen und EOF erreichen: try/except EOFError verwenden.',
        'input() in asynchronem Code blockiert; asyncio-kompatible IO verwenden.',
      ],
      practice: [
        'Eine Datei auf stdin umleiten und mehrere Werte lesen.',
        'Ein einfaches REPL bauen, das Eingaben in Großbuchstaben zurückgibt bis \'quit\'.',
      ],
    },
  },
};

export default overlay;
