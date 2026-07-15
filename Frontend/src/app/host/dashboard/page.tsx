"use client";

import Link from "next/link";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuthActions } from "@/hooks/use-auth-actions";
import { useHostDashboard } from "@/hooks/use-dashboard";
import { useAuthStore } from "@/store/auth-store";

export default function HostDashboardPage() {
  const user = useAuthStore((state) => state.user);
  const { becomeHost } = useAuthActions();
  const { data, isLoading } = useHostDashboard();

  if (!user) {
    return (
      <section className="container-page flex min-h-[60vh] items-center justify-center">
        <Card className="w-full max-w-xl">
          <CardHeader>
            <p className="text-sm font-semibold text-primary">Host access</p>
            <h1 className="text-3xl font-black">Login to become a host</h1>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-6 text-muted-foreground">
              Sign in with a guest, host, or admin account to manage hosting
              tools. Guest users can enable host access after login.
            </p>
            <Button asChild className="mt-5">
              <Link href="/login">Login</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    );
  }

  if (user.role === "GUEST") {
    return (
      <section className="container-page flex min-h-[60vh] items-center justify-center">
        <Card className="w-full max-w-xl">
          <CardHeader>
            <p className="text-sm font-semibold text-primary">Become a Host</p>
            <h1 className="text-3xl font-black">Start hosting, {user.name}</h1>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-6 text-muted-foreground">
              Enable host access for your account to open the host dashboard,
              manage hotels, rooms, inventory, revenue, and bookings.
            </p>
            <Button
              className="mt-5"
              disabled={becomeHost.isPending}
              onClick={() => becomeHost.mutate(user)}
            >
              Enable host access
            </Button>
          </CardContent>
        </Card>
      </section>
    );
  }

  if (isLoading || !data) return <Skeleton className="container-page h-96" />;
  return <DashboardShell title="Host dashboard" data={data} />;
}
