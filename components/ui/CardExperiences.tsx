import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface Props {
  bg: {
    image: {
      mobile: LiveImage;
      desktop: LiveImage;
    };
    description?: string;
  };
  h1: HTML;
  cards?: Array<{
    title?: string;
    image: {
      icon: LiveImage;
      alt?: string;
    };
    description?: string;
  }>;
}

export default function CardExp({ bg, h1, cards }: Props) {
  function handleScroll() {
    document.addEventListener("scroll", () => {
      const cardExperiencesTitle = document.getElementById(
        "card-experiences-h1",
      );
      const cardBackground = document.getElementById("card-background-image");
      const cards = document.getElementById("cards");

      if (cardBackground && cardExperiencesTitle && cards) {
        const { top, bottom } = cardBackground.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;

        if (isVisible) {
          cardExperiencesTitle.classList.add("animate-slide-top");
          cardBackground.classList.add("animate-slide-bottom");
          cards.classList.add("animate-slide-top");
        }
      }
    });
  }

  return (
    <>
      <div class="h-[930px] sm:h-[680px] md:h-[610px] lg:h-[500px] w-full overflow-hidden">
        <div class="flex justify-center align-middle pt-8">
          {bg.image && (
            <Picture
              id="card-background-image"
              class="block absolute mt-[400px] sm:mt-[280px] md:mt-[240px] lg:mt-[140px]"
            >
              <Source
                media="(max-width: 639px)"
                fetchPriority="auto"
                src={bg.image.mobile}
                width={364}
                height={647}
              />
              <Source
                media="(min-width: 640px)"
                fetchPriority="auto"
                src={bg.image.desktop}
                width={742}
                height={500}
              />
              <img
                class="object-cover w-[364px] h-[647px] sm:w-[742px] sm:h-[500px]"
                loading="lazy"
                src={bg.image.desktop}
                alt={bg.description}
              />
            </Picture>
          )}
          {h1 && (
            <div
              id="card-experiences-h1"
              dangerouslySetInnerHTML={{ __html: h1 }}
            />
          )}
        </div>
        <div class="flex justify-center items-center w-full pt-12">
          <div class="flex items-center justify-center sm:min-w-full lg:min-w-[980px]">
            <div
              id="cards"
              class="grid grid-cols-2 sm:grid-cols-4 items-start justify-start lg:place-items-center min-w-full gap-y-6 sm:gap-y-0"
            >
              {cards?.map((card, index) => (
                <div
                  class={`flex flex-col items-center ${
                    index === 1 && "lg:-translate-x-4 lg:translate-y-12" ||
                    index === 2 && "lg:translate-x-4 lg:translate-y-16" ||
                    index === 3 && "translate-y-12 sm:translate-y-0"
                  }`}
                >
                  {card.title && (
                    <div class="min-h-full max-w-[75%] sm:max-w-full w-full text-center">
                      <span class="text-pink text-lg sm:text-base lg:text-lg">
                        {card.title}
                      </span>
                    </div>
                  )}
                  {card.image && (
                    <div class="flex flex-col w-[141px] h-full lg:w-[179px] lg:h-[147px] bg-black-dark rounded-xl">
                      <div class="bg-midnightblue rounded-xl flex items-center justify-center w-full h-full py-3 lg:py-0">
                        <img
                          loading="lazy"
                          src={card?.image.icon}
                          alt={card?.image.alt}
                          width={78}
                          height={78}
                          class="object-cover p-2"
                        />
                      </div>

                      <div class="block lg:hidden h-full text-center p-3 text-lightsteelblue text-sm">
                        {card.description}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{ __html: `(${handleScroll.toString()})()` }}
      />
    </>
  );
}
