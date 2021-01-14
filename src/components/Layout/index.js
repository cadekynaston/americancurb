/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Nav from '../Nav';
import Footer from '../Footer';

const Layout = ({ children, title, description }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={`"${description}"`} />
      <meta property="og:title" content="American Curb - Landscape Curbing Professionals" />
      <meta property="og:description" content="Serving Utah for over 25 years." />
      <meta property="og:url" content="https://www.americancurb.co" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="American Curb" />
      <meta property="og:type" content="website" />
    </Head>
    <div sx={{ position: 'relative' }}>
      <Nav />
      {children}
      <Footer />
    </div>
  </React.Fragment>
);

Layout.defaultProps = {
  title: 'American Curb - Landscape Curbing Professionals | Utah',
  description: 'At American Curb we are landscape curbing pros that have been serving Utah for over 25 years.',
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
};

export default Layout;
