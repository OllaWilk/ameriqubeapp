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
  mapTitle: string;
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

export type FormDataType = {
  name: string;
  phoneNumber: string;
  companyName: string;
  jobPosition?: string;
  email: string;
  message: string;
  over18: boolean;
  agreeProcessing1: boolean;
  agreeProcessing2: boolean;
};
