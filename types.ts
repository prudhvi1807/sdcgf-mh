
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: ServiceCategory;
  price: string;
  popular?: boolean;
  subServices: string[];
}

export enum ServiceCategory {
  REGISTRATION = 'Startup & Registration',
  COMPLIANCE = 'Statutory & Tax',
  MANAGEMENT = 'Management & Audit'
}
