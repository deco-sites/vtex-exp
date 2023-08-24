import { useState } from "preact/hooks";

import QuantitySelector from "$store/components/ui/QuantitySelector.tsx";
import AddToCartButton from "$store/components/product/AddToCartButton.tsx";

interface Props {
  seller: string;
  listPrice?: number;
  productID: string;
  price: number;
  availability: string;
  productGroupID?: string;
  name: string;
}

export default function TicketBuySelector(
  { availability, name, price, seller, productID, listPrice, productGroupID }:
    Props,
) {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div class="my-10">
        <QuantitySelector
          quantity={quantity}
          onChange={setQuantity}
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
    </>
  );
}
