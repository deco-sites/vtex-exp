export { default } from "$store/components/ui/ExperiencePackage.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  cards?: Array<{
    title?: string;
    image: {
      icon: LiveImage;
      alt?: string;
    };
    description?: string;
  }>;
}
