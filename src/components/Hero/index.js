/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Image from 'next/image';

import Columns from '../Columns';
import Column from '../Columns/Column';
import Blob from '../../images/Blob';

const Hero = ({ children, spacing }) => (
  <div sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    py: 6,
  }}
  >
    <div sx={{
      width: '100%',
      px: [2, 3],
      maxWidth: (theme) => theme.custom.maxWidth,
      position: 'relative',
    }}
    >
      {children}
    </div>
  </div>
);

Hero.defaultProps = {
  spacing: 6,
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Hero;
