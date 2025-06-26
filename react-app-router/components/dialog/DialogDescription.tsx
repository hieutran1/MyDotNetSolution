import { Description } from "@headlessui/react";

export default function DialogDescription({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Description
            as="p"
            className="text-sm text-gray-500 dark:text-gray-400"
            data-testid="dialog-description"
        >
            {children}
        </Description>
    );
}