import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, InputPlaceholders } from '@components/UI/Input';
import { setImg, setName } from '@src/redux/reducers/authorizationReducer';
import reload from '@assets/images/reload.svg';
import styles from './styles.module.css';
import { RootState } from '@src/redux/store';
import { icons } from '@src/utils/icon';

export const SectionAuthorization: FC = () => {
  const dispatch = useDispatch();
  const { name, icon } = useSelector((state: RootState) => state.auth);

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  const changeIcon = () => {
    dispatch(setImg(Math.floor(Math.random() * icons.length)));
  };

  return (
    <section className={styles.section_authorization}>
      <div className={styles.wrapper_icon}>
        <img src={icon} alt="Player Icon" />
        <button className={styles.button_reload} onClick={changeIcon}>
          <img src={reload} alt="reload" />
        </button>
      </div>
      <Input placeholder={InputPlaceholders.name} onChange={(e) => changeName(e)} value={name} auth />
    </section>
  );
};
