export type Clinic = {
  id: number;
  name: string;
  category: string;
  city: string;
  district: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  priceRange: string;
  image: string;
  description: string;
  accreditations: string[];
  languages: string[];
  services: {
    name: string;
    priceRange: string;
  }[];
};
