import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  subtitle: string;
  details: string;
  image?: {
    link: LiveImage;
    description: string;
  };
}

export default function InfoSection(
  { title, subtitle, details, image }: Props,
) {
  return (
    <section class="flex w-full h-full py-4 px-2 lg:px-0">
      <div class="flex w-full items-center justify-center">
        <div class="max-w-4xl w-full flex items-center justify-between">
          <div class="flex flex-col gap-12">
            <div class="flex flex-col text-center text-darkgray">
              <h1 class="text-[40px]">3</h1>
              <span>days</span>
            </div>
          </div>

          <div class="flex flex-col max-w-[547px]">
            <h1 class="text-white text-[40px]">{title}</h1>
            <span class="text-pink text-2xl pt-[30px]">{subtitle}</span>
            <p class="text-darkgray pt-3">{details}</p>
            {image && (
              <Image
                class="pt-[30px] max-h-full"
                width={379}
                height={149}
                src={image.link}
                alt={image.description}
                loading="lazy"
              />
            )}
            <button class="flex items-center justify-center rounded-2xl lg:rounded-xl bg-pink py-3 max-w-[142px] h-[48px] border text-black font-semibold border-pink hover:text-pink hover:bg-midnightblue transition-all duration-150 mt-11">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
