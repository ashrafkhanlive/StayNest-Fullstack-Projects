import Image from "next/image";
import Link from "next/link";

export function DestinationCard({
  city,
  country,
  image,
}: {
  city: string;
  country: string;
  image: string;
}) {
  return (
    <Link href={`/search?destination=${city}`} className="group relative overflow-hidden rounded-[20px]">
      <Image
        src={image}
        alt={city}
        width={650}
        height={520}
        className="aspect-[1.1/1] w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
        <h3 className="text-xl font-black">{city}</h3>
        <p className="text-sm opacity-90">{country}</p>
      </div>
    </Link>
  );
}
