export interface NavLinkType {
  label: string;
  path: string | null;
}

export interface ProductLink extends NavLinkType {
  logo: string;
  description: string;
}

export enum Region {
  EU = 'EU',
  USA = 'USA',
  GB = 'GB',
}

export enum Language {
  PL = 'PL',
  DE = 'DE',
  en = 'EN',
}

export type RegionType = Region.EU | Region.USA | Region.GB;
export type LanguagesType = Language.DE | Language.en | Language.PL;
