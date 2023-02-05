import { FC } from 'react';
import { ContentBorder } from '@components/UI/ContentBorder';
import { GameProgress } from '@components/UI/GameProgress';
import { Pallete } from '@components/Draw/Pallete';
import { DrawTools } from '@components/Draw/DrawTools';
import { BottomPanel } from '@components/Draw/BottomPanel';

import styles from './styles.module.css';

export const DrawPage: FC = () => {
  return (
    <ContentBorder>
      <section className={styles.container}>
        <GameProgress currentStage={1} totalStages={3} />
        <div className={styles.row}>
          <Pallete />
          <DrawTools />
        </div>
        <div className={styles.row}>
          <BottomPanel />
        </div>
      </section>
    </ContentBorder>
  );
};
