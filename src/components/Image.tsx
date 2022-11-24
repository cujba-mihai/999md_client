import React from 'react';
import NextImage from 'next/image';

export interface IImage {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  id?: string;
}

const Image = ({ src, alt, id, className, priority  }: IImage) => {

  return (
    <NextImage
      src={ require(`@/public/assets/${src}`)?.default?.src || "" }
      alt={alt || ''}
      className={className || ''}
      priority={Boolean(priority)}
      id={id || ''}
    />
  );
};

export default Image;
