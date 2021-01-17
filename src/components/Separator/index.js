/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

import PropTypes from 'prop-types';

const Separator = ({
  bgColor, h, w, styles,
}) => (
  <div sx={{
    height: h,
    maxWidth: w,
    width: '80%',
    backgroundColor: bgColor,
    ...styles,
  }}
  />
);

Separator.defaultProps = {
  bgColor: 'gray',
  h: 1,
  w: 400,
  styles: null,
};

Separator.propTypes = {
  bgColor: PropTypes.string,
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // eslint-disable-next-line react/forbid-prop-types
  styles: PropTypes.object,
};

export default Separator;
