import { FC } from 'react';
import { Input, InputPlaceholders } from '@components/UI/Input';
import PlayerIconLeo from '@assets/images/player_icon_leo.png';
import reload from '@assets/images/reload.svg';
import styles from './styles.module.css';

export const SectionAuthorization: FC = () => {
  return (
    <section className={styles.section_authorization}>
      <div className={styles.wrapper_icon}>
        <img src={PlayerIconLeo} alt="Player Icon Leo" />
        <button className={styles.button_reload}>
          <img src={reload} alt="reload" />
        </button>
      </div>
      <Input placeholder={InputPlaceholders.name} />
    </section>
  );
};
