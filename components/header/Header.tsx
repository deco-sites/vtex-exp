import Drawers from "$store/islands/Header/Drawers.tsx";
import type { Image } from "deco-sites/std/components/types.ts";
import Navbar from "./Navbar.tsx";
import Modals from "$store/islands/Modals.tsx";

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

  /**
   * @title Current Active Path
   * @description Responsible for checking the current path. No need to change anything.
   */
  selectedPath?: string;
}

function Header({
  navItems = [],
  logo,
  selectedPath,
}: Props) {
  return (
    <>
      <Drawers
        menu={{ items: navItems }}
      >
        <div class="bg-transparent backdrop-blur-sm fixed w-full z-50 animate-slide-bottom text-white">
          <Navbar items={navItems} logo={logo} selectedPath={selectedPath} />
        </div>
      </Drawers>

      <Modals />
    </>
  );
}

export const loader = (props: Props, req: Request) => {
  const url = new URL(req.url);

  return { ...props, selectedPath: url.pathname };
};

export default Header;
