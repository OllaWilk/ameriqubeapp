export interface NavLinkType {
  label: string;
  path: string | null;
}

export interface ProductLink extends NavLinkType {
  logo: string; // Zakładam, że logo jest typu string (ścieżka do obrazu lub URL)
  description: string;
}
