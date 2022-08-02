import React from 'react';
import Head from 'next/head';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>Dylan Cornel | Front End Developer</title>
        <link rel='icon' href='/logo-icon.png' />
      </Head>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
};
