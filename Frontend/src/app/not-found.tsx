import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[65vh] items-center justify-center text-center">
      <div>
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="mt-2 text-4xl font-black">This stay checked out</h1>
        <p className="mt-3 text-muted-foreground">The page you are looking for is not available.</p>
        <Button asChild className="mt-6">
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </section>
  );
}
