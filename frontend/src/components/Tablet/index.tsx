import { FC, useMemo, useState } from 'react';
import TabletRings from '@assets/images/tabletRings.png';
import { useAppSelector } from '@src/redux/store';
import styles from './styles.module.css';
import { Canvas } from '@components/Draw/Canvas';
import { ResultImage } from '@components/UI/ResultImage';

export enum TabletTitles {
  draw = 'Draw a',
  guess = 'Guess what it is!',
}

interface TabletProps {
  title: TabletTitles;
  isCanvas: boolean;
}

export const Tablet: FC<TabletProps> = ({ title, isCanvas }) => {
  const { self } = useAppSelector((state) => state.lobby);
  const { game } = useAppSelector((state) => state.game);
  const [word, setWord] = useState('');

  useMemo(() => {
    setWord(() => {
      const words = game.words.filter((el) => el.painterId === self.userId);
      return words[0].word as string;
    });
  }, [game, self]);

  return (
    <div className={styles.wrapper}>
      <header className={styles.tabletHeader}>
        <img className={styles.tablerRings} src={TabletRings} alt="Tablet rings" />
        <h2 className={styles.tabletTitle}>{title === 'Draw a' ? `${title} ${word}` : title}</h2>
      </header>
      <div className={styles.drawingContainer}>
        {isCanvas ? <Canvas /> : <ResultImage /> } 
      </div>
    </div>
  );
};
