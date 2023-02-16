import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import { setOpacity } from '@src/redux/reducers/toolReducer';
import getDecimalFromHex from '@src/helpers/getDecimalFromHex';
import getHexFromDecimal from '@src/helpers/getHexFromDecimal';

import styles from './styles.module.css';

export const OpacitySlider: FC = () => {
  const dispatch = useAppDispatch();
  const { opacity } = useAppSelector((state) => state.tool);
  const opacityChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setOpacity(getHexFromDecimal(Number(event.target.value))));
  };
  return (
    <label className={styles.label}>
      <span className={styles.circle}></span>
      <input
        className={styles.slider}
        type="range"
        name="opacity"
        id="opacitySlider"
        min="25"
        max="255"
        value={getDecimalFromHex(opacity)}
        onChange={opacityChangeHandler}
      />
      <span className={styles.circle_fill}></span>
    </label>
  );
};
