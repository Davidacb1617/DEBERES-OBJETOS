# Solución al problema Two Fer

Este ejercicio implica la creación de una función que genera una frase en la que se reparte algo entre dos personas.

## Enfoque

1. **Manejo de entradas**: La función debe manejar dos casos: cuando se proporciona un nombre y cuando no se proporciona ninguno. En el primer caso, el nombre proporcionado se incluirá en la frase. En el segundo caso, se usará un nombre genérico.

2. **Construcción de la frase**: La función debe generar una frase que siga un patrón específico, donde se incluya el nombre proporcionado (o un nombre genérico) y la frase indique que una cosa es para el nombre proporcionado y otra cosa es para el que llama a la función.

## Solución

Aquí se muestra una posible Solución en TypeScript:

```typescript
export function twoFer(buyer: string): string {
    if (buyer) {
        return "One for " + buyer + ", one for me.";
    } else {
        return "One for you, one for me.";
    }
}

// Ejemplo de uso
console.log(twoFer("Alice")); // Salida esperada: "One for Alice, one for me."
console.log(twoFer("Bob")); // Salida esperada: "One for Bob, one for me."
console.log(twoFer("")); // Salida esperada: "One for you, one for me."
