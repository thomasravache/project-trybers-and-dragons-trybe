import Race from './Race';

export default class Orc extends Race {
  public static instances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 74;
    Orc.instances += 1;
  }

  public static createdRacesInstances(): number {
    return Orc.instances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}