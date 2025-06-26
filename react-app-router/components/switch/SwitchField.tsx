import { Field } from "@headlessui/react";

export default function SwitchField({
  disabled = false,
  children
}: {
    disabled?: boolean;
    children?: React.ReactNode;
}) {
  return (
    <Field
        as="div"
        className={`flex items-center gap-2 ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={disabled}
    >
        {children}
    </Field>
  );
}