export interface ICarouselItem {
  children: JSX.Element;
  width: number;
  height?: number;
}
export interface ICarousel {
  children: JSX.Element[];
  childrenWidth: number;
  childrenHeight?: number;
  withPreview?: boolean;
}
  
export interface IPreview {
  height?: number;
  width?: number;
}