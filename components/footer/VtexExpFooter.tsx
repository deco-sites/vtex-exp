import ContactUs from "./ContactUs.tsx";
import type { Props as ContactProps } from "./ContactUs.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  contactUs: ContactProps;
  logos?: Array<{
    image: LiveImage;
    description?: string;
    href?: string;
  }>;
  links?: Array<{
    label: string;
    href: string;
  }>;
}

export default function Footer({ logos, links, contactUs }: Props) {
  return (
    <section class="flex flex-col bg-darkslategray w-full h-full pt-24 pb-12 gap-28">
      <div class="flex items-center justify-center w-full">
        <ContactUs {...contactUs} />
      </div>

      <footer class="flex flex-col items-center justify-center w-full">
        <div class="bg-line-gradient w-[90%] h-1" loading="lazy" />

        <div class="flex px-4 md:px-0 w-full md:max-w-[85%] mt-10 md:mt-14">
          <div class="flex flex-col md:flex-row items-center md:justify-between min-w-full gap-16 md:gap-0">
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 lg:first:pl-12 w-full order-2 md:order-1">
              {logos?.map((logo) => (
                <a class="w-28 max-h-16" href={logo.href}>
                  <img
                    loading="lazy"
                    src={logo?.image}
                    alt={logo?.description}
                    width={200}
                    height={200}
                  />
                </a>
              ))}
            </div>

            <ul class="flex items-center justify-center md:justify-end gap-8 w-full order-1 md:order-2">
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
          </div>
        </div>
      </footer>
    </section>
  );
}
