/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Columns = ({ children }) => (
  <div sx={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }}
  >
    {children}
  </div>
);

Columns.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Columns;
