import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useUI } from "$store/sdk/useUI.ts";

export default function MenuButton() {
  const { displayMenu } = useUI();

  return (
    <Button
      class="w-8 h-8 rounded-full"
      aria-label="open menu"
      onClick={() => {
        displayMenu.value = true;
      }}
    >
      <Icon
        id="Bars3"
        size={27}
        strokeWidth={0.01}
        class="hover:text-pink transition-colors duration-100 pb-1"
      />
    </Button>
  );
}
