/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Link from 'next/link';

const CustomLink = ({
  children, to, styles, ...props
}) => (
  <Link passHref href={to}>
    <a
      sx={{
        textDecoration: 'none',
        color: 'text',
        cursor: 'pointer',
        ...styles,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </a>
  </Link>
);

CustomLink.defaultProps = {
  styles: null,
};

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  styles: PropTypes.object,
};

export default CustomLink;
