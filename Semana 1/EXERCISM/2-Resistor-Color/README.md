# Solución al problema Resistor-Color

## Problema

1. **Definir los colores y sus valores asociados:** El primer paso es definir una lista de colores y sus valores asociados. En el caso de este problema, se utilizan los colores estándar de las bandas de resistencia, que representan dígitos numéricos del 0 al 9.
   
2. **Mapeo de colores a valores numéricos:** Dado un color de banda de resistencia, el siguiente paso es mapear ese color a su valor numérico correspondiente. Este mapeo es estático y se puede realizar mediante una estructura de datos como un diccionario o un mapa.
   
3. **Cálculo del valor de resistencia:** Una vez que tenemos los valores numéricos asociados a cada color de banda, podemos calcular el valor de resistencia total utilizando la fórmula adecuada. Esto implica la manipulación de los dígitos numéricos y su posición según la banda de resistencia.

## Solución

Aquí hay una posible solución en TypeScript:

```typescript
export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

export const colorCode = (color: string):number => {
let code = COLORS.indexOf(color)
  return code;
}

// Ejemplo de uso
console.log(ResistorColor.decodedValue(["brown", "green"])); // Salida esperada: 15
