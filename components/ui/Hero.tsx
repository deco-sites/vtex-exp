import type { Image as ImageType } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  backgroundImage: ImageType;
}

export default function Hero({ title, backgroundImage }: Props) {
  return (
    <div class="w-full h-screen">
      <div
        class="hero justify-center place-items-start min-h-full"
        width={100}
        height={100}
        style={`background-image: url(${backgroundImage});`}
      >
        <div class="hero-overlay bg-transparent" />
        <div class="hero-content text-center text-white pt-32">
          <div class="max-w-xs md:max-w-md lg:max-w-lg">
            <h1 class="mb-5 text-[32px] lg:text-[40px] leading-tight tracking-wide font-semibold">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
