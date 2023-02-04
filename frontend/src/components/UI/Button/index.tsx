import { FC } from 'react';
import styles from './styles.module.css';

interface Button {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export enum ButtonText {
  start = 'start',
  ready = 'ready',
  begin = 'begin',
  invite = 'invite',
}

export const Button: FC<Button> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
