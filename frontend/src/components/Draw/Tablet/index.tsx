import { FC } from 'react';

import styles from './styles.module.css';
import TabletRings from '@assets/images/tabletRings.png';

export enum TabletTitles {
  draw = 'Create yout drawing!',
  guess = 'Guess what it is!',
}

interface TabletProps {
  title: TabletTitles;
}

export const Tablet: FC<TabletProps> = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.tabletHeader}>
        <img className={styles.tablerRings} src={TabletRings} alt="Tablet rings" />
        <h2 className={styles.tabletTitle}>{title}</h2>
      </header>
      <div className={styles.drawingContainer}>
        <canvas className={styles.canvas} />
      </div>
    </div>
  );
};
