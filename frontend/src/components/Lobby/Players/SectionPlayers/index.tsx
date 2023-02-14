import { FC } from 'react';
import { RootState } from '@src/redux/store';
import { useSelector } from 'react-redux';
import Crown from '@assets/images/crown.png';
import { KickButton } from '@components/UI/KickButton';
// import useSocket from '@src/hooks/useSocket';
import styles from './styles.module.css';

export const SectionPlayers: FC = () => {
  const { players, selfID, isMain } = useSelector((state: RootState) => state.lobby);

  // const { setStatus } = useSocket();

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
            {isMain && selfID !== elem.userId && <KickButton userId={elem.userId} />}
            {/* <button
              onClick={() => {
                console.log('ready click');
                setStatus('active');
              }}>
              Ready
            </button> */}
          </div>
        );
      })}
    </section>
  );
};
