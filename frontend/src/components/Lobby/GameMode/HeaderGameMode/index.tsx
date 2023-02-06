import { FC } from 'react';
import styles from './styles.module.css';

export const HeaderGameMode: FC = () => {
  return (
    <header>
      <h2 className={styles.name_container}>GAME MODE</h2>
    </header>
  );
};
