import * as Headless from "@headlessui/react";

export default function Description({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <Headless.Description
            as="p"
            className={
                (className ? className + ' ' : '') +
                "text-base/6 text-zinc-500 data-disabled:opacity-50 sm:text-sm/6 dark:text-zinc-400"
            }
            data-slot="description" >
            {children}
        </Headless.Description >
    );
}