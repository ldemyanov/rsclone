import { FooterAuthorization } from '@components/Authorization/FooterAuthorization';
import { HeaderAuthorization } from '@components/Authorization/HeaderAuthorization';
import { SectionAuthorization } from '@components/Authorization/SectionAuthorization';
import { Container } from '@components/UI/Container';
import { FC } from 'react';
import styles from './style.module.css';

export const LoginPage: FC = () => {
  return (
    <section className={styles.border}>
      <Container>
        <HeaderAuthorization />
        <SectionAuthorization />
        <FooterAuthorization />
      </Container>
      <Container></Container>
    </section>
  );
};
