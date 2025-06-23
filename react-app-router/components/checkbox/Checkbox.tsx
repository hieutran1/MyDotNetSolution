import { Checkbox as CheckboxH } from "@headlessui/react";

export default function Checkbox({
  color = 'zinc',
  disabled = false,
  name,
  value,
  defaultChecked,
  checked,
  onChange,
}: {
  color?: string;
  disabled?: boolean;
  name?: string;
  value?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <CheckboxH
      as="input"
      type="checkbox"
      name={name}
      value={value}
      defaultChecked={defaultChecked}
      checked={checked}
      onChange={(e) => !!onChange && onChange((e as any).target.checked)}
      disabled={disabled}
      className={`form-checkbox h-5 w-5 text-${color}-600 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    ></CheckboxH>
  );
}