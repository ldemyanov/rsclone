import { RootState } from '@src/redux/store';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

export const HeaderPlayers: FC = () => {
  const { players } = useSelector((state: RootState) => state.lobby);

  return (
    <header>
      <h2 className={styles.name_container}>PLAYERS {players.length}</h2>
    </header>
  );
};
