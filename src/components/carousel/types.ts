export interface ICarouselItem {
  children: JSX.Element;
  width: number;
  height?: number;
  order?: number;
}
export interface ICarousel {
  children: JSX.Element[];
  childrenWidth: number;
  childrenHeight?: number;
  withPreview?: boolean;
  show: number;
  infiniteLoop: boolean;
}

export interface ICarousel2 {
  children: JSX.Element[];
  childrenWidth: number;
  childrenHeight?: number;
  withBottomControls?: boolean;
  show: number;
  infiniteLoop: boolean;
}
  
export interface IPreview {
  height?: number;
  width?: number;
}