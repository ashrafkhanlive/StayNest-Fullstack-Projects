"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { bookingService } from "@/services/booking-service";

export function useMyTrips() {
  return useQuery({
    queryKey: ["bookings", "me"],
    queryFn: bookingService.myTrips,
  });
}

export function useHostBookings() {
  return useQuery({
    queryKey: ["bookings", "host"],
    queryFn: bookingService.hostBookings,
  });
}

export function useCreateBooking() {
  return useMutation({
    mutationFn: bookingService.create,
    onSuccess: () => toast.success("Booking confirmed"),
    onError: () => toast.error("Booking could not be created"),
  });
}
