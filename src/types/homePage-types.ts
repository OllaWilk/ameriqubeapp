export interface Button {
  url: string;
  text: string;
}

export interface Slide {
  title: string;
  intro: string;
  buttonRed: Button;
  buttonTransparent?: Button;
}

export interface HomeSwiper {
  swiper: Slide[];
}
