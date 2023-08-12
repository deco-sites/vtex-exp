import Input from "$store/components/ui/Input.tsx";

export default function ContactUs() {
  return (
    <div class="w-full h-full flex items-center justify-center lg:max-w-[80%] px-4 lg:px-0">
      <div class="grid lg:grid-cols-2 justify-center lg:justify-between min-w-full gap-7 md:gap-16 lg:gap-0">
        <div class="flex flex-col justify-center lg:justify-start text-center lg:text-start gap-5 lg:gap-3 lg:max-w-[374px]">
          <h1 class="text-[40px] font-bold text-white">Contact us!</h1>
          <h2 class="text-pink text-2xl">
            Are you ready to live a unique experience?
          </h2>
          <p class="text-gray text-lg">
            If you have any questions and for more information, please contact
            us.
          </p>
        </div>

        <form class="flex justify-center lg:justify-end">
          <div class="flex flex-col w-full gap-8 lg:gap-10">
            <div class="grid md:grid-cols-2 gap-8 lg:gap-6">
              <Input placeholder="Name" />
              <Input placeholder="Company" />
            </div>
            <Input placeholder="E-mail" />
            <Input placeholder="Message" />

            <div class="flex justify-center lg:justify-start w-full mt-8">
              <button class="flex items-center justify-center rounded-2xl bg-transparent py-4 w-full max-w-[142px] border font-semibold border-pink text-pink hover:bg-midnightblue/40 hover:bg-opacity-40 transition-all duration-150">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
