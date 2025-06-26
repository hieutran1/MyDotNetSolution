import { Description } from "@headlessui/react";

export default function DropdownDescription({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Description
            as="div"
            className="px-4 py-2 text-sm text-gray-500 bg-gray-50"
            children={children}
        ></Description>
    );
}