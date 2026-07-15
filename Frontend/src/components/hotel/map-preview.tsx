"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { MapPin } from "lucide-react";

export function MapPreview({
  lat,
  lng,
  label,
}: {
  lat: number;
  lng: number;
  label: string;
}) {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({ googleMapsApiKey: key ?? "" });

  if (!key || !isLoaded) {
    return (
      <div className="flex min-h-72 items-center justify-center rounded-[20px] border border-border bg-card p-6 text-center">
        <div>
          <MapPin className="mx-auto h-8 w-8 text-primary" />
          <h3 className="mt-3 font-semibold">{label}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to render the interactive map.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[20px] border border-border">
      <GoogleMap
        zoom={13}
        center={{ lat, lng }}
        mapContainerClassName="h-72 w-full"
        options={{ disableDefaultUI: true, zoomControl: true }}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </div>
  );
}
