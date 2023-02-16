import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import { setLineWidth } from '@src/redux/reducers/toolReducer';

import styles from './styles.module.css';

export const Trikness: FC = () => {
  const dispatch = useAppDispatch();
  const { triknesses, currentTrikness } = useAppSelector((state) => state.tool);

  return (
    <div className={styles.wrapper}>
      {triknesses.map((trikness) => {
        const triknessChangeHadler = (event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setLineWidth(event.target.value));
        };

        return (
          <label className={styles.label} key={trikness}>
            <input
              className={styles.radio}
              type="radio"
              name="trikness"
              value={trikness}
              checked={trikness === currentTrikness}
              onChange={triknessChangeHadler}
            />
            <span className={styles.filler} style={{ width: trikness, height: trikness }} />
          </label>
        );
      })}
    </div>
  );
};
