import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Escribe un programa que verifique si un número es positivo, negativo o cero.',
  hint: 'Usa if/elif/else. Prueba cada rama cambiando el valor de entrada.',
  explanation: {
    simple: {
      overview: 'Las sentencias if-else permiten que tu programa tome decisiones ejecutando código diferente según condiciones.',
      analogy: 'Como un semáforo: si está en verde, avanza; si está en rojo, detente.',
      steps: [
        'Escribe if condición:',
        'Añade el bloque de código a ejecutar si es True',
        'Añade elif para condiciones adicionales',
        'Añade else para el caso por defecto',
      ],
      visual: `if x > 0:
    print("positivo")
elif x == 0:
    print("cero")
else:
    print("negativo")`,
      commonMistakes: [
        'Olvidar los dos puntos después de la condición',
        'Indentación incorrecta',
        'Usar = en lugar de == para comparar',
      ],
      practice: [
        'Clasifica temperaturas como fría, agradable o caliente',
        'Construye una calculadora de calificaciones con if-elif-else',
      ],
    },
    deepDive: {
      overview: 'Python evalúa condiciones de if como valores truthy/falsy; soporta expresiones condicionales ternarias.',
      steps: [
        'Valores falsy: None, 0, "", [], {}, set()',
        'Ternario: valor_si_true if condición else valor_si_false',
        'Las condiciones de if aceptan cualquier expresión',
        'Usa and/or/not para lógica compuesta',
      ],
      commonMistakes: [
        'No saber que los contenedores vacíos son falsy',
        'Comparar con ==True/==False en lugar de solo la condición',
      ],
      practice: [
        'Usa expresión ternaria para valor absoluto',
        'Prueba la veracidad de diferentes tipos de datos',
      ],
    },
  },
};

export default overlay;
