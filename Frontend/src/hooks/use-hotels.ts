"use client";

import { useQuery } from "@tanstack/react-query";
import { hotelService } from "@/services/hotel-service";
import type { HotelSearchParams } from "@/types";

export function useHotels(params: HotelSearchParams = {}) {
  return useQuery({
    queryKey: ["hotels", params],
    queryFn: () => hotelService.search(params),
  });
}

export function useHotel(id: string) {
  return useQuery({
    queryKey: ["hotel", id],
    queryFn: () => hotelService.getById(id),
    enabled: Boolean(id),
  });
}
