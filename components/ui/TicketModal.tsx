import { useSignal } from "@preact/signals";
import { Runtime } from "$store/runtime.ts";
import { useUI } from "$store/sdk/useUI.ts";
import type { JSX } from "preact";
import { asset } from "$fresh/runtime.ts"; 
import Input from "$store/components/ui/Input.tsx"; 


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
    <section class="w-[296px] md:w-[412px] flex flex-col items-center justify-center md:ml-6">
      <div class="flex flex-col items-start justify-start mb-4">
        <div class="w-[11px] h-[11px] ml-auto"> 
          <p class="text-base font-semibold text-pink">x</p>
        </div>
        <div class="w-[296px] md:w-[380px]">
          <p class="text-xl text-white w-[250px] md:w-[315px]">VTEX Experience Package</p>
          <span class="text-2xl text-pink w-[167px] md:w-[315px]">New York</span>
        </div>
      </div>
      <div>
        <img
            class="w-[100%] mb-4"
            alt="Line Gradient"
            width={408}
            height={25 }
            src={asset("/line-gradient.png")}
            loading="lazy"
          />
      </div>
      <div class="flex flex-col items-start justify-start mb-4">
        <div class="w-[296px] md:w-[380px]">
          <div class="mb-8">
            <p class="text-xl text-white w-[224px] md:w-[315px]">Personal Information:</p>
            <span class="text-xs text-darkgray w-[268px] md:w-[380px]">Fill in the fields below with the package/ticket holder's personal information.</span>
          </div>
          <div class="mb-6">
            <p class="text-lg text-white my-2 w-[163px]">Ticket 01:</p>
            <div class="flex flex-col gap-2 w-[291px] h-[164px] md:w-[361px] md:h-[98px]">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="E-mail" />
                <Input placeholder="Company" /> 
            </div> 
          </div>
          <div class="my-4">
            <p class="text-lg text-white my-2 w-[163px]">Ticket 02:</p>
            <div class="flex flex-col gap-2 mb-2 w-[291px] h-[164px] md:w-[361px] md:h-[98px]">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="E-mail" />
                <Input placeholder="Company" /> 
            </div> 
          </div>
          <button class="flex items-center justify-center rounded-2xl lg:rounded-xl bg-pink min-w-[295px] md:min-w-[380px] lg:min-w-[380px] h-[48px] border text-black font-semibold border-pink hover:text-pink hover:bg-midnightblue transition-all duration-150 mt-10">
                Save
          </button>
        </div>
      </div>
    </section>
  );
}
