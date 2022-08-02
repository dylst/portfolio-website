import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiJavascript,
  SiMaterialui,
  SiReact,
  SiStripe,
  SiSwiper,
  SiPython,
  SiGit,
  SiGithub,
  SiNpm,
} from 'react-icons/si';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider divider />
    <SectionTitle>Skills {'&'} Technologies</SectionTitle>
    <SectionText>I am always happy and willing to learn more.</SectionText>
    <List>
      <ListItem>
        <picture>
          <SiReact size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>React.js</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiHtml5 size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>HTML 5</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiCss3 size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>CSS 3</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiJavascript size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiNextdotjs size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Next.js</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiMaterialui size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Material UI</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiSwiper size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Sanity</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiStripe size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Stripe</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiPython size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiGit size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Git</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiGithub size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Github</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiNpm size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>NPM</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
