export interface Slide {
  title: string;
  intro: string;
  buttonRed: [string, string];
  buttonTransparent?: [string, string];
}

export interface HomeSwiper {
  swiper: Slide[];
}

export interface Welcome {
  sectionTitle: string;
  companyName: string;
  introParagraph: string;
  additionalParagraphs: string[];
  button: Button;
}

export interface Button {
  text: string;
  link: string;
}

export interface Product {
  logo: string;
  title: string;
  description: string;
  button: Button;
}
