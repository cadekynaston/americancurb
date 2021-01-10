/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

import Link from '../Link';
import FooterLink from './FooterLink';
import AmericanCurbLogo from '../../images/AmericanCurb';

const Footer = () => (
  <div sx={{
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    py: 4,
    px: 3,
    backgroundColor: 'text',
  }}
  >
    <div sx={{
      display: 'flex',
      width: '100%',
      p: 3,
      justifyContent: 'space-between',
      alignItems: ['flex-start', 'center'],
      maxWidth: (theme) => theme.maxWidth,
      borderRadius: 0,
      flexDirection: ['column', 'row'],
    }}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          height: '100%',
          color: 'textLight',
          width: ['100%', 'auto'],
        }}
      >
        <div sx={{ mb: [3, 0] }}>
          <Styled.p sx={{
            fontFamily: 'heading',
            fontWeight: 700,
            fontSize: [1, 2],
          }}
          >
            Pages
          </Styled.p>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              height: '100%',
            }}
          >

            <div sx={{ mr: 3 }}>
              <FooterLink to="/" text="Home" />
              <FooterLink to="/options" text="Options" />
            </div>

            <div>
              <FooterLink to="/gallery" text="Gallery" />
              <FooterLink to="/contact" text="Contact" />
            </div>
          </div>
        </div>

        <div sx={{ ml: [0, 4] }}>
          <Styled.p sx={{
            fontFamily: 'heading',
            fontWeight: 700,
            fontSize: [1, 2],
          }}
          >
            Contact
          </Styled.p>

          <div>
            <FooterLink to="tel:8014449944" text="801.444.9944" />
            <FooterLink to="mailto:americancurb@gmail.com" text="americancurb@gmail.com" />
          </div>

        </div>
      </div>
      <AmericanCurbLogo sx={{ maxWidth: '100%', display: ['none', 'block'] }} />
    </div>
    <p sx={{ textAlign: 'center', color: 'textLight', fontSize: [12, 14] }}>
      Website designed and created by
      {' '}
      <Link styles={{ color: 'textLight', textDecoration: 'underline' }} to="http://cade.codes">Cade Kynaston</Link>
    </p>
  </div>
);

Footer.propTypes = {
};

export default Footer;
