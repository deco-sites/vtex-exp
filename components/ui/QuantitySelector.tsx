import Button from "../ui/Button.tsx";

interface Props {
  quantity: number;
  disabled?: boolean;
  loading?: boolean;
  onChange?: (quantity: number) => void;
  type?: "adaptative" | "full";
}

const QUANTITY_MAX_VALUE = 100;

function QuantitySelector(
  { onChange, quantity, disabled, loading, type = "adaptative" }: Props,
) {
  const formattedTypeToCss = type === "adaptative"
    ? "max-w-full md:max-w-[100px]"
    : "max-w-[100px]";

  const decrement = () => onChange?.(Math.max(1, quantity - 1));

  const increment = () =>
    onChange?.(Math.min(quantity + 1, QUANTITY_MAX_VALUE));

  return (
    <div
      class={`flex items-center justify-between border border-pink text-white w-full h-[44px] rounded-xl mx-3 md:mx-1 ${formattedTypeToCss}`}
    >
      <Button
        class="w-12 h-12"
        onClick={decrement}
        disabled={disabled}
        loading={loading}
      >
        -
      </Button>
      <input
        aria-label="Número do Input"
        class="flex text-center join-item [appearance:textfield] bg-transparent w-12 h-12"
        type="number"
        inputMode="numeric"
        pattern="[0-9]*"
        max={QUANTITY_MAX_VALUE}
        min={1}
        value={quantity}
        disabled={disabled}
        onBlur={(e) => onChange?.(e.currentTarget.valueAsNumber)}
        maxLength={3}
        size={3}
      />
      <Button
        class="w-12 h-12"
        onClick={increment}
        disabled={disabled}
        loading={loading}
      >
        +
      </Button>
    </div>
  );
}

export default QuantitySelector;
