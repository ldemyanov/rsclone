import { FC } from 'react';

import styles from './styles.module.css';

export const Pipette: FC = () => {
  return (
    <svg className={styles.pipetteSvg} viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.91667 54.5835L9.83334 49.6668H17.2083L34.4167 32.4585"
        stroke="#FCFFFD"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.83333 49.6668V42.2918L27.0417 25.0835"
        stroke="#FCFFFD"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35.1296 33.1957C35.5902 33.6535 36.2132 33.9105 36.8627 33.9105C37.5122 33.9105 38.1352 33.6535 38.5958 33.1957L40.5625 31.229C41.2262 30.5652 41.2262 29.459 40.5625 28.7707C39.8987 28.0823 39.8742 27.0007 40.5625 26.3123L50.5925 16.2823C51.0496 15.8257 51.4123 15.2834 51.6597 14.6866C51.9071 14.0897 52.0345 13.4499 52.0345 12.8038C52.0345 12.1577 51.9071 11.5179 51.6597 10.921C51.4123 10.3241 51.0496 9.78187 50.5925 9.32524L50.1746 8.90732C49.7179 8.45019 49.1757 8.08754 48.5788 7.84011C47.982 7.59269 47.3422 7.46533 46.696 7.46533C46.0499 7.46533 45.4101 7.59269 44.8132 7.84011C44.2164 8.08754 43.6741 8.45019 43.2175 8.90732L33.1875 18.9619C32.4992 19.6257 31.3929 19.6257 30.7292 18.9619C30.0654 18.2982 28.9346 18.2736 28.2708 18.9619L26.3042 20.904C25.8463 21.3646 25.5893 21.9877 25.5893 22.6371C25.5893 23.2866 25.8463 23.9096 26.3042 24.3702L35.1296 33.1957Z"
        stroke="#FCFFFD"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
