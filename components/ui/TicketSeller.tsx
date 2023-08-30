import { useOffer } from "$store/sdk/useOffer.ts";
import { SendEventOnClick } from "$store/components/Analytics.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";

import TicketBuySelector from "../../islands/TicketBuySelector.tsx";

import type { ProductLeaf } from "deco-sites/std/commerce/types.ts";

interface Props {
  product: ProductLeaf | null;
  productGroupID?: string;
  /** @description used for analytics event */
  itemListName?: string;
}

export default function TicketSeller(
  { product, itemListName, productGroupID }: Props,
) {
  if (!product) return null;

  const {
    url,
    productID,
    name,
    image: images,
    offers,
    description,
  } = product;

  const batchName = product.additionalProperty?.find((item) =>
    item.name === "BATCH"
  )?.value;

  const id = `product-card-${productID}`;
  const { listPrice, price, installments, seller, availability } = useOffer(
    offers,
  );

  return (
    <div class="flex flex-col text-center min-w-[100px] min-h-[193px] sm:min-w-[207px] sm:min-h-[160px] bg-gradient-to-b from-darkgray/20 to-darkgray/40 rounded-xl backdrop-blur-xl bg-opacity-20 items-center justify-center sm:items-start sm:justify-start p-4">
      <div class="flex flex-col gap-0.5 w-full items-center justify-center sm:items-start sm:justify-start">
        <div class="text-sm text-white text-start">
          <span class="text-pink">{product.name}</span> Ticket
        </div>

        <h1 class="text-2xl text-white">
          {formatPrice(price, offers!.priceCurrency! ?? "BRL")}
        </h1>

        <span class="text-lightsteelblue text-xs">{batchName ?? ""}</span>
      </div>

      <TicketBuySelector
        name={name ?? ""}
        productID={productID}
        availability={availability ?? ""}
        seller={seller ?? ""}
        listPrice={listPrice}
        productGroupID={productGroupID ?? ""}
        price={price ?? 0}
        type="flex-row"
      />

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
    </div>
  );
}
