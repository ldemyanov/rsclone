import { HeaderAlbum } from '@components/GameResults/Album/HeaderAlbum';
import { SectionAlbum } from '@components/GameResults/Album/SectionAlbum';
import { HeaderPlayersGameResults } from '@components/GameResults/Players/HeaderPlayersGameResults';
import { SectionPlayersGameResults } from '@components/GameResults/Players/SectionPlayersGameResults';
import { Button } from '@components/UI/Button';
import { Container } from '@components/UI/Container';
import { ContentBorder } from '@components/UI/ContentBorder';
import { FC } from 'react';
import { routes } from '@src/routes';

import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

export const GameResultsPage: FC = () => {
  const navigate = useNavigate()
  const LobbyPage = routes[1];

  return (
    <ContentBorder>
      <div className={styles.layout}>
        <Container size="small">
          <HeaderPlayersGameResults />
          <SectionPlayersGameResults />
        </Container>
        <Container size="big">
          <HeaderAlbum />
          <SectionAlbum />
          <Button text='Back to Start' onClick={() => navigate(LobbyPage.path)}/>
        </Container>
      </div>
    </ContentBorder>
  );
};
