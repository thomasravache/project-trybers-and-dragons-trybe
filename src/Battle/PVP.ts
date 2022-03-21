import Fighter from '../Fighter';
import { sleep } from '../utils';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;
  
  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;

    console.log('------------\n BATALHA PVP INSTANCIADA \n------------');
    sleep(500);
  }

  public fight(): number {
    this.fightStartMessage();
    let ableToFight = true; let fightResult = 0; let rotate = 1;

    while (ableToFight) {
      if (this._player1.lifePoints === -1) {
        ableToFight = false;
        fightResult = -1; console.log(`${this._player1.name} foi derrotado.`);
        break;
      } this._player1.attack(this._player2);

      if (this._player2.lifePoints === -1) {
        ableToFight = false;
        fightResult = 1; console.log(`${this._player2.name} foi derrotado.`);
        break;
      } this._player2.attack(this._player1);
      console.log(`Fim da rodada: ${rotate}\n`);
      rotate += 1;
      sleep(200);
    }

    return fightResult;
  }

  private fightStartMessage(): void {
    console.log(`\n${this._player1.name} VS ${this._player2.name}\n`);
    sleep(1000);
    console.log('A luta está prestes a começar...');
    sleep(1000);
    console.log('Preparados?!');
    sleep(1000);
    console.log('Lutem!\n');
    sleep(1000);
  }
}