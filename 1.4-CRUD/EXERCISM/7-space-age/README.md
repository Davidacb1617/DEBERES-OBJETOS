# Solución al Problema de Space Age

Este ejercicio trata sobre calcular la edad de una persona en otros planetas del sistema solar, dada una cantidad de segundos transcurridos en la Tierra.

## Enfoque

1. **Definición de Constantes y Datos**: Se definen constantes y datos necesarios para calcular la edad en otros planetas, como el tiempo en segundos de un año terrestre y los períodos orbitales relativos de los planetas en comparación con la Tierra.
2. **Implementación de la Función de Cálculo**: Se implementa una función que toma el planeta objetivo y el tiempo en segundos transcurrido en la Tierra como entrada, y devuelve la edad de la persona en ese planeta.

## Solución

```typescript
// Constante que representa el número de segundos en un año terrestre
const EARTH_YEAR_SECONDS = 31_557_600;

// Períodos orbitales relativos de los planetas en comparación con la Tierra
const orbital_period = {
  earth: 1.0,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

// Definición de un tipo que representa los nombres de los planetas
type Planet = keyof typeof orbital_period;

// Función para calcular la edad en otro planeta
export function age(targetPlanet: Planet, seconds: number): number {
  // Calcula la edad dividiendo los segundos transcurridos en la Tierra por el producto del tiempo de un año terrestre y el período orbital del planeta objetivo
  return (
    Math.round(
      (seconds / EARTH_YEAR_SECONDS / orbital_period[targetPlanet]) * 100
    ) / 100
  );
}
```

## Ejemplo de Uso

```typescript
// Calcula la edad en Marte para una persona que ha vivido mil millones de segundos en la Tierra.
const edadEnMarte = age('mars', 1000000000);
console.log(edadEnMarte); // Salida esperada: 35.88
```
