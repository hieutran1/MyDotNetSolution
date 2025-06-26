import { Listbox as ListboxH } from "@headlessui/react";

export default function Listbox({
    disabled = false,
    invalid = false,
    name,
    defaultValue,
    value,
    onChange,
    placeholder,
    children
}: {
    disabled?: boolean;
    invalid?: boolean;
    name: string;
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    children: React.ReactNode;
}) {
    return (
        <ListboxH
            as="div"
            name={name}
            disabled={disabled}
            value={value}
            defaultValue={defaultValue}
            onChange={(value) => {
                if (onChange) {
                    onChange(value);
                }
            }}
            className={`relative ${invalid ? "border-red-500" : ""}`}
        >
            {children}
        </ListboxH>
    );
}