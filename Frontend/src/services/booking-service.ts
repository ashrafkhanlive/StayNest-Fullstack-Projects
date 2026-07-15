import { mockTrips } from "@/constants/hotels";
import { apiClient } from "@/services/api-client";
import type { Booking, BookingDraft } from "@/types";

export const bookingService = {
  async create(payload: BookingDraft) {
    const { data } = await apiClient.post<Booking>("/bookings", payload);
    return data;
  },

  async myTrips() {
    try {
      const { data } = await apiClient.get<Booking[]>("/bookings/me");
      return data;
    } catch {
      return mockTrips;
    }
  },

  async hostBookings() {
    try {
      const { data } = await apiClient.get<Booking[]>("/host/bookings");
      return data;
    } catch {
      return mockTrips;
    }
  },
};
