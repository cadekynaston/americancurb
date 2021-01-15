/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Button = ({ children, outline }) => (
  <button
    type="button"
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: outline ? '1px solid' : 0,
      borderColor: 'primary',
      py: 3,
      px: 4,
      backgroundColor: outline ? 'background' : 'primary',
      color: outline ? 'primary' : 'background',
      borderRadius: [0],
      fontSize: 3,
      fontFamily: 'heading',
      fontWeight: 700,
      cursor: 'pointer',
      boxShadow: (theme) => theme.boxShadow,
      transition: 'all 0.1s ease-in-out',
      ':hover': {
        backgroundColor: outline ? 'primary' : 'primaryDark',
        color: outline && 'background',
      },
    }}
  >
    {children}
  </button>
);

Button.defaultProps = {
  outline: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  outline: PropTypes.bool,
};

export default Button;
