# Solución del Ejercicio "Matrix"

Este ejercicio se centra en trabajar con matrices representadas como cadenas de texto en TypeScript.

## Descripción del Problema

El objetivo es crear una clase `Matrix` que pueda tomar una cadena de entrada y permitir acceder a las filas y columnas de la matriz representada por esa cadena.

## Estructura de la Clase Matrix

La clase `Matrix` tiene los siguientes atributos y métodos:

- **Atributo `input`**: Una cadena que representa la matriz.
- **Método constructor**: Inicializa la clase con la cadena de entrada proporcionada.
- **Propiedad `rows`**: Devuelve un arreglo bidimensional de números, donde cada subarreglo representa una fila de la matriz.
- **Propiedad `columns`**: Devuelve un arreglo bidimensional de números, donde cada subarreglo representa una columna de la matriz.

## Implementación de la Clase

```typescript
/**
 * Clase para manejar operaciones con matrices representadas como cadenas de texto.
 */
export class Matrix {
  input: string;

  /**
   * Constructor de la clase Matrix.
   */
  constructor(input: string) {
    this.input = input;
  }

  /**
   * Obtiene las filas de la matriz como un arreglo bidimensional de números.
   */
  get rows(): number[][] {
    return this.input.split('\n').map((row) => row.split(' ').map(Number));
  }
  /**
   * Obtiene las columnas de la matriz como un arreglo bidimensional de números.
   */

  get columns(): number[][] {
    let matrix = this.rows;
    let cols: number[][] = [];

    for (let i = 0; i < matrix[0].length; i++) {
      cols[i] = matrix.map((row) => row[i]);
    }

    return cols;
  }
}
```

## Uso de la Clase Matrix

```typescript
// Ejemplo de uso de la clase Matrix
const inputMatrix = '1 2 3\n4 5 6\n7 8 9';
const matrix = new Matrix(inputMatrix);

const filas = matrix.rows;
console.log(filas);
// Salida esperada: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const columnas = matrix.columns;
console.log(columnas);
// Salida esperada: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```
