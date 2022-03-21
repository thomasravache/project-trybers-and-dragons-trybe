import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1: Character = new Character('Thorin');
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

const player2: Character = new Character('Azog', 10, 3);
const player3: Character = new Character('Thorin', 6, 8);

const monster1: Monster = new Monster('Warg');
const monster2: Monster = new Dragon('Smaug, O Terrível');

const pvp: PVP = new PVP(player2, player3);

const pve: PVE = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

runBattles([pvp]);

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};
