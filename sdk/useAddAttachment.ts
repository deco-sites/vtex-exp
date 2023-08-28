import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";
import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import { useUI } from "deco-sites/vtex-exp/sdk/useUI.ts";

export interface Options {
  productIndex: number;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
}

export const useAddAttachment = (
  { productIndex, firstName, lastName, email, company }: Options,
) => {
  const isAddingToCart = useSignal(false);
  const { displayCart } = useUI();
  const { addItemAttachment } = useCart();

  const onClick = useCallback(async (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!productIndex) {
      return;
    }

    try {
      isAddingToCart.value = true;
      await addItemAttachment({
        index: productIndex,
        attachment: "Client Info",
        content: { first_name: firstName, last_name: lastName, email, company },
      });

      displayCart.value = true;
    } finally {
      isAddingToCart.value = false;
    }
  }, [productIndex, firstName, lastName, email, company]);

  return { onClick, loading: isAddingToCart.value };
};
