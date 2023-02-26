import { FC, useEffect } from 'react';
import { FooterGameMode } from '@components/Lobby/GameMode/FooterGameMode';
import { HeaderGameMode } from '@components/Lobby/GameMode/HeaderGameMode';
import { SectionGameMode } from '@components/Lobby/GameMode/SectionGameMode';
import { HeaderPlayers } from '@components/Lobby/Players/HeaderPlayers';
import { SectionPlayers } from '@components/Lobby/Players/SectionPlayers';
import { Container } from '@components/UI/Container';
import { ContentBorder } from '@components/UI/ContentBorder';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import { useNavigate } from 'react-router-dom';
import { routes } from '@src/routes';
import { FooterPlayers } from '@components/Lobby/Players/FooterPlayers';
import { resetGame } from '@src/redux/reducers/gameReducer';
import styles from './style.module.css';

export const LobbyPage: FC = () => {
  const { self, players } = useAppSelector((state) => state.lobby);
  const isKicked = players.findIndex((player) => player.userId === self.userId) === -1;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isKicked) {
      const [LoginPage] = routes;
      navigate(LoginPage.path);
    }
    dispatch(resetGame(true));
  }, [players]);

  return (
    <ContentBorder>
      <div className={styles.layout}>
        <Container size="small">
          <HeaderPlayers />
          <SectionPlayers />
          <FooterPlayers />
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
