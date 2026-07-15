import Image from "next/image";
import Link from "next/link";
import { DestinationCard } from "@/features/home/destination-card";
import { CategorySlider } from "@/features/home/category-slider";
import { HeroSearch } from "@/features/home/hero-search";
import { SectionHeading } from "@/features/home/section-heading";
import { HotelGrid } from "@/components/hotel/hotel-grid";
import { Button } from "@/components/ui/button";
import { destinations, hotels } from "@/constants/hotels";

export default function Home() {
  const featured = hotels.slice(0, 4);
  const trending = [...hotels].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <div>
      <section className="container-page">
        <div className="relative h-[620px] overflow-hidden rounded-[20px] md:h-[560px] xl:h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop"
            alt="Premium villa terrace"
            fill
            priority
            sizes="(min-width: 1280px) 1180px, calc(100vw - 32px)"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 top-0 flex items-center">
            <div className="w-full px-5 md:px-12">
              <div className="max-w-3xl text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Premium stays
                </p>
                <h1 className="mt-4 text-4xl font-black md:text-7xl">
                  StayNest
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
                  Discover design-led hotels, villas, and city escapes with a
                  polished booking flow for guests, hosts, and admins.
                </p>
              </div>
              <div className="mt-8 max-w-5xl">
                <HeroSearch />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page mt-12">
        <SectionHeading eyebrow="Explore" title="Browse by category" />
        <CategorySlider />
      </section>

      <section className="container-page mt-14">
        <SectionHeading
          eyebrow="Featured"
          title="Guest favorite stays"
          action={
            <Button asChild variant="secondary">
              <Link href="/search">View all</Link>
            </Button>
          }
        />
        <HotelGrid hotels={featured} />
      </section>

      <section className="container-page mt-14">
        <SectionHeading eyebrow="Destinations" title="Popular places right now" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <DestinationCard key={destination.city} {...destination} />
          ))}
        </div>
      </section>

      <section className="container-page mt-14">
        <SectionHeading eyebrow="Trending" title="High-rated escapes" />
        <HotelGrid hotels={trending} />
      </section>

      <section className="container-page mt-14 grid gap-5 md:grid-cols-3">
        {[
          ["Special offers", "Save on week-long stays and seasonal launches."],
          ["Local experiences", "Curated food, design, wellness, and culture cards."],
          ["Host tools", "Clean dashboards for rooms, pricing, inventory, and revenue."],
        ].map(([title, body]) => (
          <div
            key={title}
            className="rounded-[20px] border border-border bg-card p-6 shadow-sm"
          >
            <h3 className="text-xl font-black">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
