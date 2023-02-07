import { HeaderAlbum } from '@components/GameResults/Album/HeaderAlbum';
import { SectionAlbum } from '@components/GameResults/Album/SectionAlbum';
import { HeaderPlayersGameResults } from '@components/GameResults/Players/HeaderPlayersGameResults';
import { SectionPlayersGameResults } from '@components/GameResults/Players/SectionPlayersGameResults';
import { Container } from '@components/UI/Container';
import { ContentBorder } from '@components/UI/ContentBorder';
import { FC } from 'react';

import styles from './styles.module.css';

export const GameResultsPage: FC = () => {
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
        </Container>
      </div>
    </ContentBorder>
  );
};
