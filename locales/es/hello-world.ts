import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Modifica el programa para imprimir tu nombre y lenguaje favorito.',
  hint: 'Usa print() con un argumento de cadena. Recuerda las comillas alrededor del texto.',
  explanation: {
    simple: {
      overview: 'Un programa Hola Mundo es el primer programa que escribe la mayoría de los programadores. Solo muestra el texto "¡Hola, Mundo!" en la pantalla.',
      analogy: 'Es como saludar a alguien por primera vez: simple, directo y el primer paso para conectar.',
      steps: [
        'Llama a la función print()',
        'Pásale la cadena "¡Hola, Mundo!"',
        'Python muestra el texto en la pantalla',
      ],
      visual: 'print("¡Hola, Mundo!")  →  ¡Hola, Mundo!',
      commonMistakes: [
        'Olvidar las comillas alrededor del texto',
        'Escribir mal Print en lugar de print (Python distingue mayúsculas)',
      ],
      practice: [
        'Muestra tu nombre en lugar de Hola Mundo',
        'Muestra varias líneas con múltiples print()',
      ],
    },
    deepDive: {
      overview: 'print() es una función incorporada que escribe en la salida estándar. Por defecto añade un carácter de nueva línea al final.',
      steps: [
        'print() llama a sys.stdout.write() internamente',
        'El parámetro end=\'\\n\' añade la nueva línea',
        'El parámetro sep=\' \' separa múltiples argumentos',
        'flush=True fuerza la descarga del búfer de salida',
      ],
      commonMistakes: [
        'Confundir print() con return — print muestra, return devuelve un valor',
        'No saber que print() devuelve None',
      ],
      practice: [
        'Usa print(end="") para evitar la nueva línea',
        'Imprime múltiples valores: print("a", "b", sep=", ")',
      ],
    },
  },
};

export default overlay;
