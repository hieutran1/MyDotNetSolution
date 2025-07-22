import * as Headless from "@headlessui/react";
export default function Legend({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Headless.Legend
            data-slot="legend"
            className="text-base/6 font-semibold text-zinc-950 data-disabled:opacity-50 sm:text-sm/6 dark:text-white">
            {children}
        </Headless.Legend>
    );
}