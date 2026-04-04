import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Schreiben Sie eine Funktion greet(name, greeting=\'Hallo\'), die einen formatierten Gruß zurückgibt.',
  hint: 'Standardparameter kommen nach erforderlichen. Geben Sie einen formatierten String mit f-String zurück.',
  explanation: {
    simple: {
      overview: 'Funktionen kapseln wiederverwendbaren Code; man ruft sie mit ihrem Namen und Argumenten auf.',
      analogy: 'Ein Rezept: einmal definieren, viele Male mit verschiedenen Zutaten verwenden.',
      steps: [
        'def greet(name): definiert die Funktion.',
        'return schickt einen Wert an den Aufrufer zurück.',
        'Aufruf: result = greet(\'Alice\').',
        'Standardparameter: def greet(name=\'Welt\'):',
      ],
      visual: 'def → [Rumpf gespeichert] → Aufruf → Argumente gebunden → Rumpf ausgeführt → Rückgabewert',
      commonMistakes: [
        'return vergessen; die Funktion gibt implizit None zurück.',
        'Einen eingebauten Namen überschreiben (def list(): ...).',
      ],
      practice: [
        'Eine Funktion zur Berechnung der Kreisfläche schreiben.',
        'Eine Funktion mit Standard- und Schlüsselwortargumenten schreiben.',
      ],
      timeComplexity: 'O(Rumpf)',
      spaceComplexity: 'O(Parameter + lokale Variablen)'
    },
    deepDive: {
      overview: 'Funktionen sind First-Class-Objekte in Python; sie können übergeben, zurückgegeben und gespeichert werden.',
      analogy: 'Funktionen als Werte: eine Liste von Callbacks ist nur eine Liste von Funktionsobjekten.',
      steps: [
        'def erzeugt ein Funktionsobjekt und bindet es an einen Namen.',
        'Closures erfassen freie Variablen aus dem umschließenden Scope.',
        'Dekoratoren sind Funktionen höherer Ordnung, die andere Funktionen umhüllen.',
        '*args sammelt zusätzliche positionelle Argumente; **kwargs Schlüsselwortargumente.',
      ],
      visual: 'outer() → schließt über x → inner() → gibt x+1 zurück',
      commonMistakes: [
        'Mutable-Default-Argument-Falle: def f(lst=[]): lst.append(1) teilt die Liste über alle Aufrufe.',
        'Lokalen und globalen Scope verwechseln ohne das global-Schlüsselwort zu verwenden.',
      ],
      practice: [
        'Einen Dekorator schreiben, der eine Funktion zeitlich misst.',
        'Einen einfachen memoize-Dekorator mit einem Dict bauen.',
      ],
    },
  },
};

export default overlay;
