import { ComboboxOption as ComboboxOptionH } from "@headlessui/react";

export default function ComboboxOption({
    value,
    children,
}: {
    value: {name: string} | string;
    children: React.ReactNode;
}) {
    return (
        <ComboboxOptionH
            value={value}
        >
            {children}
        </ComboboxOptionH>
    );
}