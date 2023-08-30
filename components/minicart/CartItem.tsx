import Image from "deco-sites/std/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";

interface Props {
  index: number;
  locale: string;
  currency: string;
}

function CartItem({ index, locale, currency }: Props) {
  const {
    cart,
    updateItems,
    mapItemsToAnalyticsItems,
  } = useCart();
  const loading = useSignal(false);
  const item = cart.value!.items[index];
  const {
    imageUrl,
    skuName,
    sellingPrice,
    name,
    quantity,
  } = item;

  const isGift = sellingPrice < 0.01;

  const withLoading = useCallback(
    <A,>(cb: (args: A) => void) => async (e: A) => {
      try {
        loading.value = true;
        await cb(e);
      } finally {
        loading.value = false;
      }
    },
    [loading],
  );

  return (
    <div
      class="grid grid-rows-1 gap-4"
      style={{
        gridTemplateColumns: "auto 1fr",
      }}
    >
      <Image
        style={{ aspectRatio: "72 / 72" }}
        src={imageUrl}
        alt={skuName}
        width={72}
        height={72}
        class="w-[72px] h-[72px] object-cover object-center rounded-xl"
      />

      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-start">
          <div class="flex flex-col items-start">
            <span class="text-sm text-darkgray">VTEX</span>
            <h1 class="text-white text-lg">{name}</h1>
            <h1 class="text-white">
              Package {index + 1} - {skuName}
            </h1>
          </div>
          <Button
            disabled={loading.value || isGift}
            loading={loading.value}
            class="btn-square text-pink"
            onClick={withLoading(async () => {
              await updateItems({ orderItems: [{ index, quantity: 0 }] });
              if (!cart.value) return;
              sendEvent({
                name: "remove_from_cart",
                params: {
                  items: mapItemsToAnalyticsItems({
                    items: [item],
                    marketingData: cart.value.marketingData,
                  }),
                },
              });
            })}
          >
            <Icon id="Trash" size={24} />
          </Button>
        </div>
        <div class="flex items-center">
          <span class="text-white">
            {isGift
              ? "Grátis"
              : formatPrice(sellingPrice / 100, currency, locale)}
          </span>
        </div>

        {
          /* <QuantitySelector
          disabled={loading.value || isGift}
          quantity={quantity}
          onChange={withLoading(async (quantity) => {
            await updateItems({ orderItems: [{ index, quantity }] });
            const quantityDiff = quantity - item.quantity;

            if (!cart.value) return;

            sendEvent({
              name: quantityDiff < 0 ? "remove_from_cart" : "add_to_cart",
              params: {
                items: mapItemsToAnalyticsItems({
                  items: [{
                    ...item,
                    quantity: Math.abs(quantityDiff),
                  }],
                  marketingData: cart.value.marketingData,
                }),
              },
            });
          })}
        /> */
        }
      </div>
    </div>
  );
}

export default CartItem;
