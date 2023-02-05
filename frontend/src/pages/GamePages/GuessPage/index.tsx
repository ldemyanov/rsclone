import { FC } from 'react';
import { ContentBorder } from '@components/UI/ContentBorder';
import { Tablet, TabletTitles } from '@components/Draw/Tablet';
import { Input, InputPlaceholders } from '@components/UI/Input';
import { Button, ButtonText } from '@components/UI/Button';

import styles from './styles.module.css';

export const GuessPage: FC = () => {
  return (
    <ContentBorder>
      <div className={styles.container}>
        <Tablet title={TabletTitles.guess} />
        <div className={styles.row}>
          <Input placeholder={InputPlaceholders.guess} />
          <Button text={ButtonText.ready} onClick={() => null} />
        </div>
      </div>
    </ContentBorder>
  );
};
