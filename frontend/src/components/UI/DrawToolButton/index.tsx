import { FC, ReactNode } from 'react';

import styles from './styles.module.css';

interface DrawToolButtonProps {
  children: ReactNode;
}

export const DrawToolButton: FC<DrawToolButtonProps> = ({ children }) => {
  return <button className={styles.drawToolButton}>{children}</button>;
};
