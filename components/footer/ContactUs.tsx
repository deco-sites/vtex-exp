import Input from "$store/components/ui/Input.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { lazy } from "https://esm.sh/v128/preact@10.15.1/compat/src/suspense.js";

export interface Props {
  variant: "variant-1" | "variant-2";
  forms?: {
    hasTwoCols?: boolean;
    inputs: Array<{
      placeholder: string;
    }>;
  }[];

  image: {
    link: LiveImage;
    description: string;
  };
  html?: HTML;
  title?: string;
  label?: string;
  description?: string;
  info?: string;
}

export default function ContactUs(
  { title, label, description, forms, html, info, variant, image }: Props,
) {
  if (variant === "variant-2") {
    // Variant 2:

    return (
      <div class="w-full h-full flex items-center justify-center lg:max-w-[80%] px-4 lg:px-0">
        <div class="flex flex-col justify-center md:justify-between min-w-full gap-7 md:gap-12 lg:flex-row-reverse md:flex-row">
          <Image
            class="translate-x-[-60px] md:w-[336px] md:h-[298px] lg:w-[512px] lg:h-[452px] hidden md:block"
            loading="lazy"
            src={image.link}
            alt={image.description}
            width={512}
            height={452}
          />
          <div class="flex flex-col justify-center lg:justify-start text-center lg:text-start gap-5 lg:gap-3 lg:max-w-[500px]">
            {html &&
              (
                <div
                  class="max-w-full pb-5"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              )}
            {/* mobile */}
            <Image
              class="md:hidden block"
              loading="lazy"
              src={image.link}
              alt={image.description}
              width={512}
              height={452}
            />
            <form class="flex justify-center lg:justify-end ">
              <div class="flex flex-col w-full gap-8 lg:gap-10">
                {forms?.map((item) => (
                  <div
                    class={`${
                      item.hasTwoCols && "lg:grid-cols-2"
                    } grid gap-8 lg:gap-6`}
                  >
                    {item.inputs.map((input) => (
                      <Input placeholder={input.placeholder} />
                    ))}
                  </div>
                ))}
              </div>
            </form>
            {info &&
              (
                <p class="text-gray text-sm">
                  {info}
                </p>
              )}
            <div class="flex justify-center lg:justify-start w-full mt-8">
              <button class="flex items-center justify-center rounded-2xl bg-transparent py-4 w-full max-w-[142px] border font-semibold border-pink text-pink hover:bg-midnightblue/40 hover:bg-opacity-40 transition-all duration-150">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Variant 1:

  return (
    <div class="w-full h-full flex items-center justify-center lg:max-w-[80%] px-4 lg:px-0">
      <div class="grid lg:grid-cols-2 justify-center lg:justify-between min-w-full gap-7 md:gap-16 lg:gap-0">
        <div class="flex flex-col justify-center lg:justify-start text-center lg:text-start gap-5 lg:gap-3 lg:max-w-[374px]">
          {title &&
            <h1 class="text-[40px] font-bold text-white">{title}</h1>}
          {label &&
            (
              <h2 class="text-pink text-2xl">
                {label}
              </h2>
            )}
          {description &&
            (
              <p class="text-gray text-lg">
                {description}
              </p>
            )}
        </div>

        <form class="flex justify-center lg:justify-end">
          <div class="flex flex-col w-full gap-8 lg:gap-10">
            {forms?.map((item) => (
              <div
                class={`${
                  item.hasTwoCols && "md:grid-cols-2"
                } grid gap-8 lg:gap-6`}
              >
                {item.inputs.map((input) => (
                  <Input placeholder={input.placeholder} />
                ))}
              </div>
            ))}

            <div class="flex justify-center lg:justify-start w-full mt-8">
              <button class="flex items-center justify-center rounded-2xl bg-transparent py-4 w-full max-w-[142px] border font-semibold border-pink text-pink hover:bg-midnightblue/40 hover:bg-opacity-40 transition-all duration-150">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
