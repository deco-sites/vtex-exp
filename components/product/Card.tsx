import Image from "deco-sites/std/components/Image.tsx";

import type { Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  product: Product;
  index: number;
}

const relative = (name?: string) => {
  const formattedName = name?.toLowerCase().replace(/\s+/g, "-");

  return `/experiences/${"en"}/${formattedName}`;
};

export default function Card({ product, index }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
    isVariantOf,
    description,
  } = product;

  const [front, back] = images ?? [];

  return (
    <div class="card w-full md:w-[495px] lg:w-[390px] h-full bg-midnightblue shadow-xl">
      <figure class="min-h-[128px]">
        <Image
          src={front.url!}
          alt={front.alternateName}
          width={495}
          height={128}
          class="w-full h-[128px] object-cover object-center"
          loading="lazy"
        />
      </figure>

      <div class="card-body items-center text-center">
        <h1 class="card-title text-white text-[40px] leading-10">
          {product?.isVariantOf?.name}
        </h1>

        <h2 class="text-darkgray text-xl">
          {product.isVariantOf?.additionalProperty?.find((item) =>
            item.name === "Date"
          )?.value || ""}
        </h2>

        <p class="text-darkgray pt-3">
          {description?.substring(0, 150).concat("...")}
        </p>

        <div class="card-actions bottom-0 translate-y-12">
          <a
            href={url && relative(product?.isVariantOf?.name)}
            aria-label="Learn more about experiences"
            alt="Learn more about experiences"
            class="flex items-center justify-center rounded-2xl lg:rounded-xl bg-pink py-3 min-w-[142px] border text-black font-semibold border-pink hover:text-pink hover:bg-midnightblue transition-all duration-150"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
