import { Radio as RadioH } from "@headlessui/react";

export default function Radio({
    color = 'zinc',
    disabled = false,
    value
}: {
    color?: 'zinc' | 'blue';
    disabled?: boolean;
    value?: string;
    name?: string;
}) {
    return (
        <RadioH
            value={value}
            disabled={disabled}
            className={({ checked }) =>
                `h-4 w-4 rounded-full border-2 border-${color}-500 bg-white text-${color}-600 focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 disabled:cursor-not-allowed disabled:border-${color}-300 disabled:bg-${color}-50 disabled:text-${color}-400 ${checked ? `border-${color}-600` : ''}`
            }
        />
    );
}