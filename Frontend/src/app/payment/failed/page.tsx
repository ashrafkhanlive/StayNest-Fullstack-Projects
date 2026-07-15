import Link from "next/link";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentFailedPage() {
  return (
    <section className="container-page flex min-h-[65vh] items-center justify-center text-center">
      <div>
        <XCircle className="mx-auto h-14 w-14 text-destructive" />
        <h1 className="mt-4 text-4xl font-black">Payment failed</h1>
        <p className="mt-3 text-muted-foreground">You can retry checkout from your booking.</p>
        <Button asChild className="mt-6">
          <Link href="/checkout">Retry checkout</Link>
        </Button>
      </div>
    </section>
  );
}
