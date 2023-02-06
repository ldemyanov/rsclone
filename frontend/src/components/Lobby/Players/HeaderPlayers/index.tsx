import { FC } from 'react';
import styles from './styles.module.css';

export const HeaderPlayers: FC = () => {
  return (
    <header>
      <h2 className={styles.name_container}>PLAYERS 3/6</h2>
    </header>
  );
};
