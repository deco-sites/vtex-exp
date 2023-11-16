import { asset } from "$fresh/runtime.ts";

import vtexProductList from "deco-sites/std/loaders/vtex/legacy/productList.ts";

import TicketSeller from "./TicketSeller.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";

import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import type { Context } from "deco-sites/std/packs/vtex/accounts/vtex.ts";
import type { ListItem, Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  backgroundImage: ImageType;
  lcp?: boolean;
  event?: string;
  title?: string;
  date?: string;
  description?: string;
  cards?: Product[] | null;
}

export default function Hero(
  { backgroundImage, lcp, event, title, description, date, cards }: Props,
) {
  const tickets = cards?.map((card) => card.isVariantOf?.hasVariant);

  const itemListElement: ListItem[] = cards?.map((card, index) => ({
    name: card?.isVariantOf?.name || "",
    item: `/experiences/us/${
      card?.isVariantOf?.name?.toLowerCase()?.replace(/\s+/g, "-")
    }`,
    "@type": "ListItem",
    position: index + 1,
  })) || [];

  return (
    <div class="w-full h-full">
      <div
        class="hero place-items-start min-h-full overflow-hidden"
        width="100%"
        height="100%"
        sizes="100vw, 100vh"
        style={`background-image: url(${backgroundImage});`}
        preload="true"
        loading={lcp ? "eager" : "lazy"}
      >
        <div class="hero-overlay bg-gradient-to-b from-[#12264400] to-darkslategray w-screen mix-blend-multiply" />

        <div class="flex flex-col text-white pt-32 px-4 lg:pl-14 xl:pl-48 space-y-24 2xl:space-y-28 w-screen h-full z-10 relative pb-4">
          {/* Breadcrumb */}
          <div class="animate-slide-right">
            <Breadcrumb
              itemListElement={itemListElement}
            />
          </div>

          <div class="flex flex-col max-w-[480px] items-start gap-11 h-full w-full">
            <div class="flex flex-col w-full gap-5 animate-slide-left">
              <div class="flex flex-col gap-2 leading-tight tracking-wide font-semibold">
                <h1 class="text-2xl">{title ?? "VTEX Experience - US"}</h1>
                <h2 class="text-[40px] sm:text-[50px]">
                  {event ?? "NRF 2023"}
                </h2>
              </div>

              <span class="text-xl sm:text-2xl text-pink">
                {date ?? "January 13th to 19th"}
              </span>

              <p class="sm:text-lg text-left leading-5">
                {description ??
                  "In this upcoming edition, VTEX Experience introduces you to the retail operation of the city with the most innovative ideas in the market: New York!"}
              </p>
            </div>

            <div class="grid grid-cols-2 items-start justify-start gap-6 w-full md:w-auto animate-slide-bottom">
              {tickets?.flat().map((card) => (
                <TicketSeller
                  product={card ?? null}
                />
              ))}
            </div>

            <div class="hidden sm:block absolute inset-0 translate-x-[60%] translate-y-[18%] z-10 w-full h-full">
              <img
                loading="lazy"
                alt="Mask Gradient"
                width={1280}
                height={800}
                src={asset("/mask-gradient.webp")}
                class="bg-no-repeat bg-contain w-[278px] h-[243px] lg:w-[522px] lg:h-[456px] 2xl:w-[600px] 2xl:h-[512px] animate-slide-left"
              />
            </div>

            <div class="hidden sm:block absolute inset-0 translate-x-[80%] lg:translate-x-[90%] translate-y-[40%] lg:translate-y-[58%] z-10 w-full h-full">
              <img
                loading="lazy"
                alt="Mask Gradient"
                width={1280}
                height={800}
                src={asset("/mask-gradient.webp")}
                class="bg-no-repeat bg-contain w-[260px] h-[227px] lg:w-[409px] lg:h-[357px] animate-slide-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
