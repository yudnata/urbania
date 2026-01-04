import type { User } from './auth';

export interface Amenity {
  id: number;
  name: string;
  iconUrl?: string;
}

export interface City {
  id: number;
  name: string;
  country: string;
}

export interface PropertyImage {
  id: string;
  url: string;
  isPrimary: boolean;
}

export interface Property {
  id: string;
  host: User;
  title: string;
  slug: string;
  description: string;
  address: string;
  city: City;
  pricePerNight: number;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  rating?: number;
  reviewsCount?: number;
  amenities: Amenity[];
  images: PropertyImage[];
}
