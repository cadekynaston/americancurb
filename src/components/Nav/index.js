/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
// import PropTypes from 'prop-types';

import NavItem from './NavItem';

import Logo from '../../images/logo';

const Nav = () => (
  <div sx={{
    display: 'flex',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    zIndex: 10,
    backgroundColor: 'background',
  }}
  >
    <div sx={{
      display: 'flex',
      width: '100%',
      px: [0],
      maxWidth: (theme) => theme.maxWidth,
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 3px 8px rgba(0,0,0,.24)',
      borderRadius: 0,
    }}
    >
      <Logo sx={{ height: 62, ml: 3 }} />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '100%',
        }}
      >

        <ul sx={{
          display: 'flex', flexDirection: 'row', listStyleType: 'none', my: 0, pl: 0,
        }}
        >
          <NavItem to="/">Our Options</NavItem>
          <NavItem to="/about">Gallery</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </ul>
        <button
          type="button"
          sx={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            height: '100%',
            border: 0,
            backgroundColor: 'primary',
            px: 4,
          }}
        >
          <Styled.a
            href="tel:8014449944"
            sx={{
              textDecoration: 'none',
              fontSize: 18,
              color: 'background',
              height: '100%',
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              letterSpacing: 1,
            }}
          >
            801.444.9944
          </Styled.a>
        </button>
      </div>
    </div>
  </div>

);

Nav.propTypes = {
};

export default Nav;
