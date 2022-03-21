import Monster from './Monster';

export default class Dragon extends Monster {
  constructor(public name: string) {
    super(name);
    this._lifePoints = 999;
  }
}