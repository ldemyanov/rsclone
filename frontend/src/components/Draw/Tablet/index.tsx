import { FC, useEffect, useRef } from 'react';
import { TCanvasElement } from '@src/types';
import { useDispatch, useSelector } from 'react-redux';
import { setCanvas } from '@src/redux/reducers/canvasReducer';
import { setLineWidth, setTool } from '@src/redux/reducers/toolReducer';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '@src/constants/Draw';
import TabletRings from '@assets/images/tabletRings.png';

import styles from './styles.module.css';
import Pencil from '@src/tools/Pencil';
import { RootState } from '@src/redux/store';

export enum TabletTitles {
  draw = 'Create yout drawing!',
  guess = 'Guess what it is!',
}

interface TabletProps {
  title: TabletTitles;
}

export const Tablet: FC<TabletProps> = ({ title }) => {
  const dispatch = useDispatch();
  const canvasRef = useRef<TCanvasElement>(null);
  const { currentTrikness } = useSelector((state: RootState) => state.tool);
  console.log(canvasRef.current);

  useEffect(() => {
    dispatch(setCanvas(canvasRef.current));
    dispatch(setTool(new Pencil(canvasRef.current)));
    dispatch(setLineWidth(currentTrikness));
  }, []);

  return (
    <div className={styles.wrapper}>
      <header className={styles.tabletHeader}>
        <img className={styles.tablerRings} src={TabletRings} alt="Tablet rings" />
        <h2 className={styles.tabletTitle}>{title}</h2>
      </header>
      <div className={styles.drawingContainer}>
        <canvas className={styles.canvas} ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
      </div>
    </div>
  );
};
