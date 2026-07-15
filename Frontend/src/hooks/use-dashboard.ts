"use client";

import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "@/services/dashboard-service";

export function useHostDashboard() {
  return useQuery({
    queryKey: ["dashboard", "host"],
    queryFn: dashboardService.host,
  });
}

export function useAdminDashboard() {
  return useQuery({
    queryKey: ["dashboard", "admin"],
    queryFn: dashboardService.admin,
  });
}
