import * as Headless from "@headlessui/react";

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
    <Headless.RadioGroup
      data-slot="control"
      disabled={disabled}
      name={name}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      className="space-y-3 **:data-[slot=label]:font-normal has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium"
    >
      {children}
    </Headless.RadioGroup>
  );
}