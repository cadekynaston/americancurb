/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Nav from '../Nav';
import Footer from '../Footer';

const Layout = ({ children, title }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div sx={{ position: 'relative' }}>
      <Nav />
      {children}
      <Footer />
    </div>
  </React.Fragment>
);

Layout.defaultProps = {
  title: 'American Curb',
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
