"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type WishlistState = {
  hotelIds: string[];
  toggle: (hotelId: string) => void;
  isSaved: (hotelId: string) => boolean;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      hotelIds: [],
      toggle: (hotelId) =>
        set((state) => ({
          hotelIds: state.hotelIds.includes(hotelId)
            ? state.hotelIds.filter((id) => id !== hotelId)
            : [...state.hotelIds, hotelId],
        })),
      isSaved: (hotelId) => get().hotelIds.includes(hotelId),
    }),
    { name: "staynest-wishlist" },
  ),
);
