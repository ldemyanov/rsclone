import { FC } from 'react';
import { ContentBorder } from '@components/UI/ContentBorder';
import { GameProgress } from '@components/UI/GameProgress';
import { Pallete } from '@components/UI/Pallete';
import { DrawTools } from '@components/UI/DrawTools';

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
      </section>
    </ContentBorder>
  );
};
