import * as Headless from "@headlessui/react";

export default function DialogTitle({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Headless.DialogTitle
            as="h2"
            className="text-lg/6 font-semibold text-balance text-zinc-950 sm:text-base/6 dark:text-white"
        >
            {children}
        </Headless.DialogTitle>
    );
}