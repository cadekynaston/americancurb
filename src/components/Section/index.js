/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Section = ({ children, spacing }) => (
  <div sx={{
    display: 'flex', justifyContent: 'center', py: spacing,
  }}
  >
    <div sx={{ width: '100%', px: [2, 3], maxWidth: (theme) => theme.custom.maxWidth }}>
      {children}
    </div>
  </div>
);

Section.defaultProps = {
  spacing: 6,
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Section;
