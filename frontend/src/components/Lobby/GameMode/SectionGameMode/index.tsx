import { GameModes } from '@src/constants/GameMode';
import { useAppSelector } from '@src/redux/store';
import { FC } from 'react';
import { ContainerGameMode } from '../ContainerGameMode';
import styles from './styles.module.css';

export const SectionGameMode: FC = () => {
  const { players } = useAppSelector((state) => state.lobby);
  return (
    <section className={styles.wrapper}>
      {GameModes.map((elem, index) => {
        return (
          <ContainerGameMode key={index} disabled={players.length < 2 ? index === 0 : index === 1}>
            <img src={elem.image} alt={elem.image} />
            <h3>{elem.name}</h3>
            <p className={styles.description}>{elem.description}</p>
          </ContainerGameMode>
        );
      })}
    </section>
  );
};
