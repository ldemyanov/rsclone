import { FC } from 'react';
import { Button, ButtonText } from '@components/UI/Button';
import { useAnonymousLogin } from '@src/hooks/useAnonymousLogin';
import styles from './styles.module.css';
import { useAppSelector } from '@src/redux/store';

export const FooterAuthorization: FC = () => {
  const { name } = useAppSelector((state) => state.auth);

  const login = useAnonymousLogin();

  return (
    <footer className={styles.wrapper}>
      <Button text={ButtonText.start} disabled={name.length < 1} onClick={login} />
    </footer>
  );
};
