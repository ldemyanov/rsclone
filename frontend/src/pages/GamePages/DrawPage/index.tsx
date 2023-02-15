import { FC } from 'react';
import { ContentBorder } from '@components/UI/ContentBorder';
import { GameProgress } from '@components/UI/GameInfo';
import { Pallete } from '@components/Draw/Pallete';
import { Tablet, TabletTitles } from '@components/Draw/Tablet';
import { DrawTools } from '@components/Draw/DrawTools';
import { BottomPanel } from '@components/Draw/BottomPanel';

import styles from './styles.module.css';

export const DrawPage: FC = () => {
  return (
    <ContentBorder>
      <section className={styles.container}>
        <GameProgress currentStage={1} totalStages={3} readyPlayers={1} totalPlayers={3} />
        <Pallete />
        <div className={styles.column}>
          <Tablet title={TabletTitles.draw} />
          <BottomPanel />
        </div>
        <DrawTools />
      </section>
    </ContentBorder>
  );
};
