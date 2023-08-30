import SliderJS from "$store/islands/SliderJS.tsx";
import Slider from "$store/components/ui/Slider.tsx";

import { useId } from "$store/sdk/useId.ts";

import type { Image as ImageType } from "deco-sites/std/components/types.ts";

export interface Props {
  sponsors: {
    title: string;
    logos?: Array<{
      image: ImageType;
      description: string;
    }>;
  }[];

  interval: number;
}

export default function Sponsors({ sponsors, interval = 0 }: Props) {
  const id = useId();

  function handleScroll() {
    document.addEventListener("scroll", () => {
      const sponsors = document.getElementById("sponsors-slider");

      if (sponsors) {
        const { top, bottom } = sponsors.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;

        if (isVisible) {
          sponsors.classList.add("animate-slide-bottom");
        }
      }
    });
  }

  return (
    <>
      <section
        id={id}
        class="flex items-center justify-center pb-14 sm:px-5 sm:pt-5 sm:pb-20 w-full h-full bg-midnightblue"
      >
        <Slider
          id="sponsors-slider"
          class="carousel carousel-center gap-6 col-span-full row-start-2 row-end-5 h-full"
        >
          {sponsors?.map((sponsor, index) => (
            <Slider.Item
              index={index}
              class="carousel-item w-full flex flex-col gap-14 md:gap-24 items-center justify-center"
            >
              <div class="text-2xl md:text-[32px] text-center flex flex-col md:flex-row gap-1 md:gap-3">
                <span>Sponsors:</span>
                <span class="uppercase text-pink">{sponsor.title}</span>
              </div>

              <div class="flex flex-wrap items-center justify-center gap-12 md:space-x-12">
                {sponsor?.logos?.map((item) => (
                  <img
                    src={item.image}
                    alt={item.description}
                    width={240}
                    height={60}
                    loading="lazy"
                    class="object-contain object-center w-[240px] h-[60px]"
                  />
                ))}
              </div>
            </Slider.Item>
          ))}
        </Slider>

        <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
      </section>

      <script
        dangerouslySetInnerHTML={{ __html: `(${handleScroll.toString()})()` }}
      />
    </>
  );
}
