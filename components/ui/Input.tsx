import { forwardRef } from "preact/compat";
import type { JSX } from "preact";

export type Props =
  & Omit<JSX.IntrinsicElements["input"], "loading">
  & {
    loading?: boolean;
  };

const Input = forwardRef<HTMLInputElement, Props>(({
  class: _class = "",
  loading,
  disabled,
  placeholder,
  ...props
}) => (
  <input
    {...props}
    class={`placeholder:text-darkgray text-darkgray border-darkgray h-[17px] border-b-2 min-w-full lg:min-w-[197px] border-none focus:outline-none text-sm ${_class}`}
    aria-label={`${placeholder} input`}
    disabled={disabled || loading}
    placeholder={placeholder}
    type="text"
  />
));

export default Input;
