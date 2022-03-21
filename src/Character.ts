import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _dexterity: number;
  private _defense: number;
  private _energy: Energy;
  private readonly _race: Race;
  private readonly _archetype: Archetype;

  constructor(public name: string, strength?: number, defense?: number) {
    this._archetype = new Mage(name);
    this._strength = strength || getRandomInt(1, 10);
    this._defense = defense || getRandomInt(1, 10);
    this._race = new Elf(name, 10); 
    this._dexterity = this._race.dexterity;
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    const type = this._energy.type_;
    const { amount } = this._energy;

    return {
      amount,
      type_: type,
    } as Energy;
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
      console.log(`${this.name} recebeu ${damage} de dano.`);
    }
    if (this._lifePoints <= 0) this._lifePoints = -1;
    
    console.log(`vida atual de ${this.name} = ${this.lifePoints}\n`);
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    console.log(`${this.name} está atacando ${enemy.name}`);
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    const upgradedLifePoints = this._maxLifePoints + getRandomInt(1, 10);

    this._maxLifePoints = upgradedLifePoints > this._race.maxLifePoints
      ? this._race.maxLifePoints : upgradedLifePoints;

    this._lifePoints = this._maxLifePoints;

    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  public special(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength * 2);
  }
}
