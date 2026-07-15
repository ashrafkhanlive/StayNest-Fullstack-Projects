"use client";

import { SlidersHorizontal } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/constants/hotels";

export function SearchFilters() {
  const router = useRouter();
  const params = useSearchParams();
  const [destination, setDestination] = useState(params.get("destination") ?? "");
  const [category, setCategory] = useState(params.get("category") ?? "all");
  const [sort, setSort] = useState(params.get("sort") ?? "recommended");

  function apply() {
    const next = new URLSearchParams(params.toString());
    if (destination) {
      next.set("destination", destination);
    } else {
      next.delete("destination");
    }
    if (category !== "all") {
      next.set("category", category);
    } else {
      next.delete("category");
    }
    next.set("sort", sort);
    router.push(`/search?${next.toString()}`);
  }

  return (
    <div className="sticky top-24 z-10 rounded-[20px] border border-border bg-card p-3 shadow-sm">
      <div className="grid gap-3 md:grid-cols-[1.2fr_1fr_1fr_auto]">
        <Input
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
          placeholder="Destination"
        />
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All categories</SelectItem>
            {categories.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger>
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="price_asc">Price low to high</SelectItem>
            <SelectItem value="price_desc">Price high to low</SelectItem>
            <SelectItem value="rating">Top rated</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={apply}>
          <SlidersHorizontal className="h-4 w-4" />
          Apply
        </Button>
      </div>
    </div>
  );
}
