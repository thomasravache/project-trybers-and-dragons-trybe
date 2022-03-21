export default interface SimpleFighter {
  name: string;
  lifePoints: number;
  strength: number;
  attack(enemy: SimpleFighter): void;
  receiveDamage(attackPoints: number): void;
}