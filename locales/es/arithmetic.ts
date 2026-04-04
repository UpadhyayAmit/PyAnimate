import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Calcula el área y perímetro de un rectángulo con ancho=7 y alto=4.',
  hint: 'Área = ancho * alto. Perímetro = 2 * (ancho + alto). Usa ** para exponentes.',
  explanation: {
    simple: {
      overview: 'Python soporta las operaciones aritméticas básicas: suma, resta, multiplicación, división, módulo y potencia.',
      analogy: 'Es la calculadora de Python — los mismos operadores que en matemáticas, con algunos extras.',
      steps: ['+ suma, - resta', '* multiplica, / divide (siempre float)', '// división entera, % módulo, ** potencia'],
      visual: `10 + 3 = 13
10 / 3 = 3.333
10 // 3 = 3
10 % 3 = 1
2 ** 8 = 256`,
      commonMistakes: ['Olvidar que / siempre devuelve float', 'Confundir // (floor) con int(a/b) para negativos', '% devuelve resto, no porcentaje'],
      practice: ['Calcula el área de un círculo con math.pi', 'Usa % para comprobar si un número es par o impar'],
    },
    deepDive: {
      overview: 'Los operadores aritméticos de Python aplican reglas de precedencia PEMDAS; los ints tienen precisión arbitraria.',
      steps: [
        'Orden: ** → unario → * / // % → + -',
        'Los floats tienen errores de precisión IEEE 754',
        'divmod(a,b) devuelve (cociente, resto) a la vez',
        'decimal.Decimal para aritmética de precisión exacta',
      ],
      commonMistakes: ['0.1 + 0.2 != 0.3 por punto flotante', 'Confundir -2**2 = -4 vs (-2)**2 = 4'],
      practice: ['Explora divmod() y math.fmod()', 'Compara float vs Decimal para cálculos financieros'],
    },
  },
};

export default overlay;
