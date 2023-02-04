import { FC } from 'react';
import { ContentBorder } from '@components/UI/ContentBorder';
import { GameProgress } from '@components/UI/GameProgress';
import { Phone } from '@components/SVG/Phone';
import { Input, InputPlaceholders } from '@components/UI/Input';
import { Button, ButtonText } from '@components/UI/Button';

import styles from './styles.module.css';

export const WritePage: FC = () => {
  return (
    <ContentBorder>
      <section className={styles.container}>
        <GameProgress currentStage={1} totalStages={3} />
        <Phone />
        <h3 className={styles.title}>Write a sentence</h3>
        <div className={styles.row}>
          <Input placeholder={InputPlaceholders.sentence} />
          <Button text={ButtonText.ready} onClick={() => null} />
        </div>
      </section>
    </ContentBorder>
  );
};
