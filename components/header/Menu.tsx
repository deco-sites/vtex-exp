import type { INavItem } from "./NavItem.tsx";

export interface Props {
  items: INavItem[];
  languages: { link: string; label: string }[];
}

function MenuItem({ item }: { item: INavItem }) {
  return (
    <a href={item.href} class="collapse">
      <span class="collapse-title">{item.label}</span>
    </a>
  );
}

function LanguageItem({ items }: { items: { link: string; label: string }[] }) {
  return (
    <div class="collapse collapse-plus">
      <input type="checkbox" />
      <div class="collapse-title">Languages</div>
      <div class="collapse-content">
        <ul>
          {items.map((item) => (
            <li>
              <a class="underline text-sm" href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Menu({ items, languages }: Props) {
  return (
    <div class="flex flex-col h-full">
      <ul class="px-4 flex-grow flex flex-col divide-y divide-base-200">
        {items.map((item) => (
          <li>
            <MenuItem item={item} />
          </li>
        ))}
        <LanguageItem items={languages} />
      </ul>
    </div>
  );
}

export default Menu;
