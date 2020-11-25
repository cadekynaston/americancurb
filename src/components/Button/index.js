/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Hero = ({ children }) => (
  <button
    type="button"
    sx={{
      border: 0,
      py: 2,
      px: 4,
      backgroundColor: 'accent',
      borderRadius: 30,
      fontSize: 3,
    }}
  >
    {children}
  </button>
);

Hero.defaultProps = {

};

Hero.propTypes = {
  children: PropTypes.node.isRequired,

};

export default Hero;
