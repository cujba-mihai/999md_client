import React from 'react'

interface ISvg {
    src: string;
    alt: string;
    className?: string;
}   

const Svg = ({src, alt, className}: ISvg) => {
  return (
    <img src={require(`@/public/assets/${src}`).default.src} alt={alt} className={className || ''} />
  )
}

export default Svg;