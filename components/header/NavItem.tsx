export interface INavItem {
  label: string;
  href: string;
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label } = item;

  const isActive = self?.location?.href.includes(href);

  return (
    <div class="group flex items-center">
      <a href={href} class="px-4 py-3">
        <span
          class={`group-hover:text-pink transition-colors duration-100 ${
            isActive && "border-b border-pink"
          }`}
        >
          {label}
        </span>
      </a>
    </div>
  );
}

export default NavItem;
