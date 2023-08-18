import QuantitySelector from "./QuantitySelector.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  image?: {
    icon: LiveImage;
    description?: string;
    width: number;
    height: number;
  };
  title?: string;
}

export default function ComponentTicketBuy({ image, title }: Props) {
  return (
    <div class="flex flex-col text-center w-[294px] h-[392px] md:h-auto bg-gradient-to-b from-darkgray/20 to-darkgray/40 rounded-xl backdrop-blur-xl bg-opacity-20 items-center justify-center p-4">
      <div class="flex flex-col gap-0.5 w-full items-center justify-center pt-12 md:pt-0">
        <div class="p-4">
          <div class="">
            {image && (
              <Image
                width={image.width}
                height={image.height}
                src={image.icon}
                alt={image.description || ""}
                loading="lazy"
              />
            )}
          </div>
        </div>

        <div class="text-3xl text-white ">
          <span class="">{title}</span>
        </div>

        <span class="text-lightsteelblue text-xs mb-8">
          VTEX Experience - US
        </span>
      </div>
      <div class="space-x-0.5">
        <div class="">
          <span class="text-sm text-pink">SECOND BATCH</span>
        </div>
        <div class="">
          <span class="text-3xl text-white">USD $ 0,000</span>
        </div>
      </div>

      <div class="m-10">
        <QuantitySelector quantity={1} />
      </div>

      <div class="flex justify-around gap-8 pb-10 md:pb-0">
        <span class="text-sm w-[87px] h-[30px]">
          Previous<br />USD $ 0.000
        </span>
        <p class="text-sm text-darkgray w-[85px] h-[30px]">
          Next<br />
          <span class="text-pink">USD $ 0.000</span>
        </p>
      </div>

      <div>
        <button class="flex relative items-center -top-6 md:top-10 justify-center rounded-xl lg:rounded-xl py-3 min-w-[122px] h-[48px] text-black font-semibold bg-pink hover:bg-[#ffaed0] transition-all duration-150">
          <span class="block">Select</span>
        </button>
      </div>
    </div>
  );
}
