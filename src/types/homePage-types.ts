export interface Slide {
  title: string;
  intro: string;
  buttonRed: [string, string];
  buttonTransparent?: [string, string];
}

export interface HomeSwiper {
  swiper: Slide[];
}
