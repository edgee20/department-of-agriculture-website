export interface Agency {
  name: string;
  address: string;
  tel: string[] | string;
  fax?: string | null;
  email: string[] | string;
  website?: string[] | null;
}

export interface Service {
  category: string;
  services_offered: string[];
  agency: Agency;
}

export interface AccordionData {
  accordionTitle: string;
  accordionData: Service[];
}
