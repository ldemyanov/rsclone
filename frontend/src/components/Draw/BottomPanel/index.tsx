import { FC } from 'react';
import { Trikness } from '@components/UI/Trickness';
import { OpacitySlider } from '@components/UI/OpacitySlider';
import { Button, ButtonText } from '@components/UI/Button';

import styles from './styles.module.css';

export const BottomPanel: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Trikness />
      <OpacitySlider />
      <Button text={ButtonText.ready} onClick={() => null} />
    </div>
  );
};
