import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import Hero from "./Hero.tsx";
import type { Props as HeroProps } from "./Hero.tsx";
import TicketSelector from "./TicketSelector.tsx";

export interface Props {
  heros?: HeroProps[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Buttons() {
  return (
    <>
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="btn btn-circle glass">
          <Icon
            class="text-base-100"
            size={24}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="btn btn-circle glass">
          <Icon
            class="text-base-100"
            size={24}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

function HeroCarousel({ heros, preload, interval }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px] h-screen relative"
    >
      <Slider class="carousel carousel-center w-full col-span-full row-span-full gap-6 h-full">
        {heros?.map((hero, index) => (
          <Slider.Item index={index} class="carousel-item w-full h-full">
            <Hero {...hero} lcp={index === 0 && preload} />
          </Slider.Item>
        ))}
      </Slider>

      <Buttons />

      <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />

      <div class="absolute flex items-center justify-center inset-0 translate-x-1/2 translate-y-[38%] z-10 w-1/2">
        <TicketSelector />
      </div>
    </div>
  );
}

export default HeroCarousel;
