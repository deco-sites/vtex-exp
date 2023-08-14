import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface Props {
  image?: {
    link: LiveImage;
    alt: string;
    width: number;
    height: number;
  };
  title?: string;
  html?: HTML;
}

export default function BodyVtex(
  { image, title = "Experience Powerful Connections", html }: Props,
) {
  function handleScroll() {
    document.addEventListener("scroll", () => {
      const body = document.getElementById("body-div-details");
      const bodyLeft = document.getElementById("body-left-details");
      const bodyRight = document.getElementById("body-right-details");

      if (body && bodyLeft && bodyRight) {
        const { top, bottom } = body.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;

        if (isVisible) {
          bodyLeft.classList.add("animate-slide-right");
          bodyRight.classList.add("animate-slide-left");
        }
      }
    });
  }

  return (
    <>
      <div
        id="body-div-details"
        class="bg-[#122644] h-full w-full flex flex-col md:flex-row items-center gap-12 pt-32 lg:pt-10 overflow-hidden relative"
      >
        <div class="absolute w-[50%] inset-0 -translate-y-[75%] translate-x-1/2 gradient opacity-40" />
        {image && (
          <div
            id="body-left-details"
            class="md:pl-12 pr-2 order-2 md:order-1 md:top-[671px] md:left-[-63.749] w-[465px] h-[416px] md:w-full lg:w-[800px] 2xl:w-[900px] md:h-full md:-translate-x-20 lg:-translate-x-0"
          >
            <Image
              class="m-2 min-w-full max-h-full"
              width={image.width}
              height={image.height}
              src={image.link}
              alt={image.alt || ""}
              loading="lazy"
            />
          </div>
        )}
        <div
          id="body-right-details"
          class="px-6 lg:w-1/3 2xl:w-[35%] md:h-full md:pr-24 flex order-1 md:w-full md:order-2 flex-col md:text-start text-center md:items-start gap-2"
        >
          {title && (
            <h1 class="text-white text-3xl 2xl:text-4xl tracking-wide leading-tight lg:max-w-[100px] font-semibold mb-4">
              {title}
            </h1>
          )}

          {html && (
            <div
              class="min-h-full"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{ __html: `(${handleScroll.toString()})()` }}
      />
    </>
  );
}
