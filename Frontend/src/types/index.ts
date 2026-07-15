export type UserRole = "GUEST" | "HOST" | "ADMIN";

export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  role: UserRole;
};

export type Amenity = {
  id: string;
  label: string;
  icon: string;
};

export type Room = {
  id: string;
  name: string;
  capacity: number;
  beds: number;
  pricePerNight: number;
  inventory: number;
  amenities: Amenity[];
};

export type Review = {
  id: string;
  guestName: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export type Hotel = {
  id: string;
  name: string;
  description: string;
  location: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  rating: number;
  reviewsCount: number;
  pricePerNight: number;
  discount?: number;
  images: string[];
  category: string;
  host: {
    name: string;
    avatar: string;
    responseRate: number;
    joinedAt: string;
  };
  amenities: Amenity[];
  rooms: Room[];
  reviews: Review[];
  policies: string[];
  isGuestFavorite?: boolean;
};

export type HotelSearchParams = {
  destination?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  minPrice?: number;
  maxPrice?: number;
  category?: string;
  sort?: "recommended" | "price_asc" | "price_desc" | "rating";
  page?: number;
  size?: number;
};

export type BookingDraft = {
  hotelId: string;
  roomId?: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  nights: number;
  subtotal: number;
  taxes: number;
  discount: number;
  total: number;
};

export type Booking = BookingDraft & {
  id: string;
  status: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";
  hotel: Hotel;
  createdAt: string;
};

export type DashboardMetric = {
  label: string;
  value: string;
  delta: string;
};

export type PaginatedResponse<T> = {
  content: T[];
  page: number;
  totalPages: number;
  totalElements: number;
};
