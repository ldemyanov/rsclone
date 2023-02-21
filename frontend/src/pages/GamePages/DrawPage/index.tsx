import { FC, useEffect, useState } from 'react';
import { ContentBorder } from '@components/UI/ContentBorder';
import { GameProgress } from '@components/UI/GameInfo';
import { Pallete } from '@components/Draw/Pallete';
import { Tablet, TabletTitles } from '@components/Tablet';
import { DrawTools } from '@components/Draw/DrawTools';
import { BottomPanel } from '@components/Draw/BottomPanel';

import styles from './styles.module.css';
import { useAppSelector } from '@src/redux/store';

export const DrawPage: FC = () => {
  const { game } = useAppSelector((state) => state.game);
  const { self } = useAppSelector((state) => state.lobby);
  const [word, setWord] = useState('');

  useEffect(() => {
    setWord(() => {
      const words = game.words.filter((el) => el.painterId === self.userId);
      return words[0].word as string;
    });
  }, []);

  return (
    <ContentBorder>
      <section className={styles.container}>
        <GameProgress
          currentStage={2}
          totalStages={3}
          readyPlayers={game.words.filter((el) => el.isPainterReady === true).length}
          totalPlayers={game.words.length}
        />
        <Pallete />
        <div className={styles.column}>
          <Tablet title={`${TabletTitles.draw} ${word}`} />
          <BottomPanel />
        </div>
        <DrawTools />
      </section>
    </ContentBorder>
  );
};
