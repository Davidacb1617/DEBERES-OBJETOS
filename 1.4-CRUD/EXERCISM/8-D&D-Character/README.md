# Solución al Problema de D&D Character

Este ejercicio consiste en crear un personaje para el juego de rol Dungeons & Dragons (D&D), con atributos generados aleatoriamente de acuerdo con las reglas del juego.

## Enfoque

1. **Generación de Atributos**: Se deben generar los atributos del personaje de acuerdo con las reglas de D&D, que implican lanzar dados y aplicar modificadores.

2. **Implementación de la Clase**: Se implementa una clase `DnDCharacter` que representa al personaje y contiene métodos estáticos para generar atributos y calcular modificadores.

## Solución

```typescript
//Personaje
export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }
  //Métodos del Personaje
  public static roll(diceSize: number): number {
    return Math.floor(Math.random() * diceSize) + 1;
  }

  public static generateAbilityScore(): number {
    // Lanzar 4 dados de 6 caras
    const rolls = Array.from({ length: 4 }, () => this.roll(6));

    // Descartar el dado más bajo
    rolls.sort().shift();

    // Sumar los valores de los dados restantes
    const score = rolls.reduce((acc, cur) => acc + cur);
    return score;
  }

  public static getModifierFor(abilityValue: number): number {
    // Calcular el modificador según la descripción del ejercicio
    let modifier = (abilityValue - 10) / 2;
    return Math.floor(modifier);
  }
}
```

## Ejemplo de Uso

```typescript
// Crear un nuevo personaje
const character = new DnDCharacter();

// Acceder a los atributos del personaje
console.log('Fuerza:', character.strength);
console.log('Destreza:', character.dexterity);
console.log('Constitución:', character.constitution);
console.log('Inteligencia:', character.intelligence);
console.log('Sabiduría:', character.wisdom);
console.log('Carisma:', character.charisma);
console.log('Puntos de golpe:', character.hitpoints);
```

## Consideraciones Adicionales

- La clase `DnDCharacter` genera aleatoriamente los atributos del personaje según las reglas de D&D.
- Los puntos de golpe se calculan sumando 10 y el modificador de Constitución.
