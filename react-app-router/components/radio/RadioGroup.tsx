import { RadioGroup as RadioGroupH} from "@headlessui/react";

export default function RadioGroup({
  disabled = false,
  name,
  defaultValue,
  value,
  onChange,
  children
}: {
    disabled?: boolean;
    name: string;
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    children: React.ReactNode;
}) {
  return (
    <RadioGroupH
        disabled={disabled}
        name={name}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        className="flex flex-col gap-2"
    >
      {children}
    </RadioGroupH>
  );
}