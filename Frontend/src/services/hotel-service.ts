import { hotels } from "@/constants/hotels";
import { apiClient } from "@/services/api-client";
import type { Hotel, HotelSearchParams, PaginatedResponse } from "@/types";

function localSearch(params: HotelSearchParams = {}) {
  const query = params.destination?.toLowerCase().trim();
  const category = params.category;
  let content = hotels.filter((hotel) => {
    const matchesQuery =
      !query ||
      hotel.name.toLowerCase().includes(query) ||
      hotel.city.toLowerCase().includes(query) ||
      hotel.country.toLowerCase().includes(query);
    const matchesCategory = !category || hotel.category === category;
    const matchesMin = !params.minPrice || hotel.pricePerNight >= params.minPrice;
    const matchesMax = !params.maxPrice || hotel.pricePerNight <= params.maxPrice;
    return matchesQuery && matchesCategory && matchesMin && matchesMax;
  });

  if (params.sort === "price_asc") {
    content = [...content].sort((a, b) => a.pricePerNight - b.pricePerNight);
  }
  if (params.sort === "price_desc") {
    content = [...content].sort((a, b) => b.pricePerNight - a.pricePerNight);
  }
  if (params.sort === "rating") {
    content = [...content].sort((a, b) => b.rating - a.rating);
  }

  return content;
}

export const hotelService = {
  async search(params: HotelSearchParams = {}): Promise<PaginatedResponse<Hotel>> {
    try {
      const { data } = await apiClient.get<PaginatedResponse<Hotel>>("/hotels", {
        params,
      });
      return data;
    } catch {
      const page = params.page ?? 0;
      const size = params.size ?? 12;
      const content = localSearch(params);
      return {
        content: content.slice(page * size, page * size + size),
        page,
        totalElements: content.length,
        totalPages: Math.max(1, Math.ceil(content.length / size)),
      };
    }
  },

  async getById(id: string): Promise<Hotel> {
    try {
      const { data } = await apiClient.get<Hotel>(`/hotels/${id}`);
      return data;
    } catch {
      const hotel = hotels.find((item) => item.id === id);
      if (!hotel) {
        throw new Error("Hotel not found");
      }
      return hotel;
    }
  },

  async createHotel(payload: Partial<Hotel>) {
    const { data } = await apiClient.post<Hotel>("/host/hotels", payload);
    return data;
  },

  async updateHotel(id: string, payload: Partial<Hotel>) {
    const { data } = await apiClient.put<Hotel>(`/host/hotels/${id}`, payload);
    return data;
  },

  async deleteHotel(id: string) {
    await apiClient.delete(`/host/hotels/${id}`);
  },
};
