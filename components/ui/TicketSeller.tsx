export default function TicketSeller() {
  return (
    <div class="flex flex-col text-center min-w-[142px] min-h-[193px] sm:min-w-[207px] sm:min-h-[160px] bg-gradient-to-b from-darkgray/20 to-darkgray/40 rounded-xl backdrop-blur-xl bg-opacity-20 items-center justify-center sm:items-start sm:justify-start p-4">
      <div class="flex flex-col gap-0.5 w-full items-center justify-center sm:items-start sm:justify-start">
        <div class="text-sm text-white">
          <span class="text-pink">Retailer</span> Ticket
        </div>

        <h1 class="text-2xl text-white">USD$ 0,000</h1>

        <span class="text-lightsteelblue text-xs">1ST PACKAGE BATCH</span>
      </div>

      <button class="mt-4 flex items-center justify-center rounded-2xl lg:rounded-xl py-3 min-w-[88px] h-[40px] border text-white font-semibold border-pink hover:bg-pink transition-all duration-150">
        Buy now
      </button>
    </div>
  );
}
