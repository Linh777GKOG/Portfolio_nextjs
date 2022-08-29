import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, I'm Linh <br />
          Full-Stack Developer
        </SectionTitle>
        <SectionText>
          I like to build amazing UI/UX experiences
          <br />
        </SectionText>
        <Button
          onClick={() =>
            (window.location =
              'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=linh777gkog@gmail.com')
          }
        >
          Contact Me
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
