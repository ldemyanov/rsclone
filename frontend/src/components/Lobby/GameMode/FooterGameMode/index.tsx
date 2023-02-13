import { FC, useState } from 'react';
import { Button, ButtonText } from '@components/UI/Button';
import styles from './styles.module.css';
import { IRoute } from '@src/types';
import { routes } from '@src/routes';
import { useSelector } from 'react-redux';
import { RootState } from '@src/redux/store';

export const FooterGameMode: FC = () => {
  const [LoginPage]: IRoute[] = routes;
  const { roomID } = useSelector((state: RootState) => state.lobby);

  console.log(`${LoginPage.path}?roomId=${roomID}`);

  const [copy, setCopy] = useState(false);
  const copyLink = () => {
    setCopy(true);
    if (navigator?.clipboard?.writeText) {
      navigator?.clipboard?.writeText(`${window.location.hostname}:${location.port}${LoginPage.path}?roomId=${roomID}`);
    } else {
      alert("Copy doesn't work on http!");
    }
    setTimeout(() => setCopy(false), 800);
  };

  return (
    <footer className={styles.wrapper}>
      <Button text={copy ? ButtonText.copy : ButtonText.invite} onClick={copyLink} />
      <Button text={ButtonText.begin} onClick={() => null} />
    </footer>
  );
};
