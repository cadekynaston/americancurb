/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import React from 'react';
import Close from '../../images/Close';

const MobileMenu = ({ children, onClose }) => (
  <React.Fragment>

    <div
      onClick={onClose}
      sx={{
        position: 'absolute',
        top: -20,
        left: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: 'opaque',
      }}
    />
    <div sx={{
      position: 'absolute',
      right: 20,
      top: 0,
      backgroundColor: 'muted',
      borderRadius: 0,
      p: 4,
      boxShadow: (theme) => theme.boxShadow,
    }}
    >
      <Close
        sx={{
          position: 'absolute', top: 20, right: 20, opacity: 0.7,
        }}
        onClick={onClose}
      />
      {children}
    </div>
  </React.Fragment>
);

MobileMenu.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MobileMenu;
