# Solución al problema Darts

Este ejercicio se centra en calcular la puntuación obtenida en un juego de dardos, donde los dardos se lanzan a un tablero circular con diferentes regiones de puntuación.

## Descripción del Problema

En un juego de dardos, un tablero circular está dividido en varias regiones concéntricas. Dependiendo de dónde aterrice el dardo, el jugador gana una cierta cantidad de puntos. En este ejercicio, se proporcionan las coordenadas (x, y) donde aterrizó un dardo, y se debe calcular la puntuación correspondiente basada en la distancia euclidiana desde el origen (0,0) hasta el punto (x, y).

## Enfoque de la Solución

Para calcular la puntuación, utilizamos la distancia euclidiana entre el punto (x, y) y el origen (0,0). Luego, según esta distancia, determinamos la puntuación de acuerdo con las siguientes reglas:

- Si la distancia es menor o igual a 1 unidad, el jugador gana 10 puntos.
- Si la distancia es menor o igual a 5 unidades pero mayor que 1 unidad, el jugador gana 5 puntos.
- Si la distancia es menor o igual a 10 unidades pero mayor que 5 unidades, el jugador gana 1 punto.
- En cualquier otro caso, el jugador no gana puntos.

## Implementación de la Función

```typescript
/**
 * Calcula la puntuación obtenida en un juego de dardos, dados las coordenadas (x, y) del lanzamiento.
 */
export function score(x: number, y: number): number {
  // Calcula la distancia euclidiana desde el origen (0,0) hasta el punto (x, y)
  const dist = Math.sqrt(x * x + y * y);

  // Determina la puntuación según la distancia calculada
  if (dist <= 1) return 10;
  if (dist <= 5) return 5;
  if (dist <= 10) return 1;

  // En cualquier otro caso, el jugador no gana puntos.
  return 0;
}
```

## Ejemplo de Uso

```typescript
// Ejemplo de uso de la función score
const puntuacion1 = score(0, 0);
console.log(puntuacion1); // Salida esperada: 10

const puntuacion2 = score(3, 4);
console.log(puntuacion2); // Salida esperada: 5

const puntuacion3 = score(7, 8);
console.log(puntuacion3); // Salida esperada: 1

const puntuacion4 = score(11, 11);
console.log(puntuacion4); // Salida esperada: 0
```

En resumen, la función `score(x, y)` calcula la puntuación correspondiente a un lanzamiento de dardo basado en las coordenadas (x, y) del lanzamiento, siguiendo las reglas establecidas del juego de dardos.
