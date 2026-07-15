import { Suspense } from "react";
import { SearchPageClient } from "@/app/search/search-page-client";
import { Skeleton } from "@/components/ui/skeleton";

export default function SearchPage() {
  return (
    <Suspense fallback={<Skeleton className="container-page h-96" />}>
      <SearchPageClient />
    </Suspense>
  );
}
