import type { BreadcrumbList } from "deco-sites/std/commerce/types.ts";

interface Props {
  itemListElement: BreadcrumbList["itemListElement"];
}

function Breadcrumb({ itemListElement = [] }: Props) {
  const items = [
    { name: "Editions", item: "/experiences" },
    ...itemListElement,
  ];

  return (
    <div class="breadcrumbs">
      <ul>
        {items
          .filter(({ name, item }) => name && item)
          .map(({ name, item }) => (
            <li>
              <a href={item} class="text-[10px] sm:text-base">{name}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Breadcrumb;
