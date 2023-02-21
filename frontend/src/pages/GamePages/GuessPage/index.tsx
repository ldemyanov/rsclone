import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import { ContentBorder } from '@components/UI/ContentBorder';
import { Tablet, TabletTitles } from '@components/Tablet';
import { Input, InputPlaceholders } from '@components/UI/Input';
import { Button, ButtonText } from '@components/UI/Button';
import { setSearchGuess, setSoloResponse } from '@src/redux/reducers/gameReducer';
import { GameProgress } from '@components/UI/GameInfo';

import styles from './styles.module.css';

export const GuessPage: FC = () => {

  const [soloStage, setSoloStage] = useState(0);
  const [textButton, setTextButton] = useState(ButtonText.ready);
  const { searchGuess, game } = useAppSelector((state) => state.game);
  const { isSolo } = useAppSelector((state) => state.lobby);
  const dispatch = useAppDispatch();

  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchGuess(event.target.value));
    if (isSolo) {
      console.log("solo")
    }
  };

  const clickButton = () => {
    if (isSolo) {
      dispatch(setSoloResponse({
        index: soloStage, 
        response: searchGuess,
      }));
      dispatch(setSearchGuess(""));
      
      if (soloStage < game.words.length - 1) {
        setSoloStage((soloStage) => soloStage + 1 );
      }

    } else {
      textButton === ButtonText.ready ? setTextButton(ButtonText.change) : setTextButton(ButtonText.ready);
    }
  };

  return (
    <ContentBorder>
      { isSolo
        ? <GameProgress currentStage={soloStage + 1} totalStages={game.words.length} />
        : <GameProgress currentStage={3} totalStages={3} readyPlayers={0} totalPlayers={3} />
      }
      <div className={styles.container}>
        { isSolo 
          ? <Tablet title={TabletTitles.guess} image={game.words[soloStage].img} />
          : <Tablet title={TabletTitles.guess} image="https://fakeimg.pl/900x600/282828/eae0d0/?text=Fake%20Img&font=lobster%22" />
        }
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
