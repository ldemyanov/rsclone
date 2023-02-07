import { FC } from 'react';
import { Button, ButtonText } from '@components/UI/Button';
import styles from './styles.module.css';

export const FooterGameMode: FC = () => {
  return (
    <footer className={styles.wrapper}>
      <Button text={ButtonText.invite} onClick={() => null} />
      <Button text={ButtonText.begin} onClick={() => null} />
    </footer>
  );
};
