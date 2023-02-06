import { GameModes } from '@src/constants/GameMode';
import { FC } from 'react';
import { ContainerGameMode } from '../ContainerGameMode';
import styles from './styles.module.css';

export const SectionGameMode: FC = () => {
  return (
    <section className={styles.wrapper}>
      {GameModes.map((elem, index) => {
        return (
          <ContainerGameMode key={index}>
            <img src={elem.image} alt={elem.image} />
            <h3>{elem.name}</h3>
            <p>{elem.description}</p>
          </ContainerGameMode>
        );
      })}
    </section>
  );
};
