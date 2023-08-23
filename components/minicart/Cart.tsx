import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import { formatPrice } from "$store/sdk/format.ts";
import Button from "$store/components/ui/Button.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import CartItem from "./CartItem.tsx";
import Coupon from "./Coupon.tsx";
import SellerCode from "./SellerCode.tsx";

function Cart() {
  const { displayCart } = useUI();
  const { cart, loading, mapItemsToAnalyticsItems } = useCart();
  const isCartEmpty = cart.value?.items.length === 0;
  const totalizers = cart.value?.totalizers;
  const locale = cart.value?.clientPreferencesData.locale;
  const currencyCode = cart.value?.storePreferencesData.currencyCode;
  const total = totalizers?.find((item) => item.id === "Items")?.value || 0;
  const discounts =
    totalizers?.find((item) => item.id === "Discounts")?.value || 0;

  return (
    <div
      class="flex flex-col justify-center items-center overflow-hidden"
      style={{ minWidth: "calc(min(100vw, 425px))", maxWidth: "425px" }}
    >
      {cart.value == null || isCartEmpty
        ? (
          <>
            <div class="flex flex-col gap-6">
              <span class="font-medium text-2xl">Your cart is empty</span>
              <button
                class="text-pink underline cursor-pointer"
                onClick={() => {
                  displayCart.value = false;
                }}
              >
                Continue shopping
              </button>
            </div>
          </>
        )
        : (
          <>
            {/* Cart Items */}
            <ul
              role="list"
              class="mt-6 px-5 flex-grow overflow-y-auto flex flex-col gap-6 w-full"
            >
              {cart.value.items.map((_, index) => (
                <li key={index} class="border-b border-darkgray/30 pb-6">
                  <CartItem
                    index={index}
                    currency={currencyCode!}
                    locale={locale!}
                  />
                </li>
              ))}
            </ul>

            {/* Cart Footer */}
            <footer class="flex flex-col gap-5 w-full px-5 pb-6">
              <div class="flex items-center justify-center w-full">
                <button
                  class="text-pink underline cursor-pointer"
                  onClick={() => {
                    displayCart.value = false;
                  }}
                >
                  Continue shopping
                </button>
              </div>

              <div class="flex flex-col items-center justify-center rounded-xl bg-gradient-to-b from-darkgray/20 to-darkgray/40 gap-3 px-9 py-6">
                {/* Subtotal */}
                <div class="w-full flex justify-between">
                  <span>Subtotal</span>
                  <span class="text-white">
                    {total
                      ? formatPrice(total / 100, currencyCode!, locale)
                      : ""}
                  </span>
                </div>

                {/* Total */}
                <div class="w-full flex justify-between font-bold">
                  <span>Subtotal</span>
                  <span class="text-white">
                    {total
                      ? formatPrice(total / 100, currencyCode!, locale)
                      : ""}
                  </span>
                </div>

                <div class="w-full">
                  <a
                    class="flex items-center justify-center w-full bg-pink text-black font-bold py-3 cursor-pointer rounded-xl hover:scale-105 duration-150 transition"
                    href="/checkout"
                  >
                    <Button
                      data-deco="buy-button"
                      disabled={loading.value || cart.value.items.length === 0}
                      onClick={() => {
                        sendEvent({
                          name: "begin_checkout",
                          params: {
                            currency: cart.value ? currencyCode! : "",
                            value: (total - discounts) / 100,
                            coupon: cart.value?.marketingData?.coupon ??
                              undefined,

                            items: cart.value
                              ? mapItemsToAnalyticsItems(cart.value)
                              : [],
                          },
                        });
                      }}
                    >
                      Go to cart
                    </Button>
                  </a>
                </div>
              </div>
            </footer>
          </>
        )}
    </div>
  );
}

export default Cart;
