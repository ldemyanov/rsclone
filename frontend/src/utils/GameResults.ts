import PlayerIconLeo from '@assets/images/icon/lion.png';
import PlayerIconFox from '@assets/images/icon/fox.png';
import PlayerIconTiger from '@assets/images/icon/tiger.png';
import Banan from '@assets/images/banan.png';

export interface IGameResults {
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
