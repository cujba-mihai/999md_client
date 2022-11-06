/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface IImage {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className }: IImage) => {
  return (
    <img
      src={require(`@/public/assets/${src}`).default.src}
      alt={alt}
      className={className || ''}
    />
  );
};

export default Image;
