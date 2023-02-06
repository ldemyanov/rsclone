import { IPlayer } from '@src/types';
import PlayerIconLeo from '@assets/images/player_icon_leo.png';
import PlayerIconFox from '@assets/images/player_icon_fox.png';
import PlayerIconTiger from '@assets/images/player_icon_tiger.png';
import PlayerIconEmpty from '@assets/images/player_icon_empty.png';

export const Players: IPlayer[] = [
  {
    icon: PlayerIconLeo,
    name: 'VLADIMIR',
    main: true,
    status: 'active',
  },
  {
    icon: PlayerIconFox,
    name: 'ALEXANDRA',
    main: false,
    status: 'active',
  },
  {
    icon: PlayerIconTiger,
    name: 'LEONID',
    main: false,
    status: 'inactive',
  },
  {
    icon: PlayerIconEmpty,
    name: 'Empty',
    main: false,
    status: 'empty',
  },
  {
    icon: PlayerIconEmpty,
    name: 'Empty',
    main: false,
    status: 'empty',
  },
  {
    icon: PlayerIconEmpty,
    name: 'Empty',
    main: false,
    status: 'empty',
  },
];
