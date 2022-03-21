import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor(public name: string) {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    console.log(`${this.name} recebeu ${attackPoints} de dano.`);

    if (this._lifePoints <= 0) this._lifePoints = -1;
    console.log(`vida atual de ${this.name} = ${this.lifePoints}\n`);

    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    console.log(`${this.name} está atacando ${enemy.name}`);
    enemy.receiveDamage(this._strength);
  }
}