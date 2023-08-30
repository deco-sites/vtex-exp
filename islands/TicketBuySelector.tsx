import { useState } from "preact/hooks";

import QuantitySelector from "$store/components/ui/QuantitySelector.tsx";
import AddToCartButton from "$store/components/product/AddToCartButton.tsx";

interface Props {
  type?: "flex-row" | "flex-col";
  seller: string;
  listPrice?: number;
  productID: string;
  price: number;
  availability: string;
  productGroupID?: string;
  name: string;
}

export default function TicketBuySelector(
  {
    availability,
    name,
    price,
    seller,
    productID,
    listPrice,
    productGroupID,
    type = "flex-col",
  }: Props,
) {
  const [quantity, setQuantity] = useState(1);

  if (type === "flex-row") {
    return (
      <div class="flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start align-middle pt-4 md:py-2 gap-2.5 md:gap-1 max-w-[90%]">
        <QuantitySelector quantity={quantity} onChange={setQuantity} />

        <AddToCartButton
          name={name ?? ""}
          skuId={productID}
          sellerId={seller}
          productGroupId={productGroupID ?? ""}
          discount={price && listPrice ? listPrice - price : 0}
          price={price ?? 0}
          quantity={quantity}
          type={type}
        />
      </div>
    );
  }

  return (
    <>
      <div class="my-10">
        <QuantitySelector
          quantity={quantity}
          onChange={setQuantity}
          type="full"
        />
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

      <div class="relative flex w-full h-full items-center justify-center">
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
                quantity={quantity}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
