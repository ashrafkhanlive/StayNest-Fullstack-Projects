import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { hotels, mockTrips } from "@/constants/hotels";
import { formatCurrency } from "@/lib/utils";

export function ManagementTable({ type }: { type: "hotels" | "rooms" | "bookings" | "users" }) {
  const rows =
    type === "bookings"
      ? mockTrips.map((trip) => ({
          id: trip.id,
          name: trip.hotel.name,
          detail: trip.status,
          value: formatCurrency(trip.total),
        }))
      : hotels.map((hotel) => ({
          id: hotel.id,
          name: type === "rooms" ? hotel.rooms[0].name : hotel.name,
          detail: type === "users" ? hotel.host.name : `${hotel.city}, ${hotel.country}`,
          value:
            type === "rooms"
              ? `${hotel.rooms[0].inventory} rooms`
              : formatCurrency(hotel.pricePerNight),
        }));

  return (
    <section className="container-page">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-primary">Management</p>
          <h1 className="mt-2 text-3xl font-black capitalize md:text-5xl">{type}</h1>
        </div>
        <Button asChild>
          <Link href="/host/dashboard">Dashboard</Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <h2 className="font-bold">Inventory and operations</h2>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="text-muted-foreground">
                <tr className="border-b border-border">
                  <th className="py-3">ID</th>
                  <th>Name</th>
                  <th>Detail</th>
                  <th>Value</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="border-b border-border last:border-0">
                    <td className="py-4 font-mono text-xs">{row.id}</td>
                    <td className="font-semibold">{row.name}</td>
                    <td className="text-muted-foreground">{row.detail}</td>
                    <td>{row.value}</td>
                    <td className="text-right">
                      <Button variant="secondary" size="sm">Edit</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
