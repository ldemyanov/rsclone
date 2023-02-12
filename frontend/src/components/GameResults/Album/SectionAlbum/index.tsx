import { GameResults, IGameResults } from '@src/utils/GameResults';
import { FC, useEffect, useState } from 'react';

import styles from './styles.module.css';

export const SectionAlbum: FC = () => {
  const [results, setResults] = useState<IGameResults[]>([]);

  useEffect(() => {
    let currentCount = 0;
    const timer = setInterval(() => {
      if (GameResults[currentCount]) {
        setResults((prev) => [...prev, GameResults[currentCount++]]);
      } else {
        clearInterval(timer);
      }
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className={styles.wrapper}>
      {results.map((elem, index) => {
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
