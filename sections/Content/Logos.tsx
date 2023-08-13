import Image from "deco-sites/std/components/Image.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import { useMemo } from "preact/hooks";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";

export interface Image {
  image: ImageType;
  altText: string;
}

export interface Props {
  title?: string;
  description?: string;
  images?: Image[];
  layout?: {
    headerAlignment?: "center" | "left";
  };
}

const IMAGES = [
  {
    altText: "deco",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fe7cd8ba-c954-45d6-9282-ee7d8ca8e3c7",
  },
  {
    altText: "deco",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
  },
];

function Logos(props: Props) {
  const {
    title,
    description,
    images,
    layout,
  } = props;
  const list = useMemo(
    () =>
      images && images.length > 0
        ? images
        : Array(20).fill(null).map((_, i) => IMAGES[i % 2]),
    [],
  );

  return (
    <div class="w-full px-4 py-8 flex flex-col gap-8 lg:gap-4 lg:py-10 lg:px-0 bg-gradient-to-b from-midnightblue to-darkslategray relative">
      <Header
        title={title}
        description={description}
        alignment={layout?.headerAlignment || "center"}
      />
      <div class="absolute w-[45%] inset-0 translate-y-[75%] translate-x-1/2 gradient opacity-30" />
      <div class="overflow-hidden">
        <div class="flex flex-row flex-nowrap w-full animate-walk items-center gap-4">
          {list.map((element) => (
            <div class="w-36 h-36 px-4 lg:px-6 lg:py-4 inline-block align-middle lg:m-5">
              <div class="flex w-36 h-36 items-center justify-center">
                <img
                  width={140}
                  height={140}
                  src={element.image}
                  alt={element.altText || ""}
                  href={"/"}
                  class="max-w-full max-h-full hover:scale-125 duration-100 opacity-50 hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Logos;
