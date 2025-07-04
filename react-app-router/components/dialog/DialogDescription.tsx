import { Description } from "@headlessui/react";

export default function DialogDescription({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Description
            as="p"
            className="mt-2 text-pretty text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400"
        >
            {children}
        </Description>
    );
}