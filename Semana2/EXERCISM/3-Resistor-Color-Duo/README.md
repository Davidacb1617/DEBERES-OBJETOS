# Solución al problema Resistor Color Duo

Este ejercicio implica la creación de una función que decodifica los valores de resistencia de un resistor de dos bandas, dadas las dos bandas de colores como entrada.

## Enfoque

1. **Definición de colores y valores de resistencia**: Se define un enum que asigna valores numéricos a los colores de las bandas de un resistor.

2. **Decodificación de valores**: La función `decodedValue` toma un array de dos colores como entrada y devuelve el valor de resistencia correspondiente como un número.

## Solución

Aquí se muestra una posible solución en TypeScript:

```typescript
// Definición del enum ResistorValues
export enum ResistorValues {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9,
}

// Definición del tipo Color
type Color = keyof typeof ResistorValues;

// Función decodedValue que decodifica los valores de resistencia
export function decodedValue([firstColor, secondColor]: Color[]) {
  // Utiliza las claves del enum ResistorValues para obtener los valores correspondientes y los concatena como una cadena
  // Luego convierte la cadena en un número y lo devuelve
  return Number(`${ResistorValues[firstColor]}${ResistorValues[secondColor]}`);
}

// Ejemplo de uso
console.log(decodedValue(['brown', 'black'])); // Salida esperada: 10
console.log(decodedValue(['yellow', 'violet'])); // Salida esperada: 47
console.log(decodedValue(['red', 'orange'])); // Salida esperada: 23
```
