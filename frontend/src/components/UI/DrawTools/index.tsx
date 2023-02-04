import { FC } from 'react';
import { drawToolsArray } from '@src/constants/DrawTools';

import styles from './styles.module.css';

export const DrawTools: FC = () => {
  return (
    <div className={styles.wrapper}>
      {drawToolsArray.map((DrowTool) => {
        return <DrowTool />;
      })}
    </div>
  );
};
