/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Pantone = ({ color, title }) => (
  <div sx={{
    borderRadius: 0,
    boxShadow: ({ boxShadow }) => boxShadow,
    textAlign: 'center',
    position: 'relative',
    backgroundColor: color,
    pt: 6,
  }}
  >

    <Styled.p sx={{
      fontFamily: 'heading',
      fontWeight: 700,
      mb: '0px',
      p: 3,
      fontSize: [2, 2],
      backgroundColor: 'white',
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    }}
    >
      {title}
    </Styled.p>
  </div>
);

Pantone.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Pantone;
