import { FC } from 'react';

import styles from './styles.module.css';
import TabletRings from '@assets/images/tabletRings.png';

export const Tablet: FC = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.tabletHeader}>
        <img className={styles.tablerRings} src={TabletRings} alt="Tablet rings" />
        <h2 className={styles.tabletTitle}>Create yout drawing</h2>
      </header>
      <div className={styles.drawingContainer}>
        <canvas className={styles.canvas} />
      </div>
    </div>
  );
};
