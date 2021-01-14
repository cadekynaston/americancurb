/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const OptionHeading = ({ title, text }) => (
  <div
    sx={{
      textAlign: ['center', 'right'],
      width: ['auto', 160],
      pr: [0, 20],
      pt: 2,
      mr: 35,
      mb: [20, 0],
      borderRight: [0, '1px solid #C4C4C4'],
      // borderBottom: ['1px solid #C4C4C4', 0],
    }}
  >
    <Styled.p sx={{ fontFamily: 'heading', fontWeight: 700 }}>{title}</Styled.p>
    <Styled.p sx={{ fontSize: [0, 0], color: 'lightGray' }}>{text}</Styled.p>
  </div>
);

OptionHeading.defaultProps = {
  text: null,
};

OptionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default OptionHeading;
