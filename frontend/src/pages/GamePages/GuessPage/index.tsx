import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import { ContentBorder } from '@components/UI/ContentBorder';
import { Tablet, TabletTitles } from '@components/Draw/Tablet';
import { Input, InputPlaceholders } from '@components/UI/Input';
import { Button, ButtonText } from '@components/UI/Button';
import { setSearchGuess } from '@src/redux/reducers/gameReducer';
import { GameProgress } from '@components/UI/GameInfo';

import styles from './styles.module.css';

export const GuessPage: FC = () => {
  const { searchGuess } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const [textButton, setTextButton] = useState(ButtonText.ready);

  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchGuess(event.target.value));
  };

  const clickButton = () => {
    textButton === ButtonText.ready ? setTextButton(ButtonText.change) : setTextButton(ButtonText.ready);
  };

  return (
    <ContentBorder>
      <GameProgress currentStage={3} totalStages={3} readyPlayers={0} totalPlayers={3} />
      <div className={styles.container}>
        <Tablet title={TabletTitles.guess} />
        <div className={styles.row}>
          <Input
            placeholder={InputPlaceholders.guess}
            disabled={textButton === ButtonText.change}
            value={searchGuess}
            onChange={(event) => changeSearch(event)}
          />
          <Button text={textButton} onClick={clickButton} />
        </div>
      </div>
    </ContentBorder>
  );
};
