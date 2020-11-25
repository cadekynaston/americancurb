/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Column = ({ children, width }) => (
  <div sx={{
    width,
  }}
  >
    {children}
  </div>
);

Column.defaultProps = {
  width: '50%',
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};

export default Column;
