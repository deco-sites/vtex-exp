import Card from "./Card.tsx";
import type { Props as CardProps } from "./Card.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import { useId } from "$store/sdk/useId.ts";
import { SendEventOnLoad } from "$store/sdk/analytics.tsx";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import { useOffer } from "$store/sdk/useOffer.ts";

export interface Props {
  cards: CardProps[];
  title?: string;
  description?: string;
  layout?: {
    headerAlignment?: "center" | "left";
    headerfontSize?: "Normal" | "Large";
  };
}

function CardsShelf({
  cards,
  title,
  description,
  layout,
}: Props) {
  const id = useId();

  if (!cards || cards.length === 0) {
    return null;
  }

  function handleScroll() {
    document.addEventListener("scroll", () => {
      const cardContent = document.getElementById("card-content");

      if (cardContent) {
        const { top, bottom } = cardContent.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;

        if (isVisible) {
          cardContent.classList.add("animate-slide-bottom");
        }
      }
    });
  }

  return (
    <>
      <div
        id="card-content"
        class="w-full h-full lg:h-[668px] max-w-[95%] md:max-w-[85%] mx-auto py-8 flex flex-col gap-12 lg:gap-16 lg:py-10 rounded-xl bg-gradient-to-b from-midnightblue to-darkgray/20 my-24 px-4 md:px-0"
      >
        <Header
          title={title || ""}
          description={description || ""}
          fontSize={layout?.headerfontSize || "Large"}
          alignment={layout?.headerAlignment || "center"}
        />

        <div
          id={id}
          class="container grid grid-cols-[48px_1fr_48px] px-0 sm:px-5 h-full"
        >
          <Slider class="inline-grid justify-center lg:justify-stretch lg:carousel lg:carousel-center gap-14 lg:gap-6 col-span-full row-start-2 row-end-5 h-full">
            {cards?.map((card, index) => (
              <Slider.Item
                index={index}
                class="lg:carousel-item w-full md:w-[495px] lg:w-[390px] lg:h-[90%] lg:first:pl-6 lg:last:pr-6"
              >
                <Card {...card} />
              </Slider.Item>
            ))}
          </Slider>

          <>
            <div class="hidden relative lg:block z-10 col-start-1 row-start-3">
              <Slider.PrevButton class="btn btn-circle btn-outline absolute right-[85%] bg-base-100">
                <Icon size={24} id="ChevronLeft" strokeWidth={3} />
              </Slider.PrevButton>
            </div>
            <div class="hidden relative lg:block z-10 col-start-3 row-start-3">
              <Slider.NextButton class="btn btn-circle btn-outline absolute left-[85%] bg-base-100">
                <Icon size={24} id="ChevronRight" strokeWidth={3} />
              </Slider.NextButton>
            </div>
          </>
          <SliderJS rootId={id} />
          {
            /* <SendEventOnLoad
          event={{
            name: "view_item_list",
            params: {
              item_list_name: title,
              items: products.map((product) =>
                mapProductToAnalyticsItem({
                  product,
                  ...(useOffer(product.offers)),
                })
              ),
            },
          }}
        /> */
          }
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{ __html: `(${handleScroll.toString()})()` }}
      />
    </>
  );
}

export default CardsShelf;
