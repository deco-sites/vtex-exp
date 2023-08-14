import SelectorButton from "$store/components/ui/SelectorButton.tsx";

export default function TicketSelector() {
  return (
    <div class="flex flex-col gap-3 text-center min-w-[310px] h-[340px] bg-midnightblue rounded-xl backdrop-blur-xl bg-opacity-75 items-center justify-center">
      <h1 class="text-xl text-white">Get your tickets now</h1>

      <div class="flex flex-col gap-5 w-full px-7">
        <SelectorButton title="Location" />
        <SelectorButton title="Package" />
        <SelectorButton title="How many" />
      </div>

      <button class="flex items-center justify-center rounded-2xl lg:rounded-xl bg-pink py-3 min-w-[142px] h-[48px] border text-black font-semibold border-pink hover:text-pink hover:bg-midnightblue transition-all duration-150">
        Buy now
      </button>
    </div>
  );
}
