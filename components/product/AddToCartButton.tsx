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
}

function AddToCartButton(
  { skuId, sellerId, discount, price, productGroupId, name, quantity }: Props,
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
