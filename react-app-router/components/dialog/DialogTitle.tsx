import { DialogTitle as DialogTitleH } from "@headlessui/react";

export default function DialogTitle({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DialogTitleH
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
            data-testid="dialog-title"
        >
            {children}
        </DialogTitleH>
    );
}