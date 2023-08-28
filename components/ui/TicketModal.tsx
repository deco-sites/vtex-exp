import { useSignal } from "@preact/signals";
import { Runtime } from "$store/runtime.ts";
import { useUI } from "$store/sdk/useUI.ts";
import type { JSX } from "preact";

const updateAttachment = Runtime.create(
  "deco-sites/std/actions/vtex/cart/updateItemAttachment.ts",
);

export default function TicketModal() {
  const loading = useSignal(false);
  const { displayTicketModal } = useUI();

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

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
        index: 0,
        attachment: "Client Info",
        content: { first_name: firstName, last_name: lastName, email, company },
      });
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
      displayTicketModal.value = false;
    }
  };

  return (
    <div>
      <form
        class="form-control"
        onSubmit={handleSubmit}
      >
        <input
          name="firstName"
          class="flex-auto md:flex-none input input-bordered text-base-content"
          placeholder={"First Name"}
        />

        <input
          name="lastName"
          class="flex-auto md:flex-none input input-bordered text-base-content"
          placeholder={"Last Name"}
        />

        <input
          name="email"
          class="flex-auto md:flex-none input input-bordered text-base-content"
          placeholder={"E-mail"}
        />

        <input
          name="company"
          class="flex-auto md:flex-none input input-bordered text-base-content"
          placeholder={"Company"}
        />

        <button
          type="submit"
          class="btn disabled:loading"
          disabled={loading}
        >
          Save
        </button>
      </form>
    </div>
  );
}
