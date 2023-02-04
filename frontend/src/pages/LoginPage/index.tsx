import { FooterAuthorization } from '@components/Login/Authorization/FooterAuthorization';
import { HeaderAuthorization } from '@components/Login/Authorization/HeaderAuthorization';
import { SectionAuthorization } from '@components/Login/Authorization/SectionAuthorization';
import { FooterRules } from '@components/Login/Rules/FooterRules';
import { HeaderRules } from '@components/Login/Rules/HeaderRules';
import { SectionRules } from '@components/Login/Rules/SectionRules';
import { Container } from '@components/UI/Container';
import { ContentBorder } from '@components/UI/ContentBorder';
import { FC, useState } from 'react';
import styles from './style.module.css';

export const LoginPage: FC = () => {
  const [activeButtonRules, setActiveButtonRules] = useState(1);
  return (
    <ContentBorder>
      <div className={styles.layout}>
        <Container>
          <HeaderAuthorization />
          <SectionAuthorization />
          <FooterAuthorization />
        </Container>
        <Container>
          <div className={styles.wrapper_rules}>
            <HeaderRules />
            <SectionRules activeButtonRules={activeButtonRules} />
            <FooterRules activeButtonRules={activeButtonRules} setActiveButtonRules={setActiveButtonRules} />
          </div>
        </Container>
      </div>
    </ContentBorder>
  );
};
