import { FC } from 'react';

import styles from './styles.module.css';

export const UndoSVG: FC = () => {
  return (
    <svg className={styles.undoSvg} viewBox="0 0 59 60" fill="#FCFFFD" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.5833 52.1072C24.0917 52.1072 23.3542 51.8614 22.8625 51.3697L0.7375 31.7031C0.245833 31.4572 0 30.7197 0 29.9822C0 29.2447 0.245833 28.5072 0.7375 28.2614L22.8625 8.59475C23.6 7.85725 24.5833 7.85725 25.5667 8.10308C26.55 8.34892 27.0417 9.33225 27.0417 10.3156V22.6072C27.0417 24.0822 26.0583 25.0656 24.5833 25.0656C23.1083 25.0656 22.125 24.0822 22.125 22.6072V15.7239L6.14583 29.9822L22.125 44.2406V37.3572C22.125 35.8822 23.1083 34.8989 24.5833 34.8989C26.0583 34.8989 27.0417 35.8822 27.0417 37.3572V49.6489C27.0417 50.6322 26.55 51.6156 25.5667 51.8614C25.3208 52.1072 24.8292 52.1072 24.5833 52.1072Z" />
      <path d="M56.5417 52.1073C55.5583 52.1073 54.575 51.6156 54.3292 50.6323C54.3292 50.6323 49.4125 39.8156 24.5833 39.8156C23.1083 39.8156 22.125 38.8323 22.125 37.3573C22.125 35.8823 23.1083 34.8989 24.5833 34.8989C39.5792 34.8989 48.1833 38.5864 53.1 42.0281C47.9375 25.3114 25.5667 25.0656 24.5833 25.0656C23.1083 25.0656 22.125 24.0823 22.125 22.6073C22.125 21.1323 23.1083 20.1489 24.5833 20.1489C24.8292 20.1489 59 20.3948 59 49.6489C59 50.8781 58.2625 51.8614 57.0333 52.1073C56.7875 52.1073 56.7875 52.1073 56.5417 52.1073Z" />
    </svg>
  );
};
