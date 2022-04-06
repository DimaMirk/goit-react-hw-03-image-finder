import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';

import s from './ImageGallery.module.css';

const ImageGallery = ({ images, onClickImage }) => {
  return (
    <>
      <ul className={s.ImageGallery}>
        {images.map(img => (
          <ImageGalleryItem
            item={img}
            key={img.id}
            onClickImage={onClickImage}
          />
        ))}
      </ul>
    </>
  );
};
export default ImageGallery;
