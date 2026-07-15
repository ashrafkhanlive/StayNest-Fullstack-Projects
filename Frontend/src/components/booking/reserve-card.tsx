"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBookingStore } from "@/store/booking-store";
import type { Hotel } from "@/types";
import { formatCurrency, getNights } from "@/lib/utils";

export function ReserveCard({ hotel }: { hotel: Hotel }) {
  const router = useRouter();
  const setDraft = useBookingStore((state) => state.setDraft);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const nights = getNights(checkIn, checkOut);
  const subtotal = nights * hotel.pricePerNight;
  const discount = hotel.discount ? Math.round(subtotal * (hotel.discount / 100)) : 0;
  const taxes = Math.round((subtotal - discount) * 0.12);
  const total = subtotal - discount + taxes;

  function reserve() {
    setDraft({
      hotelId: hotel.id,
      roomId: hotel.rooms[0]?.id,
      checkIn,
      checkOut,
      guests,
      nights,
      subtotal,
      discount,
      taxes,
      total,
    });
    router.push(`/booking/${hotel.id}`);
  }

  return (
    <aside className="sticky top-28 rounded-[20px] border border-border bg-card p-5 shadow-xl">
      <div className="flex items-end justify-between gap-3">
        <p>
          <span className="text-2xl font-bold">
            {formatCurrency(hotel.pricePerNight)}
          </span>{" "}
          <span className="text-sm text-muted-foreground">night</span>
        </p>
        <p className="text-sm font-semibold">{hotel.rating} rating</p>
      </div>
      <div className="mt-5 grid gap-3">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label htmlFor="reserve-check-in">Check in</Label>
            <Input
              id="reserve-check-in"
              type="date"
              value={checkIn}
              onChange={(event) => setCheckIn(event.target.value)}
              className="mt-2 rounded-2xl"
            />
          </div>
          <div>
            <Label htmlFor="reserve-check-out">Check out</Label>
            <Input
              id="reserve-check-out"
              type="date"
              value={checkOut}
              onChange={(event) => setCheckOut(event.target.value)}
              className="mt-2 rounded-2xl"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="reserve-guests">Guests</Label>
          <Input
            id="reserve-guests"
            type="number"
            min={1}
            value={guests}
            onChange={(event) => setGuests(Number(event.target.value))}
            className="mt-2 rounded-2xl"
          />
        </div>
      </div>
      <Button className="mt-5 w-full" disabled={!nights} onClick={reserve}>
        Reserve
      </Button>
      <div className="mt-5 grid gap-2 text-sm">
        <div className="flex justify-between">
          <span>
            {formatCurrency(hotel.pricePerNight)} x {nights || 0} nights
          </span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span>-{formatCurrency(discount)}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes</span>
          <span>{formatCurrency(taxes)}</span>
        </div>
        <div className="flex justify-between border-t border-border pt-3 font-bold">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
    </aside>
  );
}
