import { FC } from 'react';
import styles from './styles.module.css';

export const HeaderAuthorization: FC = () => {
  return (
    <header>
      <ul className={styles.listAuthorizations}>
        <li className={styles.active}>ANONYMOUSLY</li>
        <li>AUTHORIZATION</li>
      </ul>
    </header>
  );
};
