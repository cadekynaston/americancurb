/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Card = ({
  featured, title, text, image,
}) => (
  <div sx={{
    borderRadius: 0,
    boxShadow: ({ boxShadow }) => boxShadow,
    p: 3,
    textAlign: 'center',
    border: ({ colors }) => featured && `1px solid ${colors.primary}`,
    position: 'relative',
    mt: featured && [3, 0],
  }}
  >
    {featured && (
    <div sx={{
      backgroundColor: 'primary',
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      position: 'absolute',
      top: -30,
      height: 30,
      px: 4,
      left: '50%',
      transform: 'translateX(-50%)',
    }}
    >
      <Styled.p sx={{
        display: 'inline-block',
        fontSize: [0, 0],
        color: 'textLight',
        margin: 0,
        whiteSpace: 'nowrap',
        mt: '4px',
      }}
      >
        Most Popular
      </Styled.p>
    </div>
    ) }
    {image}
    <Styled.p sx={{
      fontFamily: 'heading',
      fontWeight: 700,
      mb: '0px',
    }}
    >
      {title}
    </Styled.p>
    {
      text && (
      <Styled.p sx={{
        maxWidth: 150,
        fontSize: [1, 1],
        color: 'lightGray',
        mb: '0px',
        mt: 1,
        ml: 'auto',
        mr: 'auto',
      }}
      >
        {text}
      </Styled.p>
      )
    }
  </div>
);

Card.defaultProps = {
  featured: false,
  text: null,
  image: null,
};

Card.propTypes = {
  featured: PropTypes.bool,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  image: PropTypes.node,
};

export default Card;
