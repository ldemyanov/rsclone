import { FC } from 'react';
import styles from './styles.module.css';

interface GameProgressProps {
  currentStage: number;
  totalStages: number;
}

export const GameProgress: FC<GameProgressProps> = ({ currentStage, totalStages }) => {
  return <span className={styles.gameProgress}>{`${currentStage} /  ${totalStages}`}</span>;
};
