import { FC } from 'react';

import styles from './styles.module.css';

export const Line: FC = () => {
  return (
    <svg className={styles.lineSvg} viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.125 37.375V44.75C22.125 47.0677 22.125 48.2266 21.405 48.9466C20.6849 49.6667 19.5261 49.6667 17.2083 49.6667H14.75C12.4323 49.6667 11.2734 49.6667 10.5534 48.9466C9.83334 48.2266 9.83334 47.0677 9.83334 44.75V42.2917C9.83334 39.974 9.83334 38.8151 10.5534 38.095C11.2734 37.375 12.4323 37.375 14.75 37.375H22.125Z"
        stroke="#FCFFFD"
        stroke-width="3"
      />
      <path
        d="M36.875 22.6252V15.2502C36.875 12.9324 36.875 11.7736 37.595 11.0535C38.3151 10.3335 39.4739 10.3335 41.7917 10.3335H44.25C46.5677 10.3335 47.7266 10.3335 48.4466 11.0535C49.1667 11.7736 49.1667 12.9324 49.1667 15.2502V17.7085C49.1667 20.0262 49.1667 21.1851 48.4466 21.9051C47.7266 22.6252 46.5677 22.6252 44.25 22.6252H36.875Z"
        stroke="#FCFFFD"
        stroke-width="3"
      />
      <path d="M36.875 22.625L22.125 37.375L36.875 22.625Z" fill="#FCFFFD" />
      <path d="M36.875 22.625L22.125 37.375" stroke="#FCFFFD" stroke-width="3" />
    </svg>
  );
};
