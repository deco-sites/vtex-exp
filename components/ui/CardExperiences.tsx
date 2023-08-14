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
  }>;
}

export default function CardExp({ bg, h1, cards }: Props) {
  return (
    <div class="h-[910px] w-full ">
      <div class="flex justify-center align-middle">
        <div class="absolute mt-[140px]">
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
        <div class="flex items-center justify-center max-w-4xl ">
          <div class="grid grid-cols-4 place-items-center min-w-full gap-6">
            {cards?.map((card) => (
              <div class="flex flex-col items-center">
                <div>
                  {card.title && (
                    <div
                      class="min-h-full"
                      dangerouslySetInnerHTML={{ __html: card.title }}
                    />
                  )}
                </div>
                <div class="w-[179px] h-[147px] bg-darkslategray rounded-[12px] flex items-center justify-center">
                  <Image
                    loading="lazy"
                    src={card?.image}
                    alt={card?.description}
                    width={78}
                    height={78}
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
