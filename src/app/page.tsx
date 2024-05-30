/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { createClient } from "../lib/commerce-kit";
import { Suspense } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/builder/hero-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between container">
      <Suspense fallback={null}>
        <ProductCarousel />
      </Suspense>
    </main>
  );
}

async function ProductCarousel() {
  const client = createClient();

  const searchResults = await client.shopperSearch.productSearch({
    parameters: { q: "dress", limit: 8 },
  });

  return (
    <div className="px-6 w-full">
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {searchResults?.hits?.map((hit) => (
            <CarouselItem
              key={hit.productId}
              className="pl-1 md:basis-1/2 lg:basis-1/4"
            >
              <Link href={`/product/${hit.productId}`} className="p-1">
                <Card className="overflow-hidden">
                  <CardContent className="flex aspect-square items-center justify-center p-0 ">
                    <img
                      src={hit.image?.disBaseLink || ""}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                      alt={hit.image?.alt || ""}
                    />
                  </CardContent>
                </Card>
                <h3 className="mt-4 text-sm text-foreground">
                  {hit.productName}
                </h3>
                <p className="mt-1 text-lg font-medium text-secondary-foreground">
                  ${hit.price}
                </p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
