import { Route } from './types';
import { LoginPage } from './pages/LoginPage';
import { LobbyPage } from './pages/LobbyPage';
import { GamePage } from './pages/GamePage';
import { ResultsPage } from './pages/ResultsPage';

export const routes: Route[] = [
  {
    id: 1,
    name: 'Login',
    path: '/',
    element: LoginPage,
  },
  {
    id: 2,
    name: 'Lobby',
    path: '/lobby',
    element: LobbyPage,
  },
  {
    id: 3,
    name: 'Game',
    path: '/game',
    element: GamePage,
  },
  {
    id: 4,
    name: 'Results',
    path: 'results',
    element: ResultsPage,
  },
];
