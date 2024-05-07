# Solución al problema Leap

Este ejercicio consiste en determinar si un año es bisiesto o no, dada una entrada que representa el año.

## Enfoque

1. **Verificación de condiciones de bisiesto**: Se debe determinar si el año dado cumple con las condiciones para ser considerado un año bisiesto.

2. **Implementación de la lógica de verificación**: Se implementa una función que verifica si el año es bisiesto o no, siguiendo las reglas establecidas.

## Solución

Aquí se presenta una solución posible en TypeScript:

```typescript
// Función isLeapYear que verifica si un año es bisiesto
export function isLeapYear(year: number): boolean {
  // Un año es bisiesto si es divisible por 4 pero no por 100, o si es divisible por 400
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Ejemplo de uso
console.log(isLeapYear(2000)); // Salida esperada: true
console.log(isLeapYear(1900)); // Salida esperada: false
console.log(isLeapYear(2024)); // Salida esperada: true
```
