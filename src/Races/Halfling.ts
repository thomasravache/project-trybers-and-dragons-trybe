import Race from './Race';

export default class Halfling extends Race {
  public static instances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 60;
    Halfling.instances += 1;
  }

  public static createdRacesInstances(): number {
    return Halfling.instances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}