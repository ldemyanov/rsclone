import { FC } from 'react';
import { ContentBorder } from '@components/UI/ContentBorder';
import { GameProgress } from '@components/UI/GameProgress';
import { Pallete } from '@components/UI/Pallete';

import styles from './styles.module.css';

export const DrawPage: FC = () => {
  return (
    <ContentBorder>
      <section className={styles.container}>
        <div className={styles.row}>
          <GameProgress currentStage={1} totalStages={3} />
          <Pallete />
        </div>
      </section>
    </ContentBorder>
  );
};
