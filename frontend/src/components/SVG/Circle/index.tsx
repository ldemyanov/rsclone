import { FC } from 'react';

import styles from './styles.module.css';

export const Circle: FC = () => {
  return (
    <button className={styles.circleBtn}>
      <svg className={styles.circleSvg} viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.5 51C41.3742 51 51 41.3742 51 29.5C51 17.6259 41.3742 8 29.5 8C17.6259 8 8 17.6259 8 29.5C8 41.3742 17.6259 51 29.5 51Z"
          stroke="#FCFFFD"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};
