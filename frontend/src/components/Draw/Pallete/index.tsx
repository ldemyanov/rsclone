import { RootState } from '@src/redux/store';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStrokeStyle } from '@src/redux/reducers/toolReducer';

import styles from './styles.module.css';

export const Pallete: FC = () => {
  const dispatch = useDispatch();
  const { colors, currentColor } = useSelector((state: RootState) => state.tool);

  const inputColorChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    dispatch(setStrokeStyle(event.target.value));
  };

  return (
    <div className={styles.wrapper}>
      {colors.map((color, index) => {
        const colorChangeHandler = () => {
          console.log(color);
          dispatch(setStrokeStyle(color));
        };

        return (
          <button
            className={styles.colorButton}
            style={{ background: color }}
            key={index}
            onClick={colorChangeHandler}
          />
        );
      })}
      <label className={styles.colorLabel}>
        <input
          className={styles.colorInput}
          type="color"
          value={currentColor}
          onChange={inputColorChangeHandler}
          name="palleteColor"
          id="palleteColorInput"
        />
      </label>
    </div>
  );
};
