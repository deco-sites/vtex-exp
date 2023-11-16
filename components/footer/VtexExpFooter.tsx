import { asset } from "$fresh/runtime.ts";

import ContactUs from "./ContactUs.tsx";
import type { Props as ContactProps } from "./ContactUs.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  contactUs: ContactProps;
  primaryLogo?: {
    image: LiveImage;
    description?: string;
    href?: string;
    width: number;
    height: number;
  };
  logos?: Array<{
    image: LiveImage;
    description?: string;
    href?: string;
    width: number;
    height: number;
  }>;
  links?: Array<{
    label: string;
    href: string;
  }>;
}

export default function Footer(
  { primaryLogo, logos, links, contactUs }: Props,
) {
  return (
    <section class="flex flex-col bg-darkslategray w-full h-full pt-24 pb-12 gap-28 relative">
      <div class="flex items-center justify-center w-full">
        <ContactUs {...contactUs} />
      </div>

      <footer class="flex flex-col items-center justify-center w-full">
        <img
          class="w-[90%]"
          alt="Line Gradient"
          width={300}
          height={4}
          src={asset("/line-gradient.png")}
          loading="lazy"
        />

        <div class="flex px-4 md:px-0 w-full md:max-w-[80%] xl:max-w-[95%] mt-10 md:mt-14">
          <div class="flex flex-col md:flex-row items-center md:justify-between min-w-full gap-16 md:gap-0">
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 lg:first:pl-12">
              {primaryLogo && (
                <a class="w-28 max-h-16" href={primaryLogo.href}>
                  <img
                    loading="lazy"
                    src={primaryLogo.image}
                    alt={primaryLogo.description}
                    width={primaryLogo.width}
                    height={primaryLogo.height}
                  />
                </a>
              )}
            </div>

            <ul class="flex items-center justify-center w-full gap-8">
              {links?.map((item) => (
                <li>
                  <a
                    class="text-white capitalize opacity-90 hover:opacity-100 transition-opacity duration-150 text-sm"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div class="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 lg:first:pl-12">
              {logos?.map((logo) => (
                <a class="w-28 max-h-16" href={logo.href}>
                  <img
                    loading="lazy"
                    src={logo?.image}
                    alt={logo?.description}
                    width={logo.width}
                    height={logo.height}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
