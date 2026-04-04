import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Verwenden Sie eine while-Schleife, um Zahlen 1–10 auszugeben, dann deren Summe.',
  hint: 'Halten Sie eine Zählervariable und aktualisieren Sie sie jede Iteration.',
  explanation: {
    simple: {
      overview: 'Eine while-Schleife wiederholt ihren Rumpf, solange eine Bedingung True bleibt.',
      analogy: 'Auf einen Bus warten: immer wieder schauen und einsteigen, wenn er kommt.',
      steps: [
        'Bedingung schreiben: while n > 0:',
        'Die Variable im Schleifenrumpf aktualisieren, um sie irgendwann False zu machen.',
        'break zum vorzeitigen Beenden; continue zum Überspringen des restlichen Rumpfs.',
        'Endlosschleife: while True: ... break wenn fertig.',
      ],
      visual: 'n=3 → True(Rumpf,n=2) → True(Rumpf,n=1) → True(Rumpf,n=0) → False → fertig',
      commonMistakes: [
        'Vergessen, die Schleifenvariable zu aktualisieren → Endlosschleife.',
        '== mit Floats als Schleifenbedingung verwenden (Float-Präzisionsfehler).',
      ],
      practice: [
        'Einen Countdown von 10 bis 1 implementieren.',
        'Benutzereingabe lesen, bis \'beenden\' eingegeben wird.',
      ],
      timeComplexity: 'O(n) Iterationen',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'while ist syntaktischer Zucker für eine if-Prüfung gefolgt von einem Sprung zurück zur Bedingung.',
      analogy: 'Ein CPU-Befehlszyklus: Holen–Dekodieren–Ausführen läuft, bis ein Halt-Signal kommt.',
      steps: [
        'Die Bedingung wird vor jeder Iteration ausgewertet.',
        'Wenn bei der ersten Prüfung False, wird der Rumpf nie ausgeführt.',
        'do-while-Semantik: while True: Rumpf; if not cond: break.',
        'Python optimiert schleifenbasierte Tail-Rekursion durch Loop-Unrolling in manchen Interpretern.',
      ],
      visual: '→ [Bedingung prüfen] → True → [Rumpf] → zurück; False → Ende',
      commonMistakes: [
        'Off-by-one bei zählerbasiertem while (stattdessen for verwenden).',
        'Veränderlichen Zustand verwenden, ohne die Ausführungsreihenfolge zu verstehen.',
      ],
      practice: [
        'Binärsuche mit while statt Rekursion implementieren.',
        'Einfache Game-Loop bauen: while game_running: update(); render().',
      ],
    },
  },
};

export default overlay;
