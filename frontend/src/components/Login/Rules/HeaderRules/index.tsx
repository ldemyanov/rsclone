import { FC } from 'react';
import styles from './styles.module.css';

export const HeaderRules: FC = () => {
  return (
    <header>
      <h2 className={styles.name_container}>HOW TO PLAY</h2>
    </header>
  );
};
