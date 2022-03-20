import Race from './Race';

export default class Dwarf extends Race {
  private static instances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 80;
    Dwarf.instances += 1;
  }

  public static createdRacesInstances(): number {
    return Dwarf.instances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}