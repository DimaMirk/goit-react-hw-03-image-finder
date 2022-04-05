import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(img => (
        <ImageGalleryItem item={img} key={img.id} />
      ))}
    </ul>
  );
};
export default ImageGallery;
