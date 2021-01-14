/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Image from 'next/image';

const GalleryImage = ({ src, priority }) => (
  <div sx={{
    '> div': {
      borderRadius: 0,
    },
  }}
  >
    <Image
      alt="Landscape Curbing"
      src={src}
      layout="intrinsic"
      height={450}
      width={450}
      objectFit="cover"
      objectPosition="center center"
      quality={70}
      priority={priority}
      sizes="(max-width: 767px) 100vw, (max-width: 850px) 262px, (min-width: 851px) 380px, 380px"
    />
  </div>

);
GalleryImage.defaultProps = {
  priority: false,
};

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  priority: PropTypes.bool,
};

export default GalleryImage;
