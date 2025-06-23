import { DialogTitle } from "@headlessui/react";

export default function AlertTitle({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        //   {children}
        // </div>
        <DialogTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">{children}</DialogTitle>
    );
}