import { Field } from "@headlessui/react";

export default function CheckboxField({
    disabled = false,
    children,
}: {
    disabled?: boolean;
    children?: React.ReactNode;
}) {
    return (
        <Field
            as="input"
            type="checkbox"
            disabled={disabled}
            className={`form-checkbox h-5 w-5 text-blue-600 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {children}
        </Field>
    );
}