import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Corta \'Python Programming\' para obtener \'Prog\'. Luego invierte la cadena completa.',
  hint: 'La sintaxis de corte es s[inicio:fin]. Para invertir usa s[::-1].',
  explanation: {
    simple: {
      overview: 'Las cadenas son texto en Python. Puedes concatenarlas, dividirlas, buscar y transformarlas usando métodos incorporados.',
      analogy: 'Las cadenas son como cadenas de perlas — puedes cortarlas, combinarlas, contar las cuentas o reemplazarlas.',
      steps: [
        'Concatenar: "Hola" + " " + "Mundo"',
        'Dividir: "a,b,c".split(",") → ["a","b","c"]',
        'Reemplazar: "foo".replace("o","0") → "f00"',
        'Formatear: f"Hola {nombre}"',
      ],
      visual: `s = "Python"
s.upper() → "PYTHON"
s[0:3]   → "Pyt"
s[::-1]  → "nohtyP"`,
      commonMistakes: [
        'Las cadenas son inmutables — los métodos devuelven nuevas cadenas',
        'Usar + en un bucle → O(n²); usa join()',
        'Confundir \' \' y "" — ambas funcionan pero sé consistente',
      ],
      practice: [
        'Invierte palabras en una frase',
        'Comprueba si una cadena es un palíndromo',
      ],
    },
    deepDive: {
      overview: 'Las cadenas de Python son secuencias de puntos de código Unicode inmutables; el módulo re maneja patrones.',
      steps: [
        'str.join() es O(n) vs concatenación con + en bucle O(n²)',
        'str.encode() convierte a bytes; bytes.decode() revierte',
        'Las f-strings son más rápidas que .format() y %',
        're.compile() cachea patrones regex para reutilización',
      ],
      commonMistakes: [
        'No saber que las cadenas son iterables sobre caracteres',
        'Olvidar manejar codificaciones Unicode al leer archivos',
      ],
      practice: [
        'Implementa compresión de cadenas (aabbb → a2b3)',
        'Usa regex para validar formatos de email',
      ],
    },
  },
};

export default overlay;
