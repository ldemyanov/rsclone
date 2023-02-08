import { FC, ReactNode } from 'react';
import styles from './styles.module.css';

interface DrawToolButtonProps {
  children: ReactNode;
  handler: () => void;
}

export const DrawToolButton: FC<DrawToolButtonProps> = ({ children, handler }) => {
  return (
    <button className={styles.drawToolButton} onClick={handler}>
      {children}
    </button>
  );
};
