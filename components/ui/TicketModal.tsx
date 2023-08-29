import { useSignal } from "@preact/signals";
import { Runtime } from "$store/runtime.ts";
import { useUI } from "$store/sdk/useUI.ts";
import type { JSX } from "preact";
import { asset } from "$fresh/runtime.ts";
import Input from "$store/components/ui/Input.tsx";
import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";

const updateAttachment = Runtime.create(
  "deco-sites/std/actions/vtex/cart/updateItemAttachment.ts",
);

export default function TicketModal() {
  const loading = useSignal(false);
  const { cart } = useCart();
  const { displayTicketModal } = useUI();

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!cart.value) return;

    try {
      loading.value = true;

      const firstName =
        (e.currentTarget.elements.namedItem("firstName") as RadioNodeList)
          ?.value;

      const lastName =
        (e.currentTarget.elements.namedItem("lastName") as RadioNodeList)
          ?.value;

      const email =
        (e.currentTarget.elements.namedItem("email") as RadioNodeList)?.value;

      const company =
        (e.currentTarget.elements.namedItem("company") as RadioNodeList)?.value;

      await updateAttachment({
        index: (cart.value.items.length - 1),
        attachment: "Client Info",
        content: { first_name: firstName, last_name: lastName, email, company },
      });
    } finally {
      loading.value = false;
      displayTicketModal.value = false;
    }
  };

  return (
    <section class="w-full flex flex-col items-start justify-center lg:px-8 lg:py-4">
      <div class="flex flex-col items-start justify-between mb-4 relative w-full">
        <div>
          <p class="text-xl text-white">
            VTEX Experience Package
          </p>
          <span class="text-2xl text-pink">
            {cart.value?.items[cart.value.items.length - 1]?.name ?? ""}
          </span>
        </div>

        <button
          title="Close Modal"
          aria-label="close ticket modal"
          onClick={() => displayTicketModal.value = false}
          class="absolute w-4 h-4 -top-4 sm:top-0 right-1 font-semibold text-pink"
        >
          x
        </button>
      </div>
      <div>
        <img
          class="w-full mb-4"
          alt="Line Gradient"
          width={408}
          height={25}
          src={asset("/line-gradient.png")}
          loading="lazy"
        />
      </div>
      <form
        class="flex flex-col items-start justify-start mb-4 w-full"
        onSubmit={handleSubmit}
      >
        <div class="w-full">
          <div class="mb-8">
            <p class="text-xl text-white">
              Personal Information:
            </p>
            <span class="text-xs text-darkgray">
              Fill in the fields below with the package/ticket holder's personal
              information.
            </span>
          </div>
          <div class="mb-6 w-full">
            <p class="text-lg text-white my-2">Ticket 01:</p>
            <div class="flex flex-col gap-2 w-full md:h-[98px]">
              <Input id="firstName" placeholder="First Name" required />
              <Input id="lastName" placeholder="Last Name" required />
              <Input id="email" placeholder="E-mail" required />
              <Input id="company" placeholder="Company" required />
            </div>
          </div>
          <button
            type="submit"
            class="flex items-center justify-center rounded-2xl lg:rounded-xl bg-pink min-w-full h-[48px] border text-black font-semibold border-pink hover:text-pink hover:bg-midnightblue transition-all duration-150 mt-10"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
}
