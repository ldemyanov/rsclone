import { FooterGameMode } from '@components/Lobby/GameMode/FooterGameMode';
import { HeaderGameMode } from '@components/Lobby/GameMode/HeaderGameMode';
import { SectionGameMode } from '@components/Lobby/GameMode/SectionGameMode';
import { HeaderPlayers } from '@components/Lobby/Players/HeaderPlayers';
import { SectionPlayers } from '@components/Lobby/Players/SectionPlayers';
import { Container } from '@components/UI/Container';
import { ContentBorder } from '@components/UI/ContentBorder';
import { FC } from 'react';
import styles from './style.module.css';

export const LobbyPage: FC = () => {
  return (
    <ContentBorder>
      <div className={styles.layout}>
        <Container size="small">
          <HeaderPlayers />
          <SectionPlayers />
        </Container>
        <Container size="big">
          <HeaderGameMode />
          <SectionGameMode />
          <FooterGameMode />
        </Container>
      </div>
    </ContentBorder>
  );
};
