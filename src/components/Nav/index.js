/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
// import PropTypes from 'prop-types';

import NavItem from './NavItem';

import Button from '../Button';
import Logo from '../../images/logo2';

const Nav = () => (

  <div sx={{
    display: 'flex', width: '100%', height: 75, py: 2, justifyContent: 'center', position: 'fixed', top: 0, zIndex: 10,
  }}
  >
    <div sx={{
      display: 'flex',
      width: '100%',
      px: [2, 3],
      maxWidth: (theme) => theme.custom.maxWidth,
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
    >
      <Logo sx={{ height: 65 }} />
      <div sx={{
        display: 'flex', flexDirection: 'row', height: 100, alignItems: 'center',
      }}
      >

        <ul sx={{
          display: 'flex', flexDirection: 'row', listStyleType: 'none', my: 0, pl: 0,
        }}
        >
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">Services</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </ul>
        <Button sx={{ ml: 3 }}>
          <a
            href="tel:8014449944"
            sx={{
              textDecoration: 'none', fontSize: 3, fontWeight: 'thin', color: 'text',
            }}
          >
            801-444-9944
          </a>
        </Button>
      </div>
    </div>
  </div>

);

Nav.propTypes = {
};

export default Nav;
