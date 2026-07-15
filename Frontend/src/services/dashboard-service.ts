import { dashboardMetrics, hotels, mockTrips } from "@/constants/hotels";
import { apiClient } from "@/services/api-client";
import type { DashboardMetric } from "@/types";

export type DashboardData = {
  metrics: DashboardMetric[];
  revenue: Array<{ month: string; value: number }>;
  inventory: Array<{ name: string; available: number; booked: number }>;
};

const fallback: DashboardData = {
  metrics: dashboardMetrics,
  revenue: [
    { month: "Jan", value: 42000 },
    { month: "Feb", value: 51000 },
    { month: "Mar", value: 48000 },
    { month: "Apr", value: 67000 },
    { month: "May", value: 74000 },
    { month: "Jun", value: 82400 },
  ],
  inventory: hotels.map((hotel) => ({
    name: hotel.name,
    available: hotel.rooms.reduce((sum, room) => sum + room.inventory, 0),
    booked: mockTrips.filter((trip) => trip.hotelId === hotel.id).length + 2,
  })),
};

export const dashboardService = {
  async host(): Promise<DashboardData> {
    try {
      const { data } = await apiClient.get<DashboardData>("/host/dashboard");
      return data;
    } catch {
      return fallback;
    }
  },

  async admin(): Promise<DashboardData> {
    try {
      const { data } = await apiClient.get<DashboardData>("/admin/dashboard");
      return data;
    } catch {
      return fallback;
    }
  },
};
