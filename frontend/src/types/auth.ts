export type UserRole = 'guest' | 'host';

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  profilePictureUrl?: string;
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Booking {
  id: string;
  propertyId: string;
  guestId: string;
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
  status: BookingStatus;
}
