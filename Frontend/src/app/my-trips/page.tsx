"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMyTrips } from "@/hooks/use-bookings";
import { formatCurrency, formatShortDate } from "@/lib/utils";

export default function MyTripsPage() {
  const { data = [] } = useMyTrips();

  return (
    <section className="container-page">
      <h1 className="text-3xl font-black md:text-5xl">My trips</h1>
      <div className="mt-8 grid gap-4">
        {data.map((trip) => (
          <Card key={trip.id}>
            <CardContent className="flex flex-col justify-between gap-4 p-5 md:flex-row md:items-center">
              <div>
                <h2 className="font-bold">{trip.hotel.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {formatShortDate(trip.checkIn)} to {formatShortDate(trip.checkOut)} · {trip.status}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-black">{formatCurrency(trip.total)}</span>
                <Button asChild variant="secondary">
                  <Link href={`/hotels/${trip.hotelId}`}>View</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
