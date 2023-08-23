import QuantitySelector from "./QuantitySelector.tsx";
import Image from "deco-sites/std/components/Image.tsx";

import { SendEventOnClick } from "$store/components/Analytics.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";

import AddToCartButton from "$store/islands/AddToCartButton.tsx";

import type { Product } from "deco-sites/std/commerce/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  product: Product;
  iconImage?: {
    icon: LiveImage;
    description?: string;
    width: number;
    height: number;
  };

  /** @description used for analytics event */
  itemListName?: string;
}

export default function ComponentTicketBuy(
  { product, iconImage, itemListName }: Props,
) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
    isVariantOf,
    description,
  } = product;

  const id = `product-card-${productID}`;
  const productGroupID = isVariantOf?.productGroupID;
  const { listPrice, price, installments, seller, availability } = useOffer(
    offers,
  );

  return (
    <div
      id={id}
      class="flex flex-col text-center w-[294px] h-[392px] md:h-auto bg-gradient-to-b from-darkgray/20 to-darkgray/40 rounded-xl backdrop-blur-xl bg-opacity-20 items-center justify-center p-4"
    >
      <SendEventOnClick
        id={id}
        event={{
          name: "select_item" as const,
          params: {
            item_list_name: itemListName,
            items: [
              mapProductToAnalyticsItem({
                product,
                price,
                listPrice,
              }),
            ],
          },
        }}
      />
      <div class="flex flex-col gap-0.5 w-full items-center justify-center pt-16 md:pt-0">
        <div class="p-4">
          <div>
            {iconImage && (
              <Image
                width={iconImage.width}
                height={iconImage.height}
                src={iconImage.icon}
                alt={iconImage.description || ""}
                loading="lazy"
              />
            )}
          </div>
        </div>

        <div class="text-3xl text-white">
          <span>{name}</span>
        </div>

        <span class="text-lightsteelblue text-xs mb-8">
          VTEX Experience - US
        </span>
      </div>
      <div class="space-x-0.5">
        <div>
          <span class="text-sm text-pink">SECOND BATCH</span>
        </div>
        <div>
          <span class="text-3xl text-white">
            {formatPrice(price, offers!.priceCurrency!)}
          </span>
        </div>
      </div>

      <div class="my-10">
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
        {availability === "https://schema.org/InStock" && (
          <>
            {seller && (
              <AddToCartButton
                name={name ?? ""}
                skuId={productID}
                sellerId={seller}
                productGroupId={productGroupID ?? ""}
                discount={price && listPrice ? listPrice - price : 0}
                price={price ?? 0}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
