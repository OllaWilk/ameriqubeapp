export interface ContactType {
  splashHeader: string;
  splashHeading: string;
  usaAddress: Address;
  europeAddress: Address;
}

export interface Address {
  line1: string;
  line2: string;
}
