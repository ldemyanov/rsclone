import { FC } from 'react';
import { RootState } from '@src/redux/store';
import { useSelector } from 'react-redux';
import Crown from '@assets/images/crown.png';
import styles from './styles.module.css';
import useSocket from '@src/hooks/useSocket';

export const SectionPlayers: FC = () => {
  const { players } = useSelector((state: RootState) => state.lobby);
  const { excludeUser, setStatus } = useSocket();

  return (
    <section className={styles.wrapper}>
      {players.map((elem, index) => {
        return (
          <div
            key={index}
            className={`
              ${styles.wrapper_player}
              ${elem.status === 'active' && styles.active_player}
              ${elem.status === 'empty' && styles.empty_player}
            `}>
            <div className={styles.circle}>
              <img src={elem.icon} alt={elem.icon} className={styles.icon} />
            </div>
            <h4 className={styles.name}>{elem.name}</h4>
            {elem.main && (
              <div className={`${styles.circle} ${styles.indents}`}>
                <img src={Crown} alt="crown" />
              </div>
            )}
            <button
              onClick={() => {
                console.log("leave click");
                excludeUser(elem.userId);
              }}
            >
              Leave
            </button>
            <button
              onClick={() => {
                console.log("ready click");
                setStatus("active");
              }}
            >
              Ready
            </button>
          </div>
        );
      })}
    </section>
  );
};
