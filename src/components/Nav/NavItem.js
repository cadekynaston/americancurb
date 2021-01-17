/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Link from '../Link';

const NavItem = ({ children, to }) => (
  <li sx={{
    mr: [0, 4], mt: [4, 0], fontSize: [3, 1],
  }}
  >
    <Link
      to={to}
      styles={{
        textDecoration: 'none',
        color: 'text',
        ':hover': {
          color: 'primary',
        },
      }}
    >
      {children}
    </Link>
  </li>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavItem;
