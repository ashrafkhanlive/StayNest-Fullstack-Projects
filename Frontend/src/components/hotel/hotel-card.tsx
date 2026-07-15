"use client";

import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useWishlistStore } from "@/store/wishlist-store";
import type { Hotel } from "@/types";
import { cn, formatCurrency } from "@/lib/utils";

export function HotelCard({ hotel }: { hotel: Hotel }) {
  const [index, setIndex] = useState(0);
  const toggle = useWishlistStore((state) => state.toggle);
  const isSaved = useWishlistStore((state) => state.isSaved(hotel.id));

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-[20px] bg-muted">
        <Link href={`/hotels/${hotel.id}`} aria-label={hotel.name}>
          <Image
            src={hotel.images[index]}
            alt={hotel.name}
            width={700}
            height={520}
            className="aspect-[1.12/1] w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>
        <Button
          size="icon"
          variant="secondary"
          className="absolute right-3 top-3 h-9 w-9 bg-white/90"
          aria-label="Save hotel"
          onClick={() => toggle(hotel.id)}
        >
          <Heart
            className={cn(
              "h-4 w-4",
              isSaved && "fill-primary text-primary",
            )}
          />
        </Button>
        {hotel.discount ? (
          <Badge className="absolute left-3 top-3 bg-white text-foreground">
            {hotel.discount}% off
          </Badge>
        ) : null}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1">
          {hotel.images.map((image, imageIndex) => (
            <button
              key={image}
              aria-label={`Show image ${imageIndex + 1}`}
              className={cn(
                "h-1.5 rounded-full bg-white/70 transition-all",
                imageIndex === index ? "w-5" : "w-1.5",
              )}
              onClick={() => setIndex(imageIndex)}
            />
          ))}
        </div>
      </div>
      <Link href={`/hotels/${hotel.id}`} className="mt-3 block">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold">{hotel.name}</h3>
            <p className="text-sm text-muted-foreground">
              {hotel.city}, {hotel.country}
            </p>
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold">
            <Star className="h-4 w-4 fill-foreground" />
            {hotel.rating}
          </div>
        </div>
        <p className="mt-2 text-sm">
          <span className="font-bold">{formatCurrency(hotel.pricePerNight)}</span>{" "}
          <span className="text-muted-foreground">night</span>
        </p>
      </Link>
    </motion.article>
  );
}
