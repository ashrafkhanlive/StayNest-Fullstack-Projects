"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSearch() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  function submit() {
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    params.set("guests", String(guests));
    router.push(`/search?${params.toString()}`);
  }

  return (
    <div className="grid gap-3 rounded-[20px] border border-white/60 bg-white/90 p-3 shadow-2xl backdrop-blur md:grid-cols-[1.3fr_1fr_1fr_0.8fr_auto]">
      <Input
        value={destination}
        onChange={(event) => setDestination(event.target.value)}
        placeholder="Where are you going?"
        className="rounded-2xl bg-white"
      />
      <Input
        type="date"
        value={checkIn}
        onChange={(event) => setCheckIn(event.target.value)}
        className="rounded-2xl bg-white"
      />
      <Input
        type="date"
        value={checkOut}
        onChange={(event) => setCheckOut(event.target.value)}
        className="rounded-2xl bg-white"
      />
      <Input
        type="number"
        min={1}
        value={guests}
        onChange={(event) => setGuests(Number(event.target.value))}
        className="rounded-2xl bg-white"
      />
      <Button size="icon" onClick={submit} aria-label="Search">
        <Search className="h-5 w-5" />
      </Button>
    </div>
  );
}
