/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Image from 'next/image';

const GalleryImage = ({ src, priority, landscape }) => (
  <div sx={{
    pb: 3,
    '> div': {
      borderRadius: 0,
    },
  }}
  >
    <Image
      alt="Landscape Curbing"
      src={src}
      layout="responsive"
      height={landscape ? 400 : 600}
      width={500}
      objectFit="cover"
      objectPosition="center center"
      quality={70}
      priority={priority}
      sizes="(max-width: 767px) 100vw, (max-width: 850px) 400px, (min-width: 851px) 576px, 576px"
      // sizes="(max-width: 767px) 100vw, 33vw"
    />
  </div>

);
GalleryImage.defaultProps = {
  priority: false,
  landscape: false,
};

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  priority: PropTypes.bool,
  landscape: PropTypes.bool,
};

export default GalleryImage;
