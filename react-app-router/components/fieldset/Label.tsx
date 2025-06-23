import { Label as LabelH } from "@headlessui/react";

export default function Label({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LabelH
            as="label"
            className="block text-sm font-medium text-gray-700">
            {children}
        </LabelH>
    );
}