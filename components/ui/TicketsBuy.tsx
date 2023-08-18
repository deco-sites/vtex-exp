import ComponentTicketBuy from "deco-sites/vtex-exp/components/ui/ComponentTicketBuy.tsx";
import type { Props as CardProps } from "deco-sites/vtex-exp/components/ui/ComponentTicketBuy.tsx";

export interface Props {
  cards?: CardProps[];
}

export default function TicketsBuy({ cards }: Props) {
  return (
    <div class="w-full h-full py-20">
      <div class="text-4xl text-white text-center m-7">
        <h1 class="">
          Tickets
        </h1>
      </div>
      <div class="flex items-center justify-center gap-6">
        {cards?.map((card) => <ComponentTicketBuy {...card} />)}
      </div>
    </div>
  );
}
