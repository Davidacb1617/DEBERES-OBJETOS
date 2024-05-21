# Solución del Ejercicio "Bob"

Este ejercicio se centra en simular las respuestas de Bob, un adolescente con respuestas limitadas y específicas según el tipo de mensaje que recibe.

## Descripción del Problema

Bob responde a mensajes de diferentes maneras según ciertos patrones en el mensaje recibido:

1. **Respuesta a Mensajes Vacíos o Aburridos**: Si el mensaje es vacío o contiene solo espacios, Bob responde con "Fine. Be that way!".
2. **Respuesta a Mensajes Gritados**: Si el mensaje contiene letras en mayúscula y todas las letras son mayúsculas (lo que indica que Bob está siendo gritado), él responde con "Whoa, chill out!".
3. **Respuesta a Preguntas**: Si el mensaje termina con un signo de interrogación y no es gritado, Bob responde con "Sure.".
4. **Respuesta por Defecto**: Para cualquier otro tipo de mensaje, Bob responde con "Whatever.".
5. **Respuesta a Pregunta Gritada**: Para cualquier mensaje con signo de interrogación y en mayusculas, Bob responde con "Calm down, I know what I´m doing!"

## Enfoque de la Solución

La función `hey(message: string): string` implementa la lógica para determinar la respuesta de Bob según el mensaje recibido. Se utilizan funciones auxiliares para verificar si el mensaje es aburrido (`hearsBoring`), gritado (`hearsFreaky`), o una pregunta (`hearsInquisitive`), cada una devolviendo un valor booleano que indica si se cumple el patrón respectivo.

## Implementación de la Función

```typescript
/**
 * Simula las respuestas de Bob basadas en el mensaje recibido.
 */
export function hey(message: string): string {
  if (hearsBoring(message)) {
    return 'Fine. Be that way!';
  }
  if (hearsFreaky(message) && hearsInquisitive(message)) {
    return "Calm down, I know what I'm doing!";
  }
  if (hearsFreaky(message)) {
    return 'Whoa, chill out!';
  }
  if (hearsInquisitive(message.trimRight())) {
    return 'Sure.';
  }
  return 'Whatever.';
}

/**
 * Verifica si el mensaje es vacío o aburrido.
 */
const hearsBoring = (speech: string): boolean => {
  return speech.length === 0 || /^\s*$/.test(speech);
};

/**
 * Verifica si el mensaje está siendo gritado.
 */
const hearsFreaky = (speech: string): boolean => {
  return /[A-Z]/.test(speech) && speech === speech.toUpperCase();
};

/**
 * Verifica si el mensaje es una pregunta.
 */
const hearsInquisitive = (speech: string): boolean => {
  return speech.endsWith('?');
};
```

## Ejemplo de Uso

```typescript
// Ejemplo de uso de la función hey
const respuesta1 = hey('How are you?');
console.log(respuesta1); // Salida esperada: 'Sure.'

const respuesta2 = hey('WATCH OUT!');
console.log(respuesta2); // Salida esperada: 'Whoa, chill out!'

const respuesta3 = hey('   ');
console.log(respuesta3); // Salida esperada: 'Fine. Be that way!'

const respuesta4 = hey("Do you know what you're doing?");
console.log(respuesta4); // Salida esperada: 'Sure.'

const respuesta5 = hey('Hello there.');
console.log(respuesta5); // Salida esperada: 'Whatever.'
```
