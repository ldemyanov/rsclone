import { FC, useState } from 'react';
import { ContentBorder } from '@components/UI/ContentBorder';
import { GameProgress } from '@components/UI/GameProgress';
import { Phone } from '@components/SVG/Phone';
import { Input, InputPlaceholders } from '@components/UI/Input';
import { Button, ButtonText } from '@components/UI/Button';

import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/redux/store';
import { setSearchWrite } from '@src/redux/reducers/gameReducer';

export const WritePage: FC = () => {
  const { searchWrite } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const [textButton, setTextButton] = useState(ButtonText.ready);

  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchWrite(event.target.value));
  };

  const clickButton = () => {
    textButton === ButtonText.ready ? setTextButton(ButtonText.change) : setTextButton(ButtonText.ready);
  };

  return (
    <ContentBorder>
      <section className={styles.container}>
        <GameProgress currentStage={1} totalStages={3} />
        <Phone />
        <h3 className={styles.title}>Write a sentence</h3>
        <div className={styles.row}>
          <Input
            placeholder={InputPlaceholders.sentence}
            disabled={textButton === ButtonText.change}
            value={searchWrite}
            onChange={(event) => changeSearch(event)}
          />
          <Button text={textButton} onClick={clickButton} />
        </div>
      </section>
    </ContentBorder>
  );
};
