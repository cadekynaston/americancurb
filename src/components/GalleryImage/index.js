/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Image from 'next/image';

const GalleryImage = ({ src, loading }) => (
  <div sx={{
    '> div': {
      borderRadius: 0,
    },
  }}
  >
    <Image
      alt="Mountains"
      src={src}
      layout="responsive"
      height={450}
      width={450}
      objectFit="cover"
      objectPosition="center center"
      quality={70}
      loading={loading}
      sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 767px) 767px, (max-width: 850px) 262px, (min-width: 851px) 380px, 380px"
    />
  </div>

);
GalleryImage.defaultProps = {
  loading: 'lazy',
};

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  loading: PropTypes.string,
};

export default GalleryImage;
