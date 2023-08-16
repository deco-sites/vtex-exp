import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface Props {
  title: HTML;
  subTitle: HTML;
  video: string;
}

export default function ({ title, subTitle, video }: Props) {
  return (
    <div class="h-full w-full">
      <div class="flex items-center justify-center text-center w-full">
        <div class="max-w-[936px] space-y-6 mt-20">
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
          <iframe
            width="996"
            height="560"
            muted
            controls
            src={video}
            class="max-w-[996] max-h-[560px] rounded-2xl mb-7"
          >
          </iframe>
        </div>
      </div>
    </div>
  );
}
