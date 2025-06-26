import { Field } from "@headlessui/react";

export default function RadioField({
  disabled,
  children
}: {
    disabled?: boolean;
    children: React.ReactNode;
}) {
  return (
    <Field
        as="div"
        className={`flex items-start gap-3 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={disabled}
    >
        {children}
    </Field>
  );
}