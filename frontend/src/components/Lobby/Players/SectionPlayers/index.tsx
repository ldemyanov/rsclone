import { FC } from 'react';
import { RootState } from '@src/redux/store';
import { useSelector } from 'react-redux';
import Crown from '@assets/images/crown.png';
import styles from './styles.module.css';

export const SectionPlayers: FC = () => {
  const { players } = useSelector((state: RootState) => state.lobby);

  return (
    <section className={styles.wrapper}>
      {players.map((elem, index) => {
        return (
          <div key={index} className={styles.wrapper_player}>
            <div className={styles.circle}>
              <img src={elem.icon} alt={elem.icon} className={styles.icon} />
            </div>
            <h4 className={styles.name}>{elem.name}</h4>
            {elem.main && (
              <div className={`${styles.circle} ${styles.indents}`}>
                <img src={Crown} alt="crown" />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};
