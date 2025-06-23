import { Select as SelectH } from "@headlessui/react";
import type React from "react";

export default function Select({
    disabled = false,
    invalid = false,
    name,
    defaultValue,
    value,
    onChange,
    children
}: {
    disabled?: boolean;
    invalid?: boolean;
    name: string;
    defaultValue?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    children?: React.ReactNode;
}) {
    return (
        <SelectH
            name={name}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${invalid ? "border-red-500" : ""}`}
        >
            {children}
        </SelectH>
    );
}