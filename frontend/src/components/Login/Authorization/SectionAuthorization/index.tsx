import { FC } from 'react';
import { Input, InputPlaceholders } from '@components/UI/Input';
import { setName } from '@src/redux/reducers/authorizationReducer';
import PlayerIconLeo from '@assets/images/player_icon_leo.png';
import reload from '@assets/images/reload.svg';
import styles from './styles.module.css';
import { useAppSelector, useAppDispatch } from '@src/redux/store';

export const SectionAuthorization: FC = () => {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.auth);

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  return (
    <section className={styles.section_authorization}>
      <div className={styles.wrapper_icon}>
        <img src={PlayerIconLeo} alt="Player Icon Leo" />
        <button className={styles.button_reload}>
          <img src={reload} alt="reload" />
        </button>
      </div>
      <Input placeholder={InputPlaceholders.name} onChange={(e) => changeName(e)} value={name} />
    </section>
  );
};
