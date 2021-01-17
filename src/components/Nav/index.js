/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';

import NavItem from './NavItem';
import Link from '../Link';
import MobileMenu from './MobileMenu';
import Button from '../Button';

import Logo from '../../images/logo';
import PhoneIcon from '../../images/Phone';
import MenuIcon from '../../images/Menu';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div sx={{
      display: 'flex',
      width: '100%',
      height: [55, 70],
      justifyContent: 'center',
      position: 'absolute',
      top: 20,
      zIndex: 10,
      px: 10,
    }}
    >
      <div sx={{
        display: 'flex',
        width: '100%',
        backgroundColor: 'background',
        px: [0],
        maxWidth: (theme) => theme.maxWidth,
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: (theme) => theme.boxShadow,
        borderRadius: 0,
      }}
      >
        <Link to="/" styles={{ display: 'flex' }}>

          <Logo sx={{ height: [40, 55], ml: 3 }} />
        </Link>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: '100%',
          }}
        >

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            sx={{
              display: ['block', 'none'],
              mr: [2, 3],
              cursor: 'pointer',
              border: 0,
              backgroundColor: 'background',
            }}
            aria-label="Menu"
          >
            <MenuIcon sx={{ mt: 1 }} />
          </button>
          {isOpen && (
          <MobileMenu onClose={() => setIsOpen(false)}>
            <ul sx={{
              display: 'flex',
              flexDirection: 'column',
              listStyleType: 'none',
              my: 0,
              pl: 0,
              mb: 4,

            }}
            >
              <NavItem to="/">Home</NavItem>
              <NavItem to="/options">Our Options</NavItem>
              <NavItem to="/gallery">Gallery</NavItem>
              <NavItem to="/contact">Contact</NavItem>
            </ul>
            <Link to="/options">
              <Button>801.444.9944</Button>
            </Link>
          </MobileMenu>
          )}
          <ul sx={{
            display: ['none', 'flex'],
            flexDirection: 'row',
            listStyleType: 'none',
            my: 0,
            pl: 0,
          }}
          >
            <NavItem to="/">Home</NavItem>
            <NavItem to="/options">Our Options</NavItem>
            <NavItem to="/gallery">Gallery</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </ul>
          <Link
            to="tel:8014449944"
            styles={{ height: '100%' }}
          >
            <button
              type="button"
              sx={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                height: '100%',
                border: 0,
                backgroundColor: 'primary',
                color: 'background',
                px: ['25px', 4],
                fontSize: 1,
                letterSpacing: 1,
                fontFamily: 'heading',
                fontWeight: 700,
                cursor: 'pointer',
                ':hover': {
                  backgroundColor: 'primaryDark',
                },
              }}
              aria-label="Call Now"
            >
              <PhoneIcon sx={{ display: ['block', 'none'], height: 27, width: 22 }} />
              <span sx={{ display: ['none', 'block'] }}>801.444.9944</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Nav.propTypes = {
};

export default Nav;
