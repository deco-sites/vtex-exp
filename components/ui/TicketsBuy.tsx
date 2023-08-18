import ComponentTicketBuy from "deco-sites/vtex-exp/components/ui/ComponentTicketBuy.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Slider from "$store/components/ui/Slider.tsx";

import { useId } from "$store/sdk/useId.ts";

import type { Props as CardProps } from "deco-sites/vtex-exp/components/ui/ComponentTicketBuy.tsx";

export interface Props {
  cards?: CardProps[];
  interval?: number;
}

function Dots({ cards, interval = 0 }: Props) {
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
      <ul class="carousel justify-center col-span-full gap-4 z-10 row-start-4">
        {cards?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-16 sm:w-20 h-0.5 rounded group-disabled:animate-progress bg-gradient-to-r from-base-100 from-[length:var(--dot-progress)] to-[rgba(255,255,255,0.4)] to-[length:var(--dot-progress)]"
                  style={{ animationDuration: `${interval}s` }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function MobileCarousel({ cards, interval }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="flex flex-col items-center justify-center px-0 sm:px-5 md:hidden w-full h-full"
    >
      <Slider class="carousel carousel-center gap-6 col-span-full row-start-2 row-end-5 h-full">
        {cards?.map((card, index) => (
          <Slider.Item
            index={index}
            class="carousel-item w-full flex items-center justify-center"
          >
            <ComponentTicketBuy {...card} />
          </Slider.Item>
        ))}
      </Slider>

      <Dots cards={cards} interval={interval} />

      <SliderJS rootId={id} />
    </div>
  );
}

export default function TicketsBuy({ cards, interval }: Props) {
  return (
    <div class="w-full h-[720px] lg:h-full py-20">
      <div class="text-4xl text-white text-center m-7">
        <h1>
          Tickets
        </h1>
      </div>

      <>
        {/* Mobile */}
        <MobileCarousel cards={cards} interval={interval} />

        {/* Desktop */}
        <div class="hidden md:flex items-center justify-center gap-6">
          {cards?.map((card) => <ComponentTicketBuy {...card} />)}
        </div>
      </>
    </div>
  );
}
