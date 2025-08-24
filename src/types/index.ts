export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  services: string[];
  icon?: string;
}

export interface CompanyInfo {
  name: string;
  tradeName: string;
  established: string;
  headquarters: string;
  umedaOffice: string;
  business: string[];
}

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  category: string;
  message: string;
}