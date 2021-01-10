/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

import PropTypes from 'prop-types';
import Link from '../Link';

const FooterLink = ({ text, to }) => (
  <Link to={to}>
    <Styled.p sx={{ fontSize: [1, 2], color: 'textLight' }}>
      {text}
    </Styled.p>
  </Link>
);

FooterLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default FooterLink;
