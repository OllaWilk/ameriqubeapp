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
  jobPosition: string;
  email: string;
  message: string;
  over18: boolean;
  agreeProcessing1: boolean;
  agreeProcessing2: boolean;
};

export interface ContactFormValidation {
  nameRequired: string;
  phoneNumberRequired: string;
  companyNameRequired: string;
  jobPositionRequired: string;
  emailRequired: string;
  invalidEmail: string;
  messageRequired: string;
  over18Required: string;
  agreeProcessing1Required: string;
  agreeProcessing2Required: string;
}
export interface ContactFormType {
  title: string;
  submitSuccess: string;
  namePlaceholder: string;
  phonePlaceholder: string;
  companyNamePlaceholder: string;
  jobPositionPlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  over18Label: string;
  agreeProcessing1Label: string;
  agreeProcessing2Label: string;
  privacyLinkText: string;
  submitButton: string;
  requiredFieldsInfo: string;
  validation: ContactFormValidation;
}

export interface FieldProps {
  name: string;
  placeholder: string;
  error: string | undefined;
  touched: boolean | undefined;
}

export interface CheckboxProps {
  name: string;
  label: string;
  error: string | undefined;
  touched: boolean | undefined;
}
