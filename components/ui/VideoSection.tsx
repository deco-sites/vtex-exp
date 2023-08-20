import Video from "deco-sites/std/components/Video.tsx";

import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import type { Video as LiveVideo } from "deco-sites/std/components/types.ts";

export interface Props {
  title: HTML;
  subTitle: HTML;
  video: LiveVideo;
}

export default function ({ title, subTitle, video }: Props) {
  return (
    <div class="h-full w-full bg-midnightblue">
      <div class="flex items-center justify-center text-center w-full">
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
      <div>
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
  );
}
