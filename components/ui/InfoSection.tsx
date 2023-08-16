import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface InfoProps {
  firstContent: string;
  label: string;
}

export interface Props {
  infos: InfoProps[];
  title: string;
  subtitle: string;
  details: string;
  image?: {
    link: LiveImage;
    description: string;
  };
}

function Info({ firstContent, label }: InfoProps) {
  return (
    <div class="flex flex-col text-center text-darkgray">
      <h1 class="text-3xl md:text-[40px]">{firstContent}</h1>
      <span class="text-sm md:text-base">{label}</span>
    </div>
  );
}

export default function InfoSection(
  { title, subtitle, details, image, infos }: Props,
) {
  return (
    <section class="flex w-full h-full lg:min-h-[980px] py-12 px-2 lg:px-0">
      <div class="flex flex-col w-full items-center justify-center">
        <div class="lg:max-w-4xl w-full flex items-center justify-between gap-6 md:gap-0 px-4 md:px-20 lg:px-0 relative">
          {/* Mobile Background */}
          <div class="block md:hidden absolute inset-0 bg-mask-gradient-2 -translate-x-[85%] -translate-y-12 bg-no-repeat bg-cover w-[475px] h-[455px]" />
          <div class="block md:hidden absolute inset-0 bg-mask-gradient-2 translate-x-[65%] -translate-y-12 bg-no-repeat bg-cover w-[475px] h-[455px] rotate-180" />
          {/* Desktop Background */}
          <div class="hidden md:block absolute inset-0 bg-mask-gradient-2 -translate-x-[62%] lg:-translate-x-[72%] -translate-y-44 lg:-translate-y-44 bg-no-repeat bg-cover w-[788px] h-[738px]" />
          <div class="hidden md:flex flex-col gap-12">
            {infos?.map((info) => <Info {...info} />)}
          </div>

          <div class="flex flex-col items-center justify-center md:items-stretch md:justify-stretch text-center md:text-start max-w-full md:max-w-[65%] lg:max-w-[547px] px-6 md:px-0">
            <h1 class="text-white text-xl md:text-[32px] text-[40px]">
              {title}
            </h1>
            <span class="text-pink text-xl md:text-2xl pt-[30px]">
              {subtitle}
            </span>
            <p class="text-darkgray pt-3 text-sm md:text-base lg:text-lg">
              {details}
            </p>
            {image && (
              <Image
                class="pt-12 md:pt-[30px] max-h-full"
                width={379}
                height={149}
                src={image.link}
                alt={image.description}
                loading="lazy"
              />
            )}
            <div class="flex md:hidden gap-6 pt-8">
              {infos?.map((info) => <Info {...info} />)}
            </div>
            <button class="flex items-center justify-center rounded-2xl lg:rounded-xl bg-pink py-3 min-w-[142px] md:max-w-[142px] h-[48px] border text-black font-semibold border-pink hover:text-pink hover:bg-midnightblue transition-all duration-150 mt-11">
              Buy now
            </button>
          </div>
        </div>

        <div
          class="bg-line-gradient w-[90%] h-1 mt-20 md:mt-32"
          loading="lazy"
        />
      </div>
    </section>
  );
}
