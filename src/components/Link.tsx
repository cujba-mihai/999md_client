import React, { useEffect, useState } from 'react'

interface ILink {
  text: string;
  href: string;
  textStyles?: string;
  className?: string;
}

const Link = ({ text, href, textStyles, className }: ILink): JSX.Element => {
  const [linkClass, setLinkClass] = useState('hover:border-none hover:text-red-600 border-none ');
  const [textSize, setTextSize] = useState('text-sm');

  useEffect(() => {
    if (className) {
      setLinkClass(previousClass => previousClass.concat(className))
    }
    if (textStyles) {
      setTextSize(textStyles)
    }
  }, [])

  return (
    <a href={href} className={linkClass}>
      <span className={textSize}>
        {text}
      </span>
    </a>
  )
}

export default Link;