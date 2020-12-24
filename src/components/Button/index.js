/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Button = ({ children }) => (
  <button
    type="button"
    sx={{
      border: 0,
      py: 2,
      px: 4,
      backgroundColor: 'primary',
      borderRadius: [0],
      fontSize: 3,
    }}
  >
    {children}
  </button>
);

Button.defaultProps = {

};

Button.propTypes = {
  children: PropTypes.node.isRequired,

};

export default Button;
