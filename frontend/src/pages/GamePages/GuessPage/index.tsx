import { FC, useState } from 'react';
import { ContentBorder } from '@components/UI/ContentBorder';
import { Tablet, TabletTitles } from '@components/Draw/Tablet';
import { Input, InputPlaceholders } from '@components/UI/Input';
import { Button, ButtonText } from '@components/UI/Button';

import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/redux/store';
import { setSearchGuess } from '@src/redux/reducers/gameReducer';

export const GuessPage: FC = () => {
  const { searchGuess } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const [textButton, setTextButton] = useState(ButtonText.ready);

  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchGuess(event.target.value));
  };

  const clickButton = () => {
    textButton === ButtonText.ready ? setTextButton(ButtonText.change) : setTextButton(ButtonText.ready);
  };

  return (
    <ContentBorder>
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
