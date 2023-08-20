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
      <ul class="flex items-center justify-center gap-4 z-10 rounded-[5px] bg-midnightblue w-[90px] h-[10px]">
        {cards?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div
                class="w-8 h-[10px] rounded-[5px] group-disabled:animate-progress bg-gradient-to-r from-pink from-[length:var(--dot-progress)] to-midnightblue to-[length:var(--dot-progress)]"
                style={{ animationDuration: `${interval}s` }}
              />
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
      <Slider class="carousel carousel-center gap-6 w-full h-full">
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

      <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
    </div>
  );
}

export default function TicketsBuy({ cards, interval }: Props) {
  return (
    <div class="w-full h-[720px] lg:h-full py-20 bg-midnightblue relative">
      <div class="absolute w-[50%] inset-0 translate-y-[75%] translate-x-1/2 gradient opacity-40" />

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
