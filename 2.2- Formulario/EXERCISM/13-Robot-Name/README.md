# Documentación del Ejercicio "Robot Name"

Este ejercicio trata sobre la creación y gestión de nombres únicos para robots en TypeScript.

## Descripción del Problema

El problema consiste en crear una clase `Robot` que pueda generar nombres únicos para cada instancia de robot creada. Los nombres deben consistir en dos letras mayúsculas seguidas de tres dígitos, y no deben repetirse entre diferentes robots.

## Estructura de la Clase Robot

La clase `Robot` tiene los siguientes atributos y métodos:

- **Atributo privado `_name`**: Almacena el nombre asignado al robot.
- **Atributo estático `_reservedNames`**: Un conjunto estático que contiene todos los nombres de robots reservados para evitar repeticiones.
- **Método constructor**: Inicializa la instancia de robot generando un nombre único.
- **Propiedad `name`**: Proporciona acceso al nombre actual del robot.
- **Método `generateName()`**: Genera un nombre aleatorio para el robot y lo asigna, asegurándose de que no esté en la lista de nombres reservados.
- **Método `randomName()`**: Genera aleatoriamente un nombre válido para el robot, compuesto por dos letras seguidas de tres dígitos.
- **Método `resetName()`**: Reinicia el nombre del robot generando uno nuevo.
- **Método estático `releaseNames()`**: Limpia la lista de nombres reservados, permitiendo que se vuelvan a usar.

## Implementación de la Clase

```typescript
/**
 * Clase para gestionar nombres únicos de robots.
 */
export class Robot {
  private _name: string;
  public static _reservedNames: Set<string>;

  /**
   * Constructor de la clase Robot.
   * Genera un nombre único para el robot al inicializar.
   */
  constructor() {
    Robot._reservedNames = new Set();
    this._name = this.generateName();
  }

  /**
   * Propiedad para obtener el nombre actual del robot.
   * @returns El nombre actual del robot.
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Genera un nombre único para el robot, asegurándose de que no esté reservado.
   * @returns El nombre generado para el robot.
   */
  generateName(): string {
    let randomName: string;
    do {
      randomName = this.randomName();
    } while (Robot._reservedNames.has(randomName));
    Robot._reservedNames.add(randomName);
    return randomName;
  }

  /**
   * Genera un nombre aleatorio para el robot.
   * @returns Un nombre aleatorio válido para el robot (dos letras seguidas de tres dígitos).
   */
  randomName(): string {
    let name = '';
    for (let i = 0; i < 2; i++) {
      name += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
    }
    for (let i = 0; i < 3; i++) {
      name += '0123456789'[Math.floor(Math.random() * 10)];
    }
    return name;
  }

  /**
   * Reinicia el nombre del robot generando uno nuevo.
   */
  public resetName(): void {
    this._name = this.generateName();
  }

  /**
   * Limpia la lista de nombres reservados, permitiendo que se puedan volver a usar.
   */
  public static releaseNames() {
    this._reservedNames.clear();
  }
}
```

## Uso de la Clase Robot

```typescript
// Ejemplo de uso de la clase Robot
const robot1 = new Robot();
console.log(robot1.name); // Salida esperada: Un nombre aleatorio único para el primer robot

robot1.resetName();
console.log(robot1.name); // Salida esperada: Otro nombre aleatorio único después de reiniciar el nombre

const robot2 = new Robot();
console.log(robot2.name); // Salida esperada: Un nombre aleatorio único para el segundo robot

Robot.releaseNames();
const robot3 = new Robot();
console.log(robot3.name); // Salida esperada: Un nombre aleatorio único después de limpiar los nombres reservados
```
