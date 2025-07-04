import { Description } from "@headlessui/react";

export default function AlertDescription({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Description 
            data-slot="text"
            className="mt-2 text-center text-pretty sm:text-left text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">
            {children}
        </Description>
    );
}