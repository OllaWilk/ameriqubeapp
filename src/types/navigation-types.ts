export interface NavLinkType {
  label: string;
  path: string | null;
}

export interface ProductLink extends NavLinkType {
  logo: string;
  description: string;
}

export interface CookiePolicy {
  title: string;
  cookieInfoBaner: string;
  acceptButton: {
    text: string;
  };
  asterixInfo: {
    url: string;
    text: string;
  };
}

export enum Region {
  EU = 'EU',
  USA = 'USA',
  GB = 'GB',
}

export enum Language {
  PL = 'PL',
  DE = 'DE',
  En = 'EN',
}

export type RegionType = Region.EU | Region.USA | Region.GB;
export type LanguagesType = Language.DE | Language.En | Language.PL;
