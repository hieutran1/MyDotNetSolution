import * as Headless from "@headlessui/react";

export default function Label({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Headless.Label
            data-slot="label"
            className="text-base/6 text-zinc-950 select-none data-disabled:opacity-50 sm:text-sm/6 dark:text-white">
            {children}
        </Headless.Label>
    );
}