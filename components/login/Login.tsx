import Input from "$store/components/ui/Input.tsx";

export default function Login() {
  return (
    <section class="h-screen w-full flex items-center justify-around mb-80 md:overflow-hidden lg:pb-20 lg:m-0">
      <div class="max-w-[1280px] flex w-full  md:ml-24">
        <div class="w-screen h-screen grid mb-20 md:grid-cols-2 justify-between items-center px-14">
          {/* Login */}
          <div class="min-w-[296px] h-[229px] md:w-[276px] md:h-[229px] lg:w-[420px] lg:h-[229px] mt-[160px] flex flex-col items-center justify-center">
            <div class="w-full h-full flex flex-col gap-8">
              <p class="text-2xl font-normal whitespace-nowrap">
                Login in to you account
              </p>
              <div class="flex flex-col gap-8">
                <Input placeholder="E-mail" />
                <Input placeholder="Password" />
              </div>
              <a href="/" class="text-sm text-pink">
                Forgot your password?
              </a>
              <button class="flex items-center justify-center rounded-2xl lg:rounded-xl bg-pink py-3 md:min-w-[276px] lg:min-w-[420px] md:max-w-[142px] h-[48px] border text-black font-semibold border-pink hover:text-pink hover:bg-midnightblue transition-all duration-150 mt-4">
                Login
              </button>
            </div>
          </div>

          {/* Register */}
          <div class="min-w-[296px] h-[229px] md:w-[279px] md:h-[229px] lg:w-[420px] lg:h-[229px]  pt-24 mb-80 md:pt-0 flex flex-col items-center justify-center">
            <div class="w-full h-full flex flex-col gap-8">
              <p class="text-2xl font-normal whitespace-nowrap">
                Need an account?
              </p>
              <div class="flex flex-col gap-8">
                <div class="flex flex-col md:flex-col lg:flex-row gap-8">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>

                <Input placeholder="E-mail" />
                <Input placeholder="Phone Number" />

                <div class="flex flex-col md:flex-col lg:flex-row gap-8">
                  <Input placeholder="Company" />
                  <Input placeholder="Job Title" />
                </div>
              </div>
              <form class="flex flex-col gap-4">
                <div class="flex">
                  <input type="checkbox" class="checkbox" />
                  <p class="text-xs lg:text-sm font-light lg:text-center pl-2">
                    I would like to receive SMS notifications related to my
                    orders
                  </p>
                </div>
                <div class="flex">
                  <input type="checkbox" class="checkbox" />
                  <p class="text-xs lg:text-sm font-light lg:text-center pl-2">
                    I wish to receive VTEX Experience news on my e-mail
                  </p>
                </div>
                <div class="flex">
                  <input type="checkbox" class="checkbox" />
                  <p class="text-xs lg:text-sm font-light lg:text-center pl-2">
                    I accept the Privacy Statement
                  </p>
                </div>
              </form>
              <button class="flex items-center justify-center rounded-2xl lg:rounded-xl bg-pink py-3 md:min-w-[276px] lg:min-w-[420px] md:max-w-[142px] h-[48px] border text-black font-semibold border-pink hover:text-pink hover:bg-midnightblue transition-all duration-150 mt-4">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
