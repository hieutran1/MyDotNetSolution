import { Label } from "@headlessui/react";

export default function DropdownLabel({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Label
            as="div"
            className="px-4 py-2 text-sm font-semibold text-gray-900 bg-gray-200"
            children={children}
        ></Label>
    );
}