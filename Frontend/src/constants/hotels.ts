import type { Amenity, Booking, DashboardMetric, Hotel } from "@/types";

export const categories = [
  "Beachfront",
  "Cabins",
  "Design",
  "Amazing pools",
  "Countryside",
  "Urban",
  "Vineyards",
  "Wellness",
  "Skiing",
  "Islands",
];

export const destinations = [
  {
    city: "Santorini",
    country: "Greece",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    city: "Kyoto",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    city: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    city: "Toronto",
    country: "Canada",
    image:
      "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?q=80&w=1200&auto=format&fit=crop",
  },
];

export const amenities: Amenity[] = [
  { id: "wifi", label: "Fast wifi", icon: "Wifi" },
  { id: "pool", label: "Pool", icon: "Waves" },
  { id: "parking", label: "Parking", icon: "Car" },
  { id: "breakfast", label: "Breakfast", icon: "Coffee" },
  { id: "spa", label: "Spa", icon: "Sparkles" },
  { id: "gym", label: "Gym", icon: "Dumbbell" },
];

export const hotels: Hotel[] = [
  {
    id: "h-aurora",
    name: "Aurora Cliff Retreat",
    description:
      "A serene cliffside hideaway with layered terraces, private plunge pools, and sunrise views across the bay.",
    location: "Oia Caldera Road",
    city: "Santorini",
    country: "Greece",
    lat: 36.4618,
    lng: 25.3753,
    rating: 4.96,
    reviewsCount: 284,
    pricePerNight: 430,
    discount: 12,
    category: "Beachfront",
    isGuestFavorite: true,
    images: [
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1400&auto=format&fit=crop",
    ],
    host: {
      name: "Elena Markou",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
      responseRate: 99,
      joinedAt: "2018-06-01",
    },
    amenities,
    rooms: [
      {
        id: "r-aurora-suite",
        name: "Caldera Suite",
        capacity: 3,
        beds: 2,
        pricePerNight: 430,
        inventory: 5,
        amenities: amenities.slice(0, 4),
      },
    ],
    reviews: [
      {
        id: "rev-1",
        guestName: "Maya",
        rating: 5,
        comment: "Quiet, polished, and the reserve card view was exactly right.",
        createdAt: "2026-05-18",
      },
    ],
    policies: ["Free cancellation for 48 hours", "No parties", "Check-in after 3 PM"],
  },
  {
    id: "h-cedar",
    name: "Cedar Glass House",
    description:
      "A modern forest lodge wrapped in warm cedar, glass walls, and a chef-ready kitchen for slow weekends.",
    location: "Lake Crescent Trail",
    city: "Seattle",
    country: "United States",
    lat: 47.7511,
    lng: -120.7401,
    rating: 4.91,
    reviewsCount: 176,
    pricePerNight: 285,
    category: "Cabins",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1400&auto=format&fit=crop",
    ],
    host: {
      name: "Jon Bell",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      responseRate: 96,
      joinedAt: "2020-02-12",
    },
    amenities: amenities.filter((item) => item.id !== "pool"),
    rooms: [
      {
        id: "r-cedar-loft",
        name: "Forest Loft",
        capacity: 4,
        beds: 2,
        pricePerNight: 285,
        inventory: 3,
        amenities: amenities.slice(0, 3),
      },
    ],
    reviews: [
      {
        id: "rev-2",
        guestName: "Ari",
        rating: 5,
        comment: "Beautifully designed and close to the trailhead.",
        createdAt: "2026-04-02",
      },
    ],
    policies: ["Pets allowed", "Quiet hours after 10 PM", "Self check-in"],
  },
  {
    id: "h-nova",
    name: "Nova City Penthouse",
    description:
      "A skyline suite with dedicated workspace, concierge arrival, and a rooftop pool above the arts district.",
    location: "King Street West",
    city: "Toronto",
    country: "Canada",
    lat: 43.6532,
    lng: -79.3832,
    rating: 4.88,
    reviewsCount: 92,
    pricePerNight: 360,
    discount: 8,
    category: "Urban",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
    ],
    host: {
      name: "Priya Shah",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
      responseRate: 98,
      joinedAt: "2019-09-10",
    },
    amenities,
    rooms: [
      {
        id: "r-nova-penthouse",
        name: "Skyline King",
        capacity: 2,
        beds: 1,
        pricePerNight: 360,
        inventory: 4,
        amenities,
      },
    ],
    reviews: [
      {
        id: "rev-3",
        guestName: "Sam",
        rating: 5,
        comment: "Sharp location and a proper premium feel.",
        createdAt: "2026-03-26",
      },
    ],
    policies: ["No smoking", "ID required at check-in", "Paid parking nearby"],
  },
  {
    id: "h-luma",
    name: "Luma Wellness Villa",
    description:
      "A quiet design villa with yoga deck, saltwater pool, spa room, and daily breakfast overlooking rice fields.",
    location: "Jalan Raya Ubud",
    city: "Bali",
    country: "Indonesia",
    lat: -8.5069,
    lng: 115.2625,
    rating: 4.97,
    reviewsCount: 341,
    pricePerNight: 310,
    category: "Wellness",
    isGuestFavorite: true,
    images: [
      "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop",
    ],
    host: {
      name: "Made Wirawan",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      responseRate: 100,
      joinedAt: "2017-11-04",
    },
    amenities,
    rooms: [
      {
        id: "r-luma-villa",
        name: "Pool Villa",
        capacity: 5,
        beds: 3,
        pricePerNight: 310,
        inventory: 6,
        amenities,
      },
    ],
    reviews: [
      {
        id: "rev-4",
        guestName: "Nora",
        rating: 5,
        comment: "The best breakfast, calm design, and kind hosting.",
        createdAt: "2026-06-05",
      },
    ],
    policies: ["Breakfast included", "Airport transfer available", "No events"],
  },
];

export const dashboardMetrics: DashboardMetric[] = [
  { label: "Revenue", value: "$82.4K", delta: "+18.2%" },
  { label: "Bookings", value: "1,284", delta: "+9.8%" },
  { label: "Occupancy", value: "86%", delta: "+4.1%" },
  { label: "Guests", value: "3,921", delta: "+12.6%" },
];

export const mockTrips: Booking[] = [
  {
    id: "b-1001",
    hotelId: hotels[0].id,
    roomId: hotels[0].rooms[0].id,
    hotel: hotels[0],
    checkIn: "2026-08-12",
    checkOut: "2026-08-16",
    guests: 2,
    nights: 4,
    subtotal: 1720,
    taxes: 206,
    discount: 206,
    total: 1720,
    status: "CONFIRMED",
    createdAt: "2026-06-18",
  },
];
