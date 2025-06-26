import { MenuHeading } from "@headlessui/react";

export default function DropdownHeading({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <MenuHeading
            as="div"
            className="px-4 py-2 text-sm font-semibold text-gray-900 bg-gray-200"
            children={children}
        ></MenuHeading>
    );
}