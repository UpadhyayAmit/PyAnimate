import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Ändern Sie das Programm, um Ihren Namen und Ihre Lieblingssprache auszugeben.',
  hint: 'Verwenden Sie print() mit einem String-Argument. Denken Sie an Anführungszeichen.',
  explanation: {
    simple: {
      overview: 'Hello World ist das klassische erste Programm: einen Begrüßungsstring auf dem Bildschirm ausgeben.',
      analogy: 'Das erstmalige Einschalten eines Lichtschalters – eine kleine Aktion, die beweist, dass das gesamte System funktioniert.',
      steps: [
        'Rufe die print-Funktion auf.',
        'Übergib den String \'Hello, World!\' als Argument.',
        'Die Laufzeitumgebung schreibt ihn auf die Standardausgabe.',
      ],
      visual: 'Quellcode → Interpreter → stdout: Hello, World!',
      commonMistakes: [
        'Die schließende Klammer vergessen.',
        'Einfache und doppelte Anführungszeichen inkonsistent mischen.',
      ],
      practice: [
        'Deinen eigenen Namen ausgeben.',
        'Eine mehrzeilige Nachricht mit zwei print-Aufrufen ausgeben.',
      ],
    },
    deepDive: {
      overview: 'Intern kodiert print den String in Bytes und schreibt ihn auf den stdout-Dateideskriptor.',
      analogy: 'Eine Postdienst-Adressauflösung: Deine Nachricht reist durch OS-Schichten zu einem Terminal-Puffer.',
      steps: [
        'print() ruft intern sys.stdout.write() auf.',
        'write() kodiert mit sys.stdout.encoding.',
        'Das OS leert den Puffer ins Terminal.',
      ],
      visual: 'print → sys.stdout → Dateideskriptor 1 → Terminal',
      commonMistakes: [
        'Annehmen, dass print sofort flusht (flush=True verwenden falls nötig).',
        'Kodierungsprobleme unter Windows nicht berücksichtigen (cp1252 vs utf-8).',
      ],
      practice: [
        'print(end=\'\') verwenden, um den Zeilenumbruch zu unterdrücken.',
        'stdout in eine Datei umleiten und die Ausgabe beobachten.',
      ],
    },
  },
};

export default overlay;
