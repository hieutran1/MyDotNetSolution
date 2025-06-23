import { Input as InputH } from "@headlessui/react";

export default function Input({
    disabled = false,
    invalid = false,
    name,
    defaultValue,
    value,
    placeholder,
    onChange
}: {
    disabled?: boolean;
    invalid?: boolean;
    name: string;
    defaultValue?: string;
    value?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <InputH
            type="text"
            name={name}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${invalid ? "border-red-500" : ""
                }`} />
    );
}