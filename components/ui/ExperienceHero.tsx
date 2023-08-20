import { asset } from "$fresh/runtime.ts";

import type { Image as ImageType } from "deco-sites/std/components/types.ts";

import TicketSeller from "./TicketSeller.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";

export interface Props {
  backgroundImage: ImageType;
  lcp?: boolean;
}

export default function Hero({ backgroundImage, lcp }: Props) {
  return (
    <div class="w-full h-full">
      <div
        class="hero place-items-start min-h-full overflow-hidden"
        width="100%"
        height="100%"
        sizes="100vw, 100vh"
        style={`background-image: url(${backgroundImage});`}
        loading={lcp ? "eager" : "lazy"}
      >
        <div class="hero-overlay bg-gradient-to-b from-[#12264400] to-darkslategray w-screen mix-blend-multiply" />

        <div class="flex flex-col text-white pt-32 px-4 lg:pl-32 space-y-24 2xl:space-y-28 w-screen h-full z-10 relative pb-4">
          {/* Breadcrumb */}
          <div>
            <Breadcrumb
              itemListElement={[{
                name: "US - January",
                item: "/experiences-us-january",
                "@type": "ListItem",
                position: 1,
              }, {
                name: "BR - June",
                item: "/experiences-br-june",
                "@type": "ListItem",
                position: 2,
              }, {
                name: "MX - September",
                item: "/experiences-mx-september",
                "@type": "ListItem",
                position: 3,
              }]}
            />
          </div>

          <div class="flex flex-col max-w-[480px] items-start gap-11 h-full w-full">
            <div class="flex flex-col w-full gap-5">
              <div class="flex flex-col gap-2 leading-tight tracking-wide font-semibold">
                <h1 class="text-2xl">VTEX Experience - US</h1>
                <h2 class="text-[40px] sm:text-[50px]">NRF 2023</h2>
              </div>

              <span class="text-xl sm:text-2xl text-pink">
                January 13th to 19th
              </span>

              <p class="sm:text-lg text-left leading-5">
                In this upcoming edition, VTEX Experience introduces you to the
                retail operation of the city with the most innovative ideas in
                the market: New York!
              </p>
            </div>

            <div class="flex items-start justify-center gap-6 w-full md:w-auto">
              <TicketSeller />
              <TicketSeller />
            </div>

            <div class="hidden sm:block absolute inset-0 translate-x-[60%] translate-y-[18%] z-10 w-full h-full">
              <img
                loading="lazy"
                alt="Mask Gradient"
                width={1280}
                height={800}
                src={asset("/mask-gradient.webp")}
                class="bg-no-repeat bg-contain w-[278px] h-[243px] lg:w-[522px] lg:h-[456px] 2xl:w-[600px] 2xl:h-[512px]"
              />
            </div>

            <div class="hidden sm:block absolute inset-0 translate-x-[80%] lg:translate-x-[90%] translate-y-[40%] lg:translate-y-[58%] z-10 w-full h-full">
              <img
                loading="lazy"
                alt="Mask Gradient"
                width={1280}
                height={800}
                src={asset("/mask-gradient.webp")}
                class="bg-no-repeat bg-contain w-[260px] h-[227px] lg:w-[409px] lg:h-[357px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
