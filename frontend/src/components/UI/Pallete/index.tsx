import { FC } from 'react';
import { palleteColors } from '@src/constants/Pallete';

import styles from './styles.module.css';

export const Pallete: FC = () => {
  return (
    <div className={styles.wrapper}>
      {palleteColors.map((palleteColor) => {
        return <button className={styles.colorButton} style={{ background: palleteColor }} />;
      })}
      <label className={styles.colorLabel}>
        <input className={styles.colorInput} type="color" name="palleteColor" id="palleteColorInput" />
      </label>
    </div>
  );
};
