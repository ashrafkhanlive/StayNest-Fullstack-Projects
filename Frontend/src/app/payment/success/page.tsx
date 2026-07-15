import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentSuccessPage() {
  return (
    <section className="container-page flex min-h-[65vh] items-center justify-center text-center">
      <div>
        <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
        <h1 className="mt-4 text-4xl font-black">Payment successful</h1>
        <p className="mt-3 text-muted-foreground">Your booking confirmation is ready.</p>
        <Button asChild className="mt-6">
          <Link href="/my-trips">View trips</Link>
        </Button>
      </div>
    </section>
  );
}
