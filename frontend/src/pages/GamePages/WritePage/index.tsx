import { FC } from 'react';
import { ContentBorder } from '@components/UI/ContentBorder';
import { GameProgress } from '@components/UI/GameInfo';
import { Phone } from '@components/SVG/Phone';
import { Input, InputPlaceholders } from '@components/UI/Input';
import { Button, ButtonText } from '@components/UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/redux/store';
import { setSearchWrite, setIsReady } from '@src/redux/reducers/gameReducer';

import styles from './styles.module.css';
import useSocket from '@src/hooks/useSocket';

export const WritePage: FC = () => {
  const { searchWrite, isReady } = useSelector((state: RootState) => state.game);
  const { self } = useSelector((state: RootState) => state.lobby);
  const dispatch = useDispatch();
  const { sendWord } = useSocket();

  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchWrite(event.target.value));
  };

  const onClickHandler = () => {
    dispatch(setIsReady(!isReady));
    // if (isReady) sendWord({ word: searchWrite, writerId: self.userId });
    sendWord({ word: searchWrite, writerId: self.userId, isWriterReady: false });
  };

  return (
    <ContentBorder>
      <section className={styles.container}>
        <GameProgress currentStage={1} totalStages={3} readyPlayers={0} totalPlayers={3} />
        <Phone />
        <h3 className={styles.title}>{isReady ? 'Waiting for other players' : 'Write a sentence'}</h3>
        <div className={styles.row}>
          <Input
            placeholder={InputPlaceholders.sentence}
            disabled={isReady}
            value={searchWrite}
            onChange={changeSearch}
          />
          <Button
            text={isReady ? ButtonText.change : ButtonText.ready}
            onClick={onClickHandler}
            disabled={!searchWrite}
          />
        </div>
      </section>
    </ContentBorder>
  );
};
