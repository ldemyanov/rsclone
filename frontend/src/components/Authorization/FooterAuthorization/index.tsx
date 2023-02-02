import { Button } from '@components/UI/Button';
import { FC } from 'react';
import styles from './styles.module.css';

export const FooterAuthorization: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Button text="START" onClick={() => null} />
    </div>
  );
};
