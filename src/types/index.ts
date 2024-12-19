export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  icon?: any;
}

export interface NavigationLink {
  href: string;
  label: string;
}