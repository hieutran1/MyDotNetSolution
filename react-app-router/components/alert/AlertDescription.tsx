import { Description } from "@headlessui/react";

export default function AlertDescription({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // <div className="text-sm text-gray-500 dark:text-gray-400">
        //   {children}
        // </div>
        <Description className="text-sm text-gray-500 dark:text-gray-400">{children}</Description>
    );
}