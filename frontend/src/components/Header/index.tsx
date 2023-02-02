import { FC } from 'react';
import logo from '@assets/images/logo.png';
import soundOn from '@assets/images/sound_on.svg';
import styles from './styles.module.css';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logo__img} src={logo} alt="Logo" />
        <h1 className={styles.logo__text}>Raccoon Phone</h1>
      </div>
      <img className={styles.sound__img} src={soundOn} alt="Sound On" />
    </header>
  );
};
