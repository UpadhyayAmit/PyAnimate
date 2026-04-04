import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Pide al usuario dos números e imprime su suma, diferencia y producto.',
  hint: 'input() siempre devuelve una cadena. Usa int() o float() para convertir antes de operar.',
  explanation: {
    simple: {
      overview: 'input() lee texto del usuario; print() muestra texto en la pantalla. Son tu conexión con el mundo exterior.',
      analogy: 'input() es como hacer una pregunta — esperas la respuesta. print() es como hablar — envías un mensaje.',
      steps: [
        'nombre = input("¿Cómo te llamas? ")',
        'input() siempre devuelve cadena',
        'Convierte con int() o float() si necesitas números',
        'print() muestra resultados en la pantalla',
      ],
      visual: `nombre = input("Nombre: ")  # Espera
edad = int(input("Edad: "))  # Convierte
print(f"Hola {nombre}, tienes {edad} años")`,
      commonMistakes: [
        'Olvidar convertir input() a int/float para cálculos',
        'ValueError si el usuario escribe texto en vez de número',
        'Sin mensaje en input() — confunde al usuario',
      ],
      practice: [
        'Lee dos números y muestra su suma',
        'Lee nombre y edad, muestra saludo personalizado',
      ],
    },
    deepDive: {
      overview: 'input() lee de sys.stdin; print() escribe en sys.stdout. Redirige para scripts automatizados.',
      steps: [
        'sys.stdin.readline() para entrada más rápida en competición',
        'sys.stdout.write() para salida sin nueva línea automática',
        'Usa try/except ValueError para entrada de usuario robusta',
        'Redirige: python script.py < entrada.txt > salida.txt',
      ],
      commonMistakes: [
        'Usar input() en bucles de rendimiento crítico — usa sys.stdin',
        'No manejar EOFError cuando stdin se cierra',
      ],
      practice: [
        'Lee múltiples líneas hasta EOF con sys.stdin',
        'Valida entrada numérica con bucle try/except',
      ],
    },
  },
};

export default overlay;
