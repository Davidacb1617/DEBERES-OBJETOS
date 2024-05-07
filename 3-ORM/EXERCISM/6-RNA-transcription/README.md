# Solución al problema RNA Transcription

Este ejercicio implica la conversión de una cadena de ADN a su correspondiente cadena de ARN.

## Enfoque

1. **Definición de complementos de bases nucleotídicas**: Se establece un objeto que mapea cada base nucleotídica de ADN a su complemento en ARN.

2. **Iteración sobre la cadena de ADN**: Se recorre la cadena de ADN y se construye la cadena de ARN correspondiente, utilizando el mapeo definido anteriormente.

## Solución

Aquí se presenta la solución en TypeScript:

```typescript
// Función toRna que convierte una cadena de ADN en su correspondiente cadena de ARN
export function toRna(dnaStrand: string): string {
  const complement: { [key: string]: string } = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };

  let rnaStrand = '';

  for (let nucleotide of dnaStrand) {
    if (!Object.hasOwnProperty.call(complement, nucleotide)) {
      throw new Error('Invalid input DNA.');
    }
    rnaStrand += complement[nucleotide];
  }

  return rnaStrand;
}

// Ejemplo de uso
console.log(toRna('GCTA')); // Salida esperada: "CGAU"
console.log(toRna('ACGTGGTCTTAA')); // Salida esperada: "UGCACCAGAAUU"
```
