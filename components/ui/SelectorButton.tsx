export default function SelectorButton({ title }: { title: string }) {
  return (
    <select class="select select-bordered w-full max-w-full rounded-xl h-[33px] bg-darkslategray">
      <option disabled selected>{title}</option>
    </select>
  );
}
