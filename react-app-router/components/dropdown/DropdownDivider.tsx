import { MenuSeparator } from "@headlessui/react";

export default function DropdownDivider() {
    return (
        <MenuSeparator
            className="my-1 border-t border-gray-200 dark:border-gray-700"
            aria-orientation="horizontal"
            children={null}
        ></MenuSeparator>
    );
}