import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles';

import Logo from '../../public/images/logo.png';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <Image
            src={Logo}
            alt='Logo'
            layout='intrinsic'
            width={50}
            height={50}
            style={{ borderRadius: '50%' }}
          />
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#contact'>
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/dylst' target='_blank'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons
        href='https://www.linkedin.com/in/dylan-cornel-a282a7230/'
        target='_blank'
      >
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
