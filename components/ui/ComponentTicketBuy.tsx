import Image from "deco-sites/std/components/Image.tsx";

import { SendEventOnClick } from "$store/components/Analytics.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";

import type { ProductLeaf } from "deco-sites/std/commerce/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

import TicketBuySelector from "$store/islands/TicketBuySelector.tsx";

export interface Props {
  product: ProductLeaf | null;
  productGroupID?: string;

  /** @description used for analytics event */
  itemListName?: string;
}

export default function ComponentTicketBuy(
  { product, itemListName, productGroupID }: Props,
) {
  if (!product) return null;

  const {
    url,
    productID,
    name,
    offers,
    description,
  } = product;

  const id = `product-card-${productID}`;
  const { listPrice, price, installments, seller, availability } = useOffer(
    offers,
  );

  const batchName = product.additionalProperty?.find((item) =>
    item.name === "BATCH"
  )?.value;

  return (
    <div
      id={id}
      class="flex flex-col text-center w-[294px] h-[80%] md:h-auto bg-gradient-to-b from-darkgray/20 to-darkgray/40 rounded-xl backdrop-blur-xl bg-opacity-20 items-center justify-center p-4 md:py-12"
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
      <div class="flex flex-col gap-0.5 w-full items-center justify-center pt-4 md:pt-0">
        {
          /* <div class="p-4">
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
        </div> */
        }

        <div class="text-3xl text-white">
          <span>{name}</span>
        </div>

        <p class="text-lightsteelblue text-xs mb-8">
          VTEX Experience -{" "}
          <span class="uppercase">
            {url && url.split("/")[url.split("/").length - 2]}
          </span>
        </p>
      </div>
      <div class="space-x-0.5">
        <div>
          <span class="text-sm text-pink">{batchName ?? ""}</span>
        </div>
        <div>
          <span class="text-3xl text-white">
            {formatPrice(price, offers!.priceCurrency! ?? "BRL")}
          </span>
        </div>
      </div>

      <TicketBuySelector
        name={name ?? ""}
        productID={productID}
        availability={availability ?? ""}
        seller={seller ?? ""}
        listPrice={listPrice}
        productGroupID={productGroupID ?? ""}
        price={price ?? 0}
      />
    </div>
  );
}
