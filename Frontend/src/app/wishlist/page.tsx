"use client";

import { HotelGrid } from "@/components/hotel/hotel-grid";
import { hotels } from "@/constants/hotels";
import { useWishlistStore } from "@/store/wishlist-store";

export default function WishlistPage() {
  const ids = useWishlistStore((state) => state.hotelIds);
  const saved = hotels.filter((hotel) => ids.includes(hotel.id));

  return (
    <section className="container-page">
      <h1 className="text-3xl font-black md:text-5xl">Wishlist</h1>
      <p className="mt-3 text-muted-foreground">Saved places for your next escape.</p>
      <div className="mt-8">
        <HotelGrid hotels={saved.length ? saved : hotels.slice(0, 4)} />
      </div>
    </section>
  );
}
