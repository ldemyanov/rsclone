import { FC } from 'react';
import { OpacitySlider } from '@components/UI/OpacitySlider';
import { Button, ButtonText } from '@components/UI/Button';

import styles from './styles.module.css';

export const BottomPanel: FC = () => {
  return (
    <div className={styles.wrapper}>
      <OpacitySlider />
      <Button text={ButtonText.ready} onClick={() => null} />
    </div>
  );
};
