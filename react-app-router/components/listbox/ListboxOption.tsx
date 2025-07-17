import * as Headless from "@headlessui/react";

export default function ListboxOption({
    value,
    children
}: {
    value: any;
    children: React.ReactNode;
}) {
    return (

        <Headless.ListboxOption
            value={value}
            className="group/option grid cursor-default grid-cols-[--spacing(5)_1fr] items-baseline gap-x-2 rounded-lg py-2.5 pr-3.5 pl-2 sm:grid-cols-[--spacing(4)_1fr] sm:py-1.5 sm:pr-3 sm:pl-1.5 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText] outline-hidden data-focus:bg-blue-500 data-focus:text-white forced-color-adjust-none forced-colors:data-focus:bg-[Highlight] forced-colors:data-focus:text-[HighlightText] data-disabled:opacity-50"
        >
            <svg className="relative hidden size-5 self-center stroke-current group-data-selected/option:inline sm:size-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 8.5l3 3L12 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>

            <span className="flex min-w-0 items-center *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 sm:*:data-[slot=icon]:size-4 *:data-[slot=icon]:text-zinc-500 group-data-focus/option:*:data-[slot=icon]:text-white dark:*:data-[slot=icon]:text-zinc-400 forced-colors:*:data-[slot=icon]:text-[CanvasText] forced-colors:group-data-focus/option:*:data-[slot=icon]:text-[Canvas] *:data-[slot=avatar]:-mx-0.5 *:data-[slot=avatar]:size-6 sm:*:data-[slot=avatar]:size-5 col-start-2">
                {children}
            </span>
        </Headless.ListboxOption>
    );
}