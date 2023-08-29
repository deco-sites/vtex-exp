import { asset } from "$fresh/runtime.ts";
import Video from "deco-sites/std/components/Video.tsx";

import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import type { Video as LiveVideo } from "deco-sites/std/components/types.ts";

export interface Props {
  title: HTML;
  subTitle: HTML;
  video: LiveVideo;
}

export default function ({ title, subTitle, video }: Props) {
  function handleScroll() {
    document.addEventListener("scroll", () => {
      const videoElement = document.getElementById(
        "video-element",
      );

      if (videoElement) {
        const { top, bottom } = videoElement.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;

        if (isVisible) {
          videoElement.classList.add("animate-slide-top");
        }
      }
    });
  }

  return (
    <>
      <div class="h-full w-full pb-28 bg-gradient-to-b from-[#141e2d] to-midnightblue overflow-x-clip">
        <div class="flex items-center justify-center text-center relative w-full animate-slide-bottom">
          <img
            loading="lazy"
            alt="Gradient"
            width={771}
            height={738}
            src={asset("/gradient-vsection-1.webp")}
            class="hidden md:translate-x-[-45%] md:translate-y-[62%] md:rotate-180 lg:translate-x-[-50%] lg:translate-y-[90%] lg:rotate-0 xl:translate-x-[-40%] xl:translate-y-[90%] 2xl:translate-x-[-20%] 2xl:translate-y-[90%] 3xl:translate-x-[-12%] 3xl:translate-y-[90%] md:block absolute inset-0 bg-no-repeat bg-cover w-[644px] h-[617px]"
          />

          <img
            loading="lazy"
            alt="Gradient"
            width={771}
            height={738}
            src={asset("/gradient-vsection-2.webp")}
            class="hidden md:translate-x-[65%] md:translate-y-[62.9%] md:rotate-180 lg:translate-x-[108%] lg:translate-y-[87.8%] lg:rotate-0 xl:translate-x-[139%] xl:translate-y-[87.8%] 2xl:translate-x-[158%] 2xl:translate-y-[87.8%] 3xl:translate-x-[207%] 3xl:translate-y-[87.8%] md:block absolute inset-0 bg-no-repeat bg-cover w-[644px] h-[617px]"
          />

          <div class="min-h-[116px] max-w-[345px] lg:max-w-[936px] md:max-w-[750px] flex flex-col text-center space-y-7 mt-20 m-2">
            <h1 class="">
              {title && (
                <div
                  class="min-h-full"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              )}
            </h1>
            <p>
              {subTitle && (
                <div
                  class="min-h-full"
                  dangerouslySetInnerHTML={{ __html: subTitle }}
                />
              )}
            </p>
          </div>
        </div>
        <div id="video-element">
          <div class="flex items-center justify-center w-full h-full mt-7">
            <Video
              width={996}
              height={560}
              muted
              controls
              src={video}
              loading="lazy"
              class="max-w-[312px] max-h-[175px] lg:max-w-[996px] lg:max-h-[560px] md:max-w-[590px] md:max-h-[332px] rounded-2xl mb-7"
            >
            </Video>
          </div>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{ __html: `(${handleScroll.toString()})()` }}
      />
    </>
  );
}
