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

  public static roll(diceSize: number): number {
    return Math.floor(Math.random() * diceSize) + 1;
  }

  public static generateAbilityScore(): number {
    // roll 4 x 6-sided dice
    const rolls = Array.from([6, 6, 6, 6], (dice) => this.roll(dice));

    // discard the lowst dice
    rolls.sort().shift();

    // sum the rest of the dice
    const score = rolls.reduce((acc, cur) => acc + cur);
    return score;
  }

  public static getModifierFor(abilityValue: number): number {
    // calculate modifier as described in exercise description
    let modifier = (abilityValue - 10) / 2;
    return Math.floor(modifier);
  }
}
