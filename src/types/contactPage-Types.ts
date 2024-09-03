export interface AddressType {
  line1: string;
  line2: string;
}

export interface ContactType {
  splashHeader: string;
  splashHeading: string;
  usaAddress: AddressType;
  europeAddress: AddressType;
  globalPartners: GlobalPartnerType[];
}

export interface GlobalPartnerType {
  country: string;
  companyName: string;
  contactName?: string;
  title?: string;
  address?: string;
  phone: string | string[];
  cell?: string;
  fax?: string;
  email: string | string[];
  website?: string;
}
