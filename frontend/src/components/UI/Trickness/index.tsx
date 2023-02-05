import { FC } from 'react';
import { triknesses } from '@src/constants/DrawTools';

import styles from './styles.module.css';

export const Trikness: FC = () => {
  return (
    <div className={styles.wrapper}>
      {triknesses.map((trikness) => {
        return (
          <label className={styles.label} key={trikness}>
            <input
              className={styles.radio}
              type="radio"
              name="trikness"
              value={trikness}
              onChange={(event) => console.log(event.target.value)}
            />
            <span className={styles.filler} style={{ width: trikness, height: trikness }} />
          </label>
        );
      })}
    </div>
  );
};
