import { DialogTitle } from "@headlessui/react";

export default function AlertTitle({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DialogTitle className="text-center text-base/6 font-semibold text-balance text-zinc-950 sm:text-left sm:text-sm/6 sm:text-wrap dark:text-white">
            {children}
        </DialogTitle>
    );
}