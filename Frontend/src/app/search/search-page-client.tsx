"use client";

import { useSearchParams } from "next/navigation";

import { HotelGrid } from "@/components/hotel/hotel-grid";
import { SearchFilters } from "@/components/hotel/search-filters";
import { Button } from "@/components/ui/button";
import { useHotels } from "@/hooks/use-hotels";
import type { HotelSearchParams } from "@/types";

export function SearchPageClient() {
  const params = useSearchParams();
  const query: HotelSearchParams = {
    destination: params.get("destination") ?? undefined,
    category: params.get("category") ?? undefined,
    sort: (params.get("sort") as HotelSearchParams["sort"]) ?? "recommended",
    guests: params.get("guests") ? Number(params.get("guests")) : undefined,
    page: 0,
    size: 12,
  };
  const { data, isLoading, refetch, isFetching } = useHotels(query);

  return (
    <section className="container-page">
      <div className="mb-8">
        <p className="text-sm font-semibold text-primary">Hotel search</p>
        <h1 className="mt-2 text-3xl font-black md:text-5xl">
          Find your next stay
        </h1>
      </div>
      <SearchFilters />
      <div className="mt-8">
        <HotelGrid hotels={data?.content ?? []} isLoading={isLoading} />
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="secondary" disabled={isFetching} onClick={() => refetch()}>
          Load more
        </Button>
      </div>
    </section>
  );
}
