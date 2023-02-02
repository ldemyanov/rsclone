import { FC } from 'react';
import styles from './styles.module.css';

interface Button {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<Button> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
