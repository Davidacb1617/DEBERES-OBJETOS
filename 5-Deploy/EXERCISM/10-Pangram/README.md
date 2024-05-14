# Solución del problema Pangram

Este ejercicio se enfoca en determinar si una oración es un pangrama o no. Un pangrama es una oración que contiene todas las letras del alfabeto al menos una vez.

## Descripción del Problema

Dada una cadena de texto que representa una oración, se debe determinar si esa oración es un pangrama o no. Un pangrama debe contener al menos una vez cada una de las letras del alfabeto inglés (a-z), ignorando mayúsculas y minúsculas.

## Enfoque de la Solución

Para determinar si una oración es un pangrama, primero creamos una cadena que contiene todas las letras del alfabeto inglés en minúsculas. Luego convertimos la oración dada a minúsculas para asegurarnos de que la comparación sea insensible a mayúsculas y minúsculas. Después, iteramos sobre cada letra del alfabeto y verificamos si todas ellas están presentes en la oración dada.

## Implementación de la Función

```typescript
/**
 * Determina si una oración es un pangrama o no.
 */
export function isPangram(sentence: string): boolean {
  // Cadena que contiene todas las letras del alfabeto inglés en minúsculas
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // Convertir la oración dada a minúsculas para una comparación insensible a mayúsculas y minúsculas
  const lowerCaseSentence = sentence.toLowerCase();

  // Verificar si cada letra del alfabeto está presente al menos una vez en la oración dada
  return alphabet
    .split('')
    .every((letter) => lowerCaseSentence.includes(letter));
}
```

## Ejemplo de Uso

```typescript
// Ejemplo de uso de la función isPangram
const pangrama1 = isPangram('The quick brown fox jumps over the lazy dog.');
console.log(pangrama1); // Salida esperada: true

const pangrama2 = isPangram('Pack my box with five dozen liquor jugs.');
console.log(pangrama2); // Salida esperada: true

const pangrama3 = isPangram(
  'How razorback-jumping frogs can level six piqued gymnasts!'
);
console.log(pangrama3); // Salida esperada: true

const noPangrama = isPangram('This is not a pangram.');
console.log(noPangrama); // Salida esperada: false
```

La función `isPangram(sentence)` determina si una oración es un pangrama o no, devolviendo true si lo es y false si no lo es. Esta función realiza una comparación insensible a mayúsculas y minúsculas para garantizar una detección precisa de los pangramas.
