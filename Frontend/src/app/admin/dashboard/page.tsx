"use client";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Skeleton } from "@/components/ui/skeleton";
import { useAdminDashboard } from "@/hooks/use-dashboard";

export default function AdminDashboardPage() {
  const { data, isLoading } = useAdminDashboard();
  if (isLoading || !data) return <Skeleton className="container-page h-96" />;
  return <DashboardShell title="Admin dashboard" data={data} />;
}
