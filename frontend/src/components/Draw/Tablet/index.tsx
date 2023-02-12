import { FC, useEffect, useRef } from 'react';
import { TCanvasElement } from '@src/types';
import { useDispatch, useSelector } from 'react-redux';
import { pushToUndo, setCanvas } from '@src/redux/reducers/canvasReducer';
import { setLineWidth, setOpacity, setStrokeStyle, setTool } from '@src/redux/reducers/toolReducer';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '@src/constants/Draw';
import TabletRings from '@assets/images/tabletRings.png';
import Pencil from '@src/tools/Pencil';
import { RootState } from '@src/redux/store';
import Pipette from '@src/tools/Pipette';

import styles from './styles.module.css';

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
  const { tool, currentTrikness } = useSelector((state: RootState) => state.tool);

  const canvasMouseDownHandler = () => {
    if (tool instanceof Pipette) {
      dispatch(setStrokeStyle(tool.color));
      dispatch(setOpacity(tool.opacity));
    } else {
      dispatch(pushToUndo(canvasRef.current!.toDataURL()));
    }
  };

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
        <canvas
          className={styles.canvas}
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          onMouseDown={canvasMouseDownHandler}
        />
      </div>
    </div>
  );
};
