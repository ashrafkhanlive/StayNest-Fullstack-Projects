"use client";

import { create } from "zustand";
import type { BookingDraft } from "@/types";

type BookingState = {
  draft: BookingDraft | null;
  setDraft: (draft: BookingDraft) => void;
  clearDraft: () => void;
};

export const useBookingStore = create<BookingState>((set) => ({
  draft: null,
  setDraft: (draft) => set({ draft }),
  clearDraft: () => set({ draft: null }),
}));
