import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/redux/store';
import { setTool } from '@src/redux/reducers/toolReducer';
import { drawToolsArray } from '@src/constants/Draw';
import { DrawToolButton } from '@components/UI/DrawToolButton';

import styles from './styles.module.css';

export const DrawTools: FC = () => {
  const dispatch = useDispatch();
  const { canvas } = useSelector((state: RootState) => state.canvas);

  return (
    <div className={styles.wrapper}>
      {drawToolsArray.map((DrowTool, index) => {
        const handler = () => dispatch(setTool(new DrowTool.tool(canvas)));
        return (
          <DrawToolButton key={index} handler={handler}>
            <DrowTool.toolImg />
          </DrawToolButton>
        );
      })}
    </div>
  );
};
