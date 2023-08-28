import { useUI } from "$store/sdk/useUI.ts";

import Modal from "$store/components/ui/Modal.tsx";

import { lazy, Suspense } from "preact/compat";

const TicketModal = lazy(() => import("$store/components/ui/TicketModal.tsx"));

function Modals() {
  const { displayTicketModal } = useUI();

  return (
    <Modal
      open={displayTicketModal.value}
      onClose={() => displayTicketModal.value = false}
    >
      <Suspense
        fallback={
          <div class="w-screen flex items-center justify-center">
            <span class="loading loading-ring" />
          </div>
        }
      >
        <TicketModal />
      </Suspense>
    </Modal>
  );
}

export default Modals;
