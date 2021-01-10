/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Image from 'next/image';

const GalleryImage = ({ src }) => (
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
      loading="eager"
    />
  </div>

);

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default GalleryImage;
