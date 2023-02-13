import { FC } from 'react';
import { Button, ButtonText } from '@components/UI/Button';
import { useAnonymousLogin } from '@src/hooks/useAnonymousLogin';
import { Link } from 'react-router-dom';
import { IRoute } from '@src/types';
import { routes } from '@src/routes';
import styles from './styles.module.css';
import { useAppSelector } from '@src/redux/store';

export const FooterAuthorization: FC = () => {
  const [, LobbyPage]: IRoute[] = routes;
  const { name } = useAppSelector((state) => state.auth);

  const login = useAnonymousLogin();

  return (
    <footer className={styles.wrapper}>
      <Link className={styles.logo} to={LobbyPage.path}>
        <Button text={ButtonText.start} disabled={name.length < 1} onClick={login} />
      </Link>
    </footer>
  );
};
