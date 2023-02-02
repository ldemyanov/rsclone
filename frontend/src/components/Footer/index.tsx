import { FC } from 'react';
import styles from './styles.module.css';
import { RsShool } from '@components/SVG/RsShool';
import { GitHub } from '@components/SVG/GitHub';

export const Footer: FC = () => {
  return (
    <footer className={styles.wrapper}>
      <a className={styles.rs_school} href="https://rs.school/js/" target="_blank">
        <RsShool />
      </a>
      <div className={styles.year}>2023</div>
      <div className={styles.wrapper_git}>
        <GitHub />
        <div className={styles.line}></div>
        <a href="https://github.com/AleksandraBulova" target="_blank">
          AleksandraBulova
        </a>
        <a href="https://github.com/RussianBoy64" target="_blank">
          RussianBoy64
        </a>
        <a href="https://github.com/ldemyanov" target="_blank">
          ldemyanov
        </a>
      </div>
    </footer>
  );
};
