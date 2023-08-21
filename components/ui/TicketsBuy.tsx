import { asset } from "$fresh/runtime.ts";

import ComponentTicketBuy from "$store/components/ui/ComponentTicketBuy.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Slider from "$store/components/ui/Slider.tsx";

import { useId } from "$store/sdk/useId.ts";

import type { Props as CardProps } from "$store/components/ui/ComponentTicketBuy.tsx";

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
      class="flex flex-col items-center justify-center px-0 sm:px-5 md:hidden w-full h-full gap-3"
    >
      <Slider class="carousel carousel-center gap-6 w-full h-full">
        {cards?.map((card, index) => (
          <Slider.Item
            index={index}
            class="carousel-item w-full min-h-full flex items-center justify-center"
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
  function handleScroll() {
    document.addEventListener("scroll", () => {
      const ticketsElement = document.getElementById(
        "tickets-element",
      );

      const ticketsTitle = document.getElementById(
        "tickets-buy-title",
      );

      if (ticketsElement && ticketsTitle) {
        const { top, bottom } = ticketsElement.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;

        if (isVisible) {
          ticketsElement.classList.add("animate-slide-bottom");
          ticketsTitle.classList.add("animate-slide-top");
        }
      }
    });
  }

  return (
    <>
      <div class="w-full h-[720px] lg:h-full py-20 lg:py-56 bg-midnightblue relative lg:overflow-hidden">
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

        <div
          id="tickets-buy-title"
          class="text-[40px] text-white text-center lg:pb-7"
        >
          <h1>
            Tickets
          </h1>
        </div>

        <div id="tickets-element">
          {/* Mobile */}
          <MobileCarousel cards={cards} interval={interval} />

          {/* Desktop */}
          <div class="hidden md:flex items-center justify-center gap-6">
            {cards?.map((card) => <ComponentTicketBuy {...card} />)}
          </div>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{ __html: `(${handleScroll.toString()})()` }}
      />
    </>
  );
}
