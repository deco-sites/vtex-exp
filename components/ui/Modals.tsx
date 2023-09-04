import { useUI } from "$store/sdk/useUI.ts";

import Modal from "$store/components/ui/Modal.tsx";

import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import { lazy, Suspense } from "preact/compat";

const TicketModal = lazy(() => import("$store/components/ui/TicketModal.tsx"));

function Modals() {
  const { displayTicketModal } = useUI();
  const { cart, updateItems } = useCart();

  const closeModal = async () => {
    if (!cart.value) return;

    await updateItems({
      orderItems: [{ index: (cart.value.items.length - 1), quantity: 0 }],
    });

    displayTicketModal.value = false;
  };

  return (
    <Modal
      open={displayTicketModal.value}
      onClose={closeModal}
    >
      <Suspense
        fallback={
          <div class="w-screen flex items-center justify-center">
            <span class="loading loading-ring" />
          </div>
        }
      >
        <TicketModal cart={cart} updateItems={updateItems} />
      </Suspense>
    </Modal>
  );
}

export default Modals;
