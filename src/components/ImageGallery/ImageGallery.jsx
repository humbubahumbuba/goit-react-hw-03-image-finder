import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ loadedImages, onClick }) => {
  return (
    <ImageGalleryList>
      {loadedImages.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClick={onClick}
          />
        );
      })}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  loadedImages: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired,
};
