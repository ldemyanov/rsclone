import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { TCanvasElement } from '@src/types';
import { pushToUndo, setCanvas } from '@src/redux/reducers/canvasReducer';
import { setLineWidth, setOpacity, setStrokeStyle, setTool } from '@src/redux/reducers/toolReducer';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '@src/constants/Draw';
import TabletRings from '@assets/images/tabletRings.png';
import Pencil from '@src/tools/Pencil';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import Pipette from '@src/tools/Pipette';

import styles from './styles.module.css';
import getCursorStyle from '@src/helpers/getCursorStyle';

export enum TabletTitles {
  draw = 'Draw a',
  guess = 'Guess what it is!',
}

interface TabletProps {
  title: TabletTitles;
}

export const Tablet: FC<TabletProps> = ({ title }) => {
  const dispatch = useAppDispatch();
  const canvasRef = useRef<TCanvasElement>(null);
  const { tool, currentTrikness } = useAppSelector((state) => state.tool);
  const { self } = useAppSelector((state) => state.lobby);
  const { game } = useAppSelector((state) => state.game);
  const cursorStyle = getCursorStyle(styles, currentTrikness, tool);
  const canvasStyles = [styles.canvas, cursorStyle].join(' ');

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

  const [word, setWord] = useState('');
  useMemo(() => {
    setWord(() => {
      const words = game.words.filter((el) => el.painterId === self.userId);
      return words[0].word as string;
    });
  }, [game, self]);

  return (
    <div className={styles.wrapper}>
      <header className={styles.tabletHeader}>
        <img className={styles.tablerRings} src={TabletRings} alt="Tablet rings" />
        <h2 className={styles.tabletTitle}>{title === 'Draw a' ? `${title} ${word}` : title}</h2>
      </header>
      <div className={styles.drawingContainer}>
        <canvas
          className={canvasStyles}
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          onMouseDown={canvasMouseDownHandler}
        />
      </div>
    </div>
  );
};
