import { MenuSection } from "@headlessui/react";

export default function DropdownSection({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <MenuSection
            as="div"
            className="col-span-full supports-[grid-template-columns:subgrid]:grid supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto]"
        >
            {children}
        </MenuSection>
    );
}