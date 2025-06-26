import { MenuItem } from "@headlessui/react";

export default function DropdownItem({
    href,
    onClick,
    children,
}: {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
}) {
    return (
        <MenuItem
            as="a"
            href={href}
            onClick={onClick}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            children={children}
        ></MenuItem>
    );
}