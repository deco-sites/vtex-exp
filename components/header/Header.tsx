import Drawers from "$store/islands/Header/Drawers.tsx";
import type { Image } from "deco-sites/std/components/types.ts";
import Navbar from "./Navbar.tsx";

export interface NavItem {
  label: string;
  href: string;
}

export interface Props {
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];

  /** @title Logo */
  logo?: { src: Image; alt: string };
}

function Header({
  navItems = [],
  logo,
}: Props) {
  return (
    <>
      <Drawers
        menu={{ items: navItems }}
      >
        <div class="bg-transparent backdrop-blur-sm fixed w-full z-50 animate-slide-bottom text-white">
          <Navbar items={navItems} logo={logo} />
        </div>
      </Drawers>
    </>
  );
}

export default Header;
