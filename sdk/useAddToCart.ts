import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";
import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import { useUI } from "$store/sdk/useUI.ts";
import { sendEvent } from "deco-sites/vtex-exp/sdk/analytics.tsx";

export interface Options {
  skuId: string;
  sellerId?: string;
  price: number;
  discount: number;
  quantity: number;
  /**
   * sku name
   */
  name: string;
  productGroupId: string;
}

export const useAddToCart = (
  { skuId, sellerId, price, discount, name, productGroupId, quantity }: Options,
) => {
  const isAddingToCart = useSignal(false);
  const { displayTicketModal } = useUI();
  const { addItems } = useCart();

  const onClick = useCallback(async (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!sellerId) {
      return;
    }

    try {
      isAddingToCart.value = true;
      await addItems({
        orderItems: [{ id: skuId, seller: sellerId, quantity: quantity }],
      });

      sendEvent({
        name: "add_to_cart",
        params: {
          items: [{
            item_id: productGroupId,
            quantity: quantity,
            price,
            discount,
            item_name: name,
            item_variant: skuId,
          }],
        },
      });

      displayTicketModal.value = true;
    } finally {
      isAddingToCart.value = false;
    }
  }, [skuId, sellerId, quantity]);

  return { onClick, loading: isAddingToCart.value };
};
