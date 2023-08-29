import Icon from "$store/components/ui/Icon.tsx";
import { CartButton, MenuButton } from "$store/islands/Header/Buttons.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { INavItem } from "./NavItem.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import { asset } from "$fresh/runtime.ts";

function Navbar({ items, logo }: {
  items: INavItem[];
  logo?: { src: string; alt: string };
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden flex flex-row justify-between items-center drop-shadow-md w-full px-5 py-12 gap-2"
      >
        {logo && (
          <a
            href="/"
            class="inline-flex items-center w-[100px]"
            style={{ minHeight: navbarHeight }}
            aria-label="Vtex-EXP logo"
          >
            <Image src={logo.src} alt={logo.alt} width={100} height={40} />
          </a>
        )}

        <a
          href="#card-content"
          class="flex items-center justify-center rounded-2xl bg-pink py-2 min-w-[100px] border text-black font-semibold border-pink hover:text-pink hover:bg-midnightblue transition-all duration-150"
        >
          Buy now
        </a>

        <div class="flex items-center justify-center -space-x-1.5">
          <div class="flex items-center gap-1">
            <a
              href="/login"
              aria-label="Log in"
            >
              <Icon
                id="User"
                size={24}
                strokeWidth={0.4}
                class="hover:text-pink transition-colors duration-100"
              />
            </a>
            <CartButton />
          </div>
          <MenuButton />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center drop-shadow-md w-full px-6 py-5">
        <div class="flex gap-4 w-full">
          {logo && (
            <a
              href="/"
              aria-label="Vtex-EXP logo"
              class="block px-4 w-[230px]"
            >
              <Image src={logo.src} alt={logo.alt} width={210} height={45} />
            </a>
          )}

          <div class="md:hidden lg:flex">
            {items.map((item) => <NavItem item={item} />)}
          </div>
        </div>

        <div class="flex-none w-52 flex items-center justify-end gap-8 lg:pr-8">
          <a
            href="#card-content"
            class="flex items-center justify-center rounded-2xl lg:rounded-xl bg-pink py-2 lg:py-3 min-w-[60%] lg:min-w-[80%] border text-black font-semibold border-pink hover:text-pink hover:bg-midnightblue transition-all duration-150"
          >
            Buy now
          </a>

          <div class="flex items-center justify-center -space-x-1 lg:-space-x-2 lg:gap-1">
            <div class="flex items-center gap-1">
              <a
                href="/login"
                aria-label="Log in"
              >
                <Icon
                  id="User"
                  size={24}
                  strokeWidth={0.4}
                  class="hover:text-pink transition-colors duration-100"
                />
              </a>
              <CartButton />
            </div>
            <div class="md:flex lg:hidden">
              <MenuButton />
            </div>
            <div class="md:hidden lg:flex items-center justify-center">
              <div class="w-8 h-8 rounded-full flex items-center justify-center dropdown dropdown-bottom">
                <label
                  tabIndex={0}
                  class="m-1 flex items-center gap-1.5 cursor-pointer"
                >
                  <img
                    src={asset("/global.svg")}
                    width={16}
                    height={16}
                    alt="Global"
                    loading="lazy"
                    class="hover:text-pink transition-colors duration-100 object-cover pb-1"
                  />

                  <span class="uppercase font-bold text-white">EN</span>
                </label>

                <ul
                  tabIndex={0}
                  class="flex flex-col gap-1 dropdown-content z-[1] text-sm rounded-none menu p-1 shadow-md bg-darkslategray w-[116px]"
                >
                  <li>
                    <a href="#">English</a>
                  </li>
                  <li>
                    <a href="#">Portuguese</a>
                  </li>
                  <li>
                    <a href="#">Spanish</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
