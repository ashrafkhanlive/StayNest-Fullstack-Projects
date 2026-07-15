"use client";

import { Building2, Castle, Mountain, Palmtree, Sailboat, Sparkles, Waves } from "lucide-react";
import Link from "next/link";
import { categories } from "@/constants/hotels";

const icons = [Waves, Mountain, Sparkles, Palmtree, Castle, Building2, Sailboat];

export function CategorySlider() {
  return (
    <div className="hide-scrollbar flex gap-3 overflow-x-auto py-2">
      {categories.map((category, index) => {
        const Icon = icons[index % icons.length];
        return (
          <Link
            key={category}
            href={`/search?category=${encodeURIComponent(category)}`}
            className="flex min-w-32 flex-col items-center justify-center rounded-[20px] border border-border bg-card px-4 py-4 text-center text-sm font-semibold shadow-sm transition hover:-translate-y-1 hover:border-primary"
          >
            <Icon className="mb-2 h-5 w-5 text-primary" />
            {category}
          </Link>
        );
      })}
    </div>
  );
}
