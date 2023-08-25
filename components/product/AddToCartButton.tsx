import Button from "$store/components/ui/Button.tsx";
import {
  Options as UseAddToCartProps,
  useAddToCart,
} from "$store/sdk/useAddToCart.ts";

export interface Props extends UseAddToCartProps {
  /**
   * @description Product id
   */
  sellerId: string;
  type?: "flex-row" | "flex-col" | "ticket-selector";
}

function AddToCartButton(
  {
    skuId,
    sellerId,
    discount,
    price,
    productGroupId,
    name,
    quantity,
    type = "flex-col",
  }: Props,
) {
  const props = useAddToCart({
    skuId,
    sellerId,
    discount,
    price,
    productGroupId,
    name,
    quantity,
  });

  if (type === "flex-row") {
    return (
      <Button
        data-deco="add-to-cart"
        {...props}
        class="flex items-center justify-center rounded-2xl lg:rounded-xl py-3 min-w-full md:min-w-[88px] h-[44px] border text-white font-semibold border-pink hover:bg-pink transition-all duration-150"
      >
        <span class="block md:hidden">Buy</span>
        <span class="hidden md:flex">Buy now</span>
      </Button>
    );
  }

  if (type === "ticket-selector") {
    return (
      <Button
        data-deco="add-to-cart"
        {...props}
        class="flex items-center justify-center rounded-2xl lg:rounded-xl bg-pink py-3 min-w-[142px] h-[48px] border text-black font-semibold border-pink hover:text-pink hover:bg-midnightblue transition-all duration-150"
      >
        <span>Buy now</span>
      </Button>
    );
  }

  return (
    <Button
      data-deco="add-to-cart"
      {...props}
      class="flex relative items-center -top-8 md:top-10 justify-center rounded-xl lg:rounded-xl py-3 min-w-[122px] h-[48px] text-black font-semibold bg-pink hover:bg-[#ffaed0] transition-all duration-150"
    >
      Select
    </Button>
  );
}

export default AddToCartButton;
