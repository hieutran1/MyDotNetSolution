import { Description as DescriptionH } from "@headlessui/react";

export default function Description({ children }: { children: React.ReactNode }) {
    return (
        <DescriptionH
            as="p"
            className="text-base/6 text-zinc-500 data-disabled:opacity-50 sm:text-sm/6 dark:text-zinc-400"
            data-slot="description">
            {children}
        </DescriptionH>
    );
}