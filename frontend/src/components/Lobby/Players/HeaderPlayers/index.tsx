import { FC } from 'react';
import { useAppSelector } from '@src/redux/store';
import styles from './styles.module.css';

export const HeaderPlayers: FC = () => {
  const { players } = useAppSelector((state) => state.lobby);

  return (
    <header>
      <h2 className={styles.name_container}>PLAYERS {players.length}</h2>
    </header>
  );
};
