import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implementieren Sie FizzBuzz für 1–30. Erweitern: \'Bazz\' für Vielfache von 7.',
  hint: 'Prüfen Sie zuerst 3 und 5 zusammen (FizzBuzz), dann einzeln. Fügen Sie den 7-Fall hinzu.',
  explanation: {
    simple: {
      overview: 'Gib 1..n aus; ersetze Vielfache von 3 durch Fizz, Vielfache von 5 durch Buzz, beides durch FizzBuzz.',
      analogy: 'Ein Kinderzählspiel, bei dem bestimmte Zahlen durch spezielle Wörter ersetzt werden.',
      steps: [
        'Schleife i von 1 bis n.',
        'if i%15==0: FizzBuzz (kombiniert zuerst prüfen!).',
        'elif i%3==0: Fizz.',
        'elif i%5==0: Buzz.',
        'else: i ausgeben.',
      ],
      visual: '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz',
      commonMistakes: [
        '3 und 5 vor 15 prüfen (15 würde von 3 abgefangen und nur \'Fizz\' ausgeben).',
        'i%3==0 und i%5==0 in elif-Kette statt 15 zuerst zu prüfen.',
      ],
      practice: [
        'Auf FizzBuzzJazz für Vielfache von 7 verallgemeinern.',
        'Eine Version erstellen, die eine Liste von (Divisor, Wort)-Paaren entgegennimmt.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Das FizzBuzz-String-Bau-Muster verhindert elif-Ketten und skaliert auf beliebig viele Regeln.',
      analogy: 'String aufbauen: jedes zutreffende Wort verketten, bei leerem String die Zahl zurückgeben.',
      steps: [
        'result = \'\'',
        'Für jedes (Divisor, Wort) in Regeln: if i % Divisor == 0: result += Wort.',
        'print(result or str(i)).',
        'Skaliert auf beliebig viele Regeln ohne Bedingungen umschreiben.',
      ],
      visual: 'regeln=[(3,\'Fizz\'),(5,\'Buzz\'),(7,\'Jazz\')]; i=105 → \'FizzBuzzJazz\'',
      commonMistakes: [
        'Ein triviales Problem mit Lambdas überdesignen.',
        'Vergessen, die Zahl auszugeben, wenn keine Regel passt.',
      ],
      practice: [
        'Die Wörterbuch-Regelversion implementieren und auf 100 Regeln erweitern.',
        'Einen Generator schreiben, der FizzBuzz-Werte lazy liefert.',
      ],
    },
  },
};

export default overlay;
