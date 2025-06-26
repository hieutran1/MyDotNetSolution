import { Description } from "@headlessui/react";

export default function DropdownShortcut({
    keys,
}: {
    keys: string[];
}) {
    return (
        <Description
            as="div"
            className="px-4 py-2 text-sm text-gray-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-400"
            children={
                keys.length > 0
                    ? keys.map((key, index) => (
                        <span key={index} className="inline-block mr-1">
                            {key}
                        </span>
                    ))
                    : "No shortcuts available"
            }
        ></Description>
    );
}