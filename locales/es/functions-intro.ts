import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Escribe una función greet(name, greeting=\'Hola\') que devuelva una cadena de saludo formateada.',
  hint: 'Los parámetros por defecto van después de los requeridos. Devuelve un f-string formateado.',
  explanation: {
    simple: {
      overview: 'Las funciones son bloques de código reutilizables que realizan una tarea específica. Se definen con def y se llaman por nombre.',
      analogy: 'Una función es como una receta: la defines una vez con los pasos, luego la "llamas" cada vez que quieras cocinar ese plato.',
      steps: [
        'Escribe def nombre_funcion(parametros):',
        'Añade el cuerpo de la función con indentación',
        'Usa return para enviar un valor de vuelta',
        'Llama a la función con nombre_funcion(argumentos)',
      ],
      visual: `def saludar(nombre):
    return f"Hola, {nombre}!"

print(saludar("Ana"))  # Hola, Ana!`,
      commonMistakes: [
        'Olvidar return — la función devuelve None',
        'Confundir parámetros (definición) con argumentos (llamada)',
        'Llamar a la función antes de definirla',
      ],
      practice: [
        'Escribe una función que calcule el área de un rectángulo',
        'Crea una función que compruebe si un número es primo',
      ],
    },
    deepDive: {
      overview: 'Las funciones de Python son objetos de primera clase; soportan argumentos por defecto, *args, **kwargs y closures.',
      steps: [
        'Los valores por defecto se evalúan UNA VEZ en la definición',
        '*args recoge argumentos posicionales extra como tupla',
        '**kwargs recoge argumentos de palabra clave extra como dict',
        'Las funciones capturan variables del ámbito exterior (closures)',
      ],
      commonMistakes: [
        'Trampa del argumento mutable por defecto: def f(lst=[]) es un error',
        'Confundir ámbito local vs global — usa global con cuidado',
      ],
      practice: [
        'Implementa una función con *args y **kwargs',
        'Crea un closure de contador con estado',
      ],
    },
  },
};

export default overlay;
