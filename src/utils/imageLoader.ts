interface IProps {
    src: 'string';
    width:  number;
    quality: number;
}
export default function myImageLoader({ src, width, quality }:IProps) {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  