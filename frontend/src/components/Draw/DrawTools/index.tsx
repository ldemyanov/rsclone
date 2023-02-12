import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/redux/store';
import { setTool } from '@src/redux/reducers/toolReducer';
import { drawToolsArray } from '@src/constants/Draw';
import { DrawToolButton } from '@components/UI/DrawToolButton';
import { undo, redo } from '@src/redux/reducers/canvasReducer';

import styles from './styles.module.css';
import { UndoSVG } from '@components/SVG/Undo';
import { RedoSVG } from '@components/SVG/Redo';

export const DrawTools: FC = () => {
  const dispatch = useDispatch();
  const { canvas, undoArr, redoArr } = useSelector((state: RootState) => state.canvas);

  const undoClickHandler = () => {
    if (canvas && undoArr.length) {
      const ctx = canvas.getContext('2d');
      const dataUrl = undoArr[undoArr.length - 1];
      const canvasImg = new Image();
      if (dataUrl && ctx) {
        canvasImg.src = dataUrl;
        canvasImg.onload = () => {
          dispatch(undo(canvasImg));
        };
      }
    }
  };
  const redoClickHandler = () => {
    if (canvas && redoArr.length) {
      const ctx = canvas.getContext('2d');
      const dataUrl = redoArr[redoArr.length - 1];
      const canvasImg = new Image();
      if (dataUrl && ctx) {
        canvasImg.src = dataUrl;
        canvasImg.onload = () => {
          dispatch(redo(canvasImg));
        };
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      {drawToolsArray.map((DrowTool, index) => {
        const handler = () => dispatch(setTool(new DrowTool.tool(canvas)));
        return (
          <DrawToolButton key={index} isDisabled={false} handler={handler}>
            <DrowTool.toolImg />
          </DrawToolButton>
        );
      })}
      <DrawToolButton isDisabled={undoArr.length === 0} handler={undoClickHandler}>
        <UndoSVG />
      </DrawToolButton>
      <DrawToolButton isDisabled={redoArr.length === 0} handler={redoClickHandler}>
        <RedoSVG />
      </DrawToolButton>
    </div>
  );
};
