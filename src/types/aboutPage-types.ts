export interface AboutUs {
  title: string;
  intro: string;
  aboutSection: {
    header: string;
    description: string;
  };
  ourMissionSection: {
    header: string;
    subtitle: string;
    description: string;
  };
}

export interface ContactBannerType {
  title: string;
  subtitle: string;
  button: string;
  to: string;
}
