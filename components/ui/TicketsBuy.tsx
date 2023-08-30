import { asset } from "$fresh/runtime.ts";

import vtexProductList from "deco-sites/std/loaders/vtex/legacy/productList.ts";

import ComponentTicketBuy from "deco-sites/vtex-exp/components/ui/ComponentTicketBuy.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Slider from "$store/components/ui/Slider.tsx";

import { useId } from "$store/sdk/useId.ts";
import { SendEventOnLoad } from "$store/sdk/analytics.tsx";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import { useOffer } from "$store/sdk/useOffer.ts";

import type { Context } from "deco-sites/std/packs/vtex/accounts/vtex.ts";
import type { Product, ProductLeaf } from "deco-sites/std/commerce/types.ts";

export interface Props {
  cards?: Product[] | null;
  interval?: number;
}

function Dots(
  { tickets, interval = 0 }: Omit<Props, "cards"> & {
    tickets: (ProductLeaf[] | undefined)[];
  },
) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="flex items-center justify-center gap-4 z-10">
        {tickets?.flat().map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div
                class="w-2 h-2 rounded-full group-disabled:animate-progress bg-gradient-to-r from-pink from-[length:var(--dot-progress)] to-midnightblue to-[length:var(--dot-progress)]"
                style={{ animationDuration: `${interval}s` }}
              />
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function MobileCarousel(
  { tickets, interval }: Omit<Props, "cards"> & {
    tickets: (ProductLeaf[] | undefined)[];
  },
) {
  const id = useId();

  return (
    <div
      id={id}
      class="flex flex-col items-center justify-center px-0 sm:px-5 md:hidden w-full h-full"
    >
      <Slider class="carousel carousel-center gap-6 w-full h-full">
        {tickets?.flat().map((card, index) => (
          <Slider.Item
            index={index}
            class="carousel-item w-full flex items-center justify-center"
          >
            <ComponentTicketBuy
              product={card ?? null}
            />
          </Slider.Item>
        ))}
      </Slider>

      <Dots tickets={tickets} interval={interval} />

      <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
    </div>
  );
}

export default function TicketsBuy({ cards, interval }: Props) {
  if (!cards || cards.length === 0) {
    return null;
  }

  const tickets = cards.map((card) => card.isVariantOf?.hasVariant);

  return (
    <div
      id="tickets"
      class="w-full h-[720px] md:h-full py-20 bg-midnightblue relative md:overflow-hidden"
    >
      <div class="absolute w-[50%] inset-0 translate-y-[75%] translate-x-1/2 gradient opacity-40" />

      <img
        loading="lazy"
        alt="Gradient"
        width={771}
        height={738}
        src={asset("/mask-gradient-2.webp")}
        class="hidden lg:block absolute inset-0 bg-no-repeat bg-cover w-[771px] h-[738px] tickets-buy-gradient"
      />

      <img
        loading="lazy"
        alt="Gradient"
        width={771}
        height={738}
        src={asset("/mask-gradient-2.webp")}
        class="hidden lg:block absolute inset-0 bg-no-repeat bg-cover w-[771px] h-[738px] tickets-buy-gradient-2 xl:tickets-buy-gradient-2-xl 2xl:tickets-buy-gradient-2-2xl"
      />

      <div id="card-content" class="text-4xl text-white text-center lg:pb-7">
        <h1>
          Tickets
        </h1>
      </div>

      <>
        {/* Mobile */}
        <MobileCarousel tickets={tickets} interval={interval} />

        {/* Desktop */}
        <div class="hidden md:flex items-center justify-center">
          <div class="flex flex-wrap items-center justify-center max-w-5xl gap-10">
            {tickets?.flat().map((card) => (
              <ComponentTicketBuy
                product={card ?? null}
              />
            ))}
          </div>
        </div>
      </>
      <SendEventOnLoad
        event={{
          name: "view_item_list",
          params: {
            item_list_name: "TicketsBuy",
            items: cards.map((product) =>
              mapProductToAnalyticsItem({
                product,
                ...(useOffer(product.offers)),
              })
            ),
          },
        }}
      />
    </div>
  );
}

export const loader = async (props: Props, req: Request, ctx: Context) => {
  const url = new URL(req.url);
  const parts = url.href.split("/");
  const term = parts[parts.length - 1];

  const data = await vtexProductList(
    { term: term !== "experiences" ? term.substring(0, 2) : "" },
    req,
    ctx,
  );

  return { ...props, cards: data };
};
