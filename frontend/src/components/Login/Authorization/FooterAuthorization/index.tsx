import { FC } from 'react';
import { Button, ButtonText } from '@components/UI/Button';
import styles from './styles.module.css';

export const FooterAuthorization: FC = () => {
  return (
    <footer className={styles.wrapper}>
      <Button text={ButtonText.start} onClick={() => null} />
    </footer>
  );
};
