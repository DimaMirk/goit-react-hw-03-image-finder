/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ item, onClickImage }) => {
  const { webformatURL, tags } = item;

  return (
    <li className={s.ImageGalleryItem} onClick={() => onClickImage(item)}>
      <img
        className={s.ImageGalleryItem_image}
        src={webformatURL}
        label={tags}
      />
    </li>
  );
};
export default ImageGalleryItem;
