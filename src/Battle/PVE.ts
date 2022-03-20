import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _monsters: SimpleFighter[];

  constructor(character: Fighter, monsters: SimpleFighter[]) {
    super(character);
    this._character = character;
    this._monsters = monsters;
  }

  public fight(): number {
    let ableToFight = true;
    let fightResult = 0;

    while (ableToFight) {
      this.attackRules();

      if (this._character.lifePoints === -1) {
        ableToFight = false;
        fightResult = -1;
        break;
      }
      if (this._monsters.every((monster) => monster.lifePoints === -1)) {
        ableToFight = false;
        fightResult = 1;
        break;
      }
    }

    return fightResult;
  }

  private attackRules() {
    const aliveMonsterIndex = this._monsters
      .findIndex((monster) => monster.lifePoints !== -1);

    this._character
      .attack(this._monsters[aliveMonsterIndex]);

    const aliveMonsters = this._monsters
      .filter((monster) => monster.lifePoints !== -1);

    aliveMonsters.forEach((monster, _index, monsters) => {
      if (monsters.length !== 0) monster.attack(this._character);
    });
  }
}
