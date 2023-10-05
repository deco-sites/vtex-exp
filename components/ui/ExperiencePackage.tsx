import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  cards?: Array<{
    title?: string;
    image: {
      icon: LiveImage;
      alt?: string;
    };
    description?: string;
  }>;
}

export default function ExperiencePackage({ title, cards }: Props) {
  function handleScroll() {
    document.addEventListener("scroll", () => {
      const experiencesCardsTitle = document.getElementById(
        "experiences-cards-title",
      );

      const experiencesCards = document.getElementById(
        "experiences-cards",
      );

      if (experiencesCardsTitle && experiencesCards) {
        const { top, bottom } = experiencesCardsTitle.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;

        if (isVisible) {
          experiencesCardsTitle.classList.add("animate-slide-top");
          experiencesCards.classList.add("animate-slide-bottom");
        }
      }
    });
  }

  return (
    <>
      <div class="min-w-full md:min-w-[80vh] max-h-full lg:max-h-[55vh] flex items-center justify-center bg-midnightblue">
        <div class="min-w-[265px] min-h-[632px] md:max-w-[426px] md:max-h-[426px] lg:max-w-[825px] lg:max-h-[265px] mb-32 mt-12 md:mb-0 md:mt-20 lg:mb-0 lg:mt-56">
          <div
            id="experiences-cards-title"
            class="flex text-center items-center justify-center m-10"
          >
            <div class="text-3xl">
              <h1 class="text-[32px] m-10">
                {title}
              </h1>
            </div>
          </div>
          <div
            id="experiences-cards"
            class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-x-20"
          >
            {cards?.map((card) => (
              <div class="flex flex-col items-center text-center ">
                <img
                  src={card.image.icon}
                  alt={card.image.alt}
                  width={30}
                  height={30}
                  class="max-w-[29px]"
                  loading="lazy"
                />
                <h2 class="text-[20px] text-[#FFC4DD] mt-[15px] mb-[10px]">
                  {card.title}
                </h2>
                <p class="text-[14px] text-white max-w-[263px] max-h-[51px] md:max-w-[181px] md:max-h[85] lg:min-w-[181px] lg:min-h-[85px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{ __html: `(${handleScroll.toString()})()` }}
      />
    </>
  );
}
