# Solución al problema Resistor Color Trio

Este ejercicio implica la creación de una función que decodifica los valores de resistencia de un resistor de tres bandas, dadas las tres bandas de colores como entrada.

## Enfoque

1. **Definición de colores y valores de resistencia**: Se define un enum llamado `ResistorValues` que asigna valores numéricos a los colores de las bandas de un resistor.

2. **Decodificación de valores**: La función `decodedResistorValue` toma un array de tres colores como entrada y devuelve la resistencia en ohms como una cadena de texto. Se calcula el valor principal concatenando los valores correspondientes a los dos primeros colores y luego se multiplica por la cantidad de ceros determinada por el tercer color. Luego, dependiendo del valor resultante, se elige el prefijo correcto para indicar la magnitud del valor en ohms (ohms, kiloohms, megaohms o gigaohms).

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

// Función decodedResistorValue que decodifica los valores de resistencia
export function decodedResistorValue(colors: Color[]): string {
  // Se calcula el valor principal concatenando los valores correspondientes a los dos primeros colores
  const mainValue = `${ResistorValues[colors[0]]}${ResistorValues[colors[1]]}`;
  // Se calcula la cantidad de ceros multiplicando 10 por el valor numérico correspondiente al tercer color
  const zeros = 10 ** ResistorValues[colors[2]];
  // Se multiplica el valor principal por la cantidad de ceros para obtener el valor de la resistencia en ohms
  const valueInOhms = Number(mainValue) * zeros;

  // Se determina el prefijo para indicar la magnitud del valor en ohms
  if (valueInOhms >= 1e9) {
    return `${valueInOhms / 1e9} gigaohms`;
  } else if (valueInOhms >= 1e6) {
    return `${valueInOhms / 1e6} megaohms`;
  } else if (valueInOhms >= 1e3) {
    return `${valueInOhms / 1e3} kiloohms`;
  } else {
    return `${valueInOhms} ohms`;
  }
}
```

Esta solución proporciona una manera eficaz de decodificar los valores de resistencia para resistores de tres bandas de colores, utilizando el enum `ResistorValues` para mapear los colores a sus valores numéricos correspondientes. La función `decodedResistorValue` toma tres colores como entrada y devuelve la resistencia en ohms como una cadena de texto.
