import { namesRules, textsRules } from '@src/constants/Rules';
import { FC } from 'react';
import styles from './styles.module.css';

interface Props {
  activeButtonRules: number;
}

export const SectionRules: FC<Props> = ({ activeButtonRules }) => {
  return (
    <section className={styles.wrapper_rules}>
      <h4 className={styles.name_rules}>{namesRules[activeButtonRules - 1]}</h4>
      <p className={styles.text_rules}>{textsRules[activeButtonRules - 1]}</p>
    </section>
  );
};
