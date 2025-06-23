import { Textarea as TextareaH } from "@headlessui/react";

export default function Textarea({
    disabled = false,
    invalid = false,
    resizable = true,
    name,
    defaultValue,
    value,
    onChange,
    rows
}: {
    disabled?: boolean;
    invalid?: boolean;
    resizable?: boolean;
    name: string;
    defaultValue?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
}) {
    return (
        <TextareaH
            name={name}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            disabled={disabled}
            rows={rows}
            className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${invalid ? "border-red-500" : ""} ${resizable ? "resize" : "resize-none"}`}
        />
    );
}