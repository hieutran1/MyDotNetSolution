import { MenuSection } from "@headlessui/react";

export default function DropdownSection({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <MenuSection
            as="div"
            className="px-4 py-2 text-sm text-gray-700 bg-gray-100"
            children={children}
        ></MenuSection>
    );
}