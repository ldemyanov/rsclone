import { FC } from 'react';
import { Trikness } from '@components/UI/Trickness';
import { OpacitySlider } from '@components/UI/OpacitySlider';
import { Button, ButtonText } from '@components/UI/Button';

import styles from './styles.module.css';
import useSocket from '@src/hooks/useSocket';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import { setIsReady } from '@src/redux/reducers/gameReducer';
import { postCanvas } from '@src/api';

export const BottomPanel: FC = () => {
  const { sendImage } = useSocket();
  const dispatch = useAppDispatch();
  const { canvas } = useAppSelector((state) => state.canvas);
  const { isReady } = useAppSelector((state) => state.game);

  const onClickHandler = async () => {
    if (canvas) {
      // console.log(canvas.toDataURL());
      // const data = JSON.stringify(canvas)
      console.log(await postCanvas(canvas));
    }
    // sendImage({ img: '', isPainterReady: isReady });
    dispatch(setIsReady(!isReady));
  };
  return (
    <div className={styles.wrapper}>
      <Trikness />
      <OpacitySlider />
      <Button text={!isReady ? ButtonText.change : ButtonText.ready} onClick={onClickHandler} />
    </div>
  );
};
