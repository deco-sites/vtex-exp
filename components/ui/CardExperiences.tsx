import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface Props {
  bg: {
    image: LiveImage;
    description?: string;
  };
  h1: HTML;
  cards?: Array<{
    title?: HTML;
    image: LiveImage;
    description?: string;
    spaceTop?: number;
  }>;
}

export default function CardExp({ bg, h1, cards }: Props) {
  return (
    <div class="h-[500px] w-full">
      <div class="flex justify-center align-middle">
        <div class="hidden md:block absolute mt-[140px]">
          <Image
            loading="lazy"
            src={bg.image}
            alt={bg.description}
            width={742}
            height={500}
          />
        </div>
        <h1 class="m-10">
          {h1 && (
            <div
              class=""
              dangerouslySetInnerHTML={{ __html: h1 }}
            />
          )}
        </h1>
      </div>
      <div class="flex justify-center items-center w-full">
        <div class="flex items-center justify-center min-w-full lg:min-w-[980px]">
          <div class="grid grid-cols-2 md:grid-cols-4 place-items-center min-w-full">
            {cards?.map((card, index) => (
              <div
                style={{ transform: `translateY(${card?.spaceTop}px)` }}
                class={`flex flex-col items-center ${
                  index === 1 && "-translate-x-4" ||
                  index === 2 && "translate-x-4"
                }`}
              >
                {card.title && (
                  <div
                    class="min-h-full"
                    dangerouslySetInnerHTML={{ __html: card.title }}
                  />
                )}
                <div class="bg-[#122644] rounded-[12px] flex items-center justify-center w-[179px] h-[147px]">
                  <img
                    loading="lazy"
                    src={card?.image}
                    alt={card?.description}
                    width={78}
                    height={78}
                    class="object-cover p-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
