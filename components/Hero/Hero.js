import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Download } from './HeroStyles';
import { BsFillEyeFill } from 'react-icons/bs';

const Hero = (props) => {
  const handleClick = () => {
    window.open(
      'https://docs.google.com/document/d/16pR2zQJlWmoZdzpC70wZzFyY9uZl4fgx1ZKV5Ci-IF8/edit?usp=sharing',
      '_blank'
    );
  };

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            <span>Hi, my name is</span> <br />
            Dylan Cornel
          </SectionTitle>
          <SectionText>Front End Developer</SectionText>
          <Button onClick={handleClick}>View Resume</Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
