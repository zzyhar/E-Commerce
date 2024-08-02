export interface Slide {
  name: string;
  description: string;
  src: string;
}

export interface CarouselData {
  slides: Slide[];
}
