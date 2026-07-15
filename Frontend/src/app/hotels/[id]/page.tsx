import { notFound } from "next/navigation";
import { Gallery } from "@/components/hotel/gallery";
import { MapPreview } from "@/components/hotel/map-preview";
import { ReserveCard } from "@/components/booking/reserve-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { hotels } from "@/constants/hotels";

export async function generateStaticParams() {
  return hotels.map((hotel) => ({ id: hotel.id }));
}

export default async function HotelDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hotel = hotels.find((item) => item.id === id);
  if (!hotel) notFound();

  return (
    <section className="container-page">
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2">
          {hotel.isGuestFavorite ? <Badge>Guest favorite</Badge> : null}
          <Badge>{hotel.category}</Badge>
        </div>
        <h1 className="mt-3 text-3xl font-black md:text-5xl">{hotel.name}</h1>
        <p className="mt-2 text-muted-foreground">
          {hotel.location}, {hotel.city}, {hotel.country}
        </p>
      </div>
      <Gallery images={hotel.images} name={hotel.name} />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
        <div>
          <div className="flex items-center gap-4 border-b border-border pb-6">
            <Avatar className="h-14 w-14">
              <AvatarImage src={hotel.host.avatar} alt={hotel.host.name} />
              <AvatarFallback>{hotel.host.name.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-bold">Hosted by {hotel.host.name}</h2>
              <p className="text-sm text-muted-foreground">
                {hotel.host.responseRate}% response rate
              </p>
            </div>
          </div>

          <p className="mt-6 leading-7 text-muted-foreground">{hotel.description}</p>

          <section className="mt-10">
            <h2 className="text-2xl font-black">Amenities</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {hotel.amenities.map((amenity) => (
                <div key={amenity.id} className="rounded-[20px] border border-border bg-card p-4">
                  {amenity.label}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-black">Room availability</h2>
            <div className="mt-4 grid gap-3">
              {hotel.rooms.map((room) => (
                <div key={room.id} className="rounded-[20px] border border-border bg-card p-5">
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="font-bold">{room.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {room.beds} beds, sleeps {room.capacity}
                      </p>
                    </div>
                    <p className="font-semibold">{room.inventory} available</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-black">Reviews</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {hotel.reviews.map((review) => (
                <div key={review.id} className="rounded-[20px] border border-border bg-card p-5">
                  <p className="font-bold">{review.guestName}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-black">Policies</h2>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {hotel.policies.map((policy) => (
                <li key={policy}>{policy}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="mb-4 text-2xl font-black">Where you will be</h2>
            <MapPreview lat={hotel.lat} lng={hotel.lng} label={hotel.location} />
          </section>
        </div>
        <ReserveCard hotel={hotel} />
      </div>
    </section>
  );
}
