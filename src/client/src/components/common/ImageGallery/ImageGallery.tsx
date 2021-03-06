import React from 'react';
import ImageGallery from 'react-image-gallery';

import { ImgGalleryProps } from './ImageGallery.types';

export const Gallery = (props: ImgGalleryProps): JSX.Element => {
  const { images } = props;
  const items = images.map((url: string) => ({
    original: url,
    thumbnail: url,
  }));

  return <ImageGallery items={items} showPlayButton={false} showNav={false} />;
};
