import React from 'react';
import NextImage from 'next/image';

export interface IImage {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  id?: string;
  width?: number;
  height?: number;
}

const Image = ({ src, alt, id, className, priority, width, height }: IImage) => {

  let srcImage = "";

  try {
    srcImage = require(`@/public/assets/${src}`)?.default?.src;
  } catch(err) {
    const isURL = /https?/.test(src);
    
    if(isURL) srcImage = src;
  }

  return (
    <NextImage
      src={srcImage}
      alt={alt || ''}
      className={className || ''}
      priority={Boolean(priority)}
      id={id || ''}
      width={width || 24}
      height={height || 24}
    />
  );
};

export default Image;
