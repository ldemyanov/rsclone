import { FC } from 'react';

import styles from './styles.module.css';

export const OpacitySlider: FC = () => {
  return (
    <label className={styles.label}>
      <span className={styles.circle}></span>
      <input className={styles.slider} type="range" name="opacity" id="opacitySlider" />
      <span className={styles.circle_fill}></span>
    </label>
  );
};
