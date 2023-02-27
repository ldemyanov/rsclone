import { Button } from '@components/UI/Button';
import { FC } from 'react';
import useSocket from '@src/hooks/useSocket';

import styles from './styles.module.css';

export const FooterPlayers: FC = () => {
  const { resetGame } = useSocket();

  const onClickHandler = () => resetGame();

  return (
    <footer className={styles.footer}>
      <Button text="Back to Start" onClick={onClickHandler} />
    </footer>
  );
};
