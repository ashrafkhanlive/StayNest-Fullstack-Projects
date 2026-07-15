"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useBookingStore } from "@/store/booking-store";
import { formatCurrency, formatShortDate } from "@/lib/utils";

export default function BookingPage() {
  const router = useRouter();
  const draft = useBookingStore((state) => state.draft);

  if (!draft) {
    return (
      <Card className="container-page max-w-xl">
        <CardContent className="p-6 text-center">
          <h1 className="text-2xl font-black">Start with a stay</h1>
          <Button className="mt-4" onClick={() => router.push("/search")}>
            Search hotels
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="container-page max-w-2xl">
      <CardHeader>
        <h1 className="text-3xl font-black">Confirm your booking</h1>
        <p className="text-sm text-muted-foreground">
          {formatShortDate(draft.checkIn)} to {formatShortDate(draft.checkOut)} for{" "}
          {draft.guests} guests
        </p>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-3 rounded-[20px] bg-muted p-4 text-sm">
          <div className="flex justify-between">
            <span>Nights</span>
            <span>{draft.nights}</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatCurrency(draft.subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes</span>
            <span>{formatCurrency(draft.taxes)}</span>
          </div>
          <div className="flex justify-between font-black">
            <span>Total</span>
            <span>{formatCurrency(draft.total)}</span>
          </div>
        </div>
        <Button onClick={() => router.push("/checkout")}>Continue to checkout</Button>
      </CardContent>
    </Card>
  );
}
