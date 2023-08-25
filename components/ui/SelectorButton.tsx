interface Props {
  title: string;
  options?: (string | undefined)[];
  setSelected: (product: string | undefined) => void;
}

export default function SelectorButton({ title, options, setSelected }: Props) {
  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.currentTarget.value);
  };

  return (
    <select
      id="ticket-selector"
      class="select select-bordered w-full max-w-full rounded-xl h-[33px] bg-darkslategray"
      aria-label="select element"
      onChange={handleSelection}
    >
      <option disabled selected>{title}</option>
      {options?.map((item, index) => (
        <option key={index} value={item}>{item}</option>
      ))}
    </select>
  );
}
