import { Combobox as ComboboxH } from "@headlessui/react";

export default function Combobox({
    disabled = false,
    invalid = false,
    anchor = 'bottom',
    name,
    options,
    displayValue,
    defaultValue,
    value,
    onChange,
    placeholder,
    children
}: {
    disabled?: boolean;
    invalid?: boolean;
    anchor?: 'top' | 'bottom';
    name: string;
    options: { name: string }[];
    displayValue?: (name: { name: string }) => string;
    defaultValue?: { name: string } | null;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    children?: (user: { name: string, role: string }) => React.ReactNode;
}) {
    return (
        <ComboboxH
            as="div"
            name={name}
            value={value}
            onChange={onChange}
            defaultValue={defaultValue?.name}
            disabled={disabled}
            className={`relative ${invalid ? 'border-red-500' : ''}`}
        >
        </ComboboxH>
    );
}
