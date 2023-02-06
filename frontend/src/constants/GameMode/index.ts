import { IGameMode } from '@src/types';
import FatsGame from '@assets/images/fats_game.png';
import NormalGame from '@assets/images/normal_game.png';

export const GameModes: IGameMode[] = [
  {
    image: FatsGame,
    name: 'FAST GAME',
    description: 'Only 3 rounds! Be careful and give it your all',
  },
  {
    image: NormalGame,
    name: 'NORMAL GAME',
    description: 'Basic Mode! Alternately write and draw until you run out of moves',
  },
];
