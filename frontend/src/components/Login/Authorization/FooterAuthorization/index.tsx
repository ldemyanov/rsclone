import { FC } from 'react';
import { Button, ButtonText } from '@components/UI/Button';
import styles from './styles.module.css';
import { useAnonymousLogin } from '@src/hooks/useAnonymousLogin';

export const FooterAuthorization: FC = () => {

  const login = useAnonymousLogin();

  return (
    <footer className={styles.wrapper}>
      <Button text={ButtonText.start} onClick={login} />
    </footer>
  );
};
