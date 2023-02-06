import { FC, ReactNode } from 'react';
import styles from './styles.module.css';

interface ContainerProps {
  children: ReactNode;
}

export const ContainerGameMode: FC<ContainerProps> = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};
