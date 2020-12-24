/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Section = ({ children, spacing, bgColor }) => (
  <div sx={{
    display: 'flex', justifyContent: 'center', py: spacing, backgroundColor: bgColor,
  }}
  >
    <div sx={{ width: '100%', px: [2, 3], maxWidth: (theme) => theme.maxWidth }}>
      {children}
    </div>
  </div>
);

Section.defaultProps = {
  spacing: 4,
  bgColor: 'background',
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  spacing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

};

export default Section;
