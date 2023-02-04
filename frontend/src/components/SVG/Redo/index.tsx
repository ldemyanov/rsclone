import { FC } from 'react';

import styles from './styles.module.css';

export const Redo: FC = () => {
  return (
    <button className={styles.redoBtn}>
      <svg className={styles.redoSvg} viewBox="0 0 59 60" fill="#FCFFFD" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_159_1064)">
          <path d="M34.4167 52.1252C34.1708 52.1252 33.6792 52.1252 33.4333 51.8794C32.45 51.6335 31.9583 50.6502 31.9583 49.6669V37.3752C31.9583 35.9002 32.9417 34.9169 34.4167 34.9169C35.8917 34.9169 36.875 35.9002 36.875 37.3752V44.2585L52.8542 30.0002L36.875 15.7419V22.6252C36.875 24.1002 35.8917 25.0835 34.4167 25.0835C32.9417 25.0835 31.9583 24.1002 31.9583 22.6252V10.3335C31.9583 9.3502 32.45 8.36686 33.4333 8.12103C34.4167 7.62936 35.4 7.8752 36.1375 8.6127L58.2625 28.2794C58.7542 28.771 59 29.5085 59 30.0002C59 30.4919 58.7542 31.4752 58.2625 31.721L36.1375 51.3877C35.6458 51.8794 34.9083 52.1252 34.4167 52.1252Z" />
          <path d="M2.45833 52.1253C2.2125 52.1253 2.2125 52.1253 1.96667 52.1253C0.7375 51.8795 0 50.8962 0 49.667C0 20.4128 34.1708 20.167 34.4167 20.167C35.8917 20.167 36.875 21.1503 36.875 22.6253C36.875 24.1003 35.8917 25.0837 34.4167 25.0837C33.4333 25.0837 11.0625 25.3295 5.9 42.0462C10.8167 38.6045 19.4208 34.917 34.4167 34.917C35.8917 34.917 36.875 35.9003 36.875 37.3753C36.875 38.8503 35.8917 39.8337 34.4167 39.8337C9.5875 39.8337 4.67083 50.4045 4.67083 50.6503C4.425 51.6337 3.44167 52.1253 2.45833 52.1253Z" />
        </g>
        <defs>
          <clipPath id="clip0_159_1064">
            <rect width="59" height="59" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};
