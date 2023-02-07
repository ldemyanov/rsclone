import { GameResults } from '@src/utils/GameResults';
import { FC } from 'react';

import styles from './styles.module.css';

export const SectionAlbum: FC = () => {
  return (
    <section className={styles.wrapper}>
      {GameResults.map((elem, index) => {
        return (
          <div
            key={index}
            className={`${styles.wrapper_player} ${index % 2 === 0 || index === 0 ? styles.rigth : styles.left}`}>
            <div className={styles.wrapper_icon}>
              <div className={styles.circle}>
                <img src={elem.icon} alt={elem.icon} className={styles.icon} />
              </div>
            </div>
            <h4 className={styles.name}>{elem.name}</h4>
            {index % 2 === 0 ? (
              <div className={styles.description}>{elem.description}</div>
            ) : (
              <div className={styles.description}>
                <img className={styles.description_img} src={elem.description} alt={elem.description} />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};
