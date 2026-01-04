import type { Property, City, Amenity } from '../types/property';
import type { User } from '../types/auth';

const MOCK_USER: User = {
  id: 'u1',
  email: 'host@urbania.com',
  fullName: 'X Place',
  role: 'host',
  profilePictureUrl: 'https://i.pravatar.cc/150?u=host',
};

const MOCK_CITIES: City[] = [
  { id: 1, name: 'Jakarta Selatan', country: 'Indonesia' },
  { id: 2, name: 'Kuta, Bali', country: 'Indonesia' },
  { id: 3, name: 'Bandung', country: 'Indonesia' },
];

const MOCK_AMENITIES: Amenity[] = [
  { id: 1, name: 'WiFi', iconUrl: 'wifi' },
  { id: 2, name: 'AC', iconUrl: 'ac' },
  { id: 3, name: 'Pool', iconUrl: 'pool' },
  { id: 4, name: 'Kitchen', iconUrl: 'kitchen' },
];

export const MOCK_PROPERTIES: Property[] = [
  {
    id: 'p1',
    host: MOCK_USER,
    title: 'Modern Apartment in SCBD',
    slug: 'modern-apartment-scbd',
    description: 'Luxury apartment with city views.',
    address: 'Jl. Sudirman, Jakarta',
    city: MOCK_CITIES[0],
    pricePerNight: 1500000,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    rating: 4.8,
    reviewsCount: 120,
    amenities: [MOCK_AMENITIES[0], MOCK_AMENITIES[1]],
    images: [
      { id: 'i1', url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267', isPrimary: true },
      { id: 'i2', url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688', isPrimary: false },
    ],
  },
  {
    id: 'p2',
    host: MOCK_USER,
    title: 'Villa Tranquil Bali',
    slug: 'villa-tranquil-bali',
    description: 'Peaceful villa with private pool.',
    address: 'Jalan Raya Seminyak',
    city: MOCK_CITIES[1],
    pricePerNight: 2500000,
    bedrooms: 3,
    bathrooms: 3,
    maxGuests: 6,
    rating: 4.9,
    reviewsCount: 85,
    amenities: MOCK_AMENITIES,
    images: [
      { id: 'i3', url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7', isPrimary: true },
    ],
  },
  {
    id: 'p3',
    host: MOCK_USER,
    title: 'Cozy Bandung Cabin',
    slug: 'cozy-bandung-cabin',
    description: 'Escape to nature in this cozy cabin.',
    address: 'Dago Atas',
    city: MOCK_CITIES[2],
    pricePerNight: 850000,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    rating: 4.5,
    reviewsCount: 45,
    amenities: [MOCK_AMENITIES[1], MOCK_AMENITIES[3]],
    images: [
      { id: 'i4', url: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739', isPrimary: true },
    ],
  },
   {
    id: 'p4',
    host: MOCK_USER,
    title: 'Sunny Studio Menteng',
    slug: 'sunny-studio-menteng',
    description: 'Bright studio in the heart of Menteng.',
    address: 'Menteng, Jakarta',
    city: MOCK_CITIES[0],
    pricePerNight: 600000,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    rating: 4.7,
    reviewsCount: 30,
    amenities: [MOCK_AMENITIES[0], MOCK_AMENITIES[1], MOCK_AMENITIES[3]],
    images: [
      { id: 'i5', url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb', isPrimary: true },
    ],
  }
];

export const getProperties = async (): Promise<Property[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PROPERTIES), 500);
  });
};

export const getPropertyBySlug = async (slug: string): Promise<Property | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PROPERTIES.find((p) => p.slug === slug)), 500);
  });
};
