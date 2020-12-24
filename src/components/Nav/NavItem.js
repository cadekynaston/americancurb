/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Link from 'next/link';

const NavItem = ({ children, to }) => (
  <li sx={{ mr: 4, fontSize: 1 }}>
    <Link passHref href={to}>
      <a sx={{ textDecoration: 'none', color: 'text' }}>
        {children}
      </a>
    </Link>
  </li>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavItem;
