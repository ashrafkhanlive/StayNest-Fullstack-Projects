import { HotelCard } from "@/components/hotel/hotel-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Hotel } from "@/types";

export function HotelGrid({
  hotels,
  isLoading,
}: {
  hotels: Hotel[];
  isLoading?: boolean;
}) {
  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="space-y-3">
            <Skeleton className="aspect-[1.12/1]" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-2/5" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}
