import { Menu } from "@headlessui/react";

export default function Dropdown({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <Menu
            as="div"
            className="relative inline-block text-left" children={children}>
        </Menu>
    );
}