import { FC } from 'react';

export interface Route {
  id: number;
  name: string;
  path: string;
  element: FC;
}
