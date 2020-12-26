/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Section = ({ children, spacing, bgColor }) => (
  <div sx={{
    display: 'flex', justifyContent: 'center', backgroundColor: bgColor,
  }}
  >
    <div sx={{
      width: '100%', px: [2, 3], py: spacing, maxWidth: (theme) => theme.maxWidth, position: 'relative',
    }}
    >
      {children}
    </div>
  </div>
);

Section.defaultProps = {
  spacing: 5,
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
