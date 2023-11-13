import type { Image as ImageType } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  backgroundImage: ImageType;
  lcp?: boolean;
}

export default function Hero({ title, backgroundImage, lcp }: Props) {
  return (
    <div class="w-full h-screen">
      <div
        class="hero justify-center place-items-start min-h-full"
        style={`background-image: url(${backgroundImage});`}
        loading={lcp ? "eager" : "lazy"}
      >
        <div class="hero-overlay bg-transparent" />
        <div class="hero-content text-center text-white pt-32">
          <div class="max-w-xs md:max-w-md lg:max-w-lg">
            <h1 class="mb-5 text-[32px] lg:text-[40px] leading-tight tracking-wide">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
