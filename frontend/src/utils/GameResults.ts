import PlayerIconLeo from '@assets/images/player_icon_leo.png';
import PlayerIconFox from '@assets/images/player_icon_fox.png';
import PlayerIconTiger from '@assets/images/player_icon_tiger.png';
import Banan from '@assets/images/banan.png';

interface IGameResults {
  icon: string;
  name: string;
  description: string;
}

export const GameResults: IGameResults[] = [
  {
    icon: PlayerIconFox,
    name: 'ALEXANDRA',
    description: 'BANANA',
  },
  {
    icon: PlayerIconLeo,
    name: 'VLADIMIR',
    description: Banan,
  },
  {
    icon: PlayerIconTiger,
    name: 'LEONID',
    description: 'BANANA',
  },
];
