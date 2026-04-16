export interface PropertyData {
  title: string;
  price: string;
  location: string;
  propertyType: 'sale' | 'rent';
  features: string[];
  images: string[]; // base64 data URLs
  agentName: string;
  agentPhone: string;
  agentLogo: string; // base64 data URL
}

export interface GeneratedText {
  titles: string[];
  cta: string;
}
