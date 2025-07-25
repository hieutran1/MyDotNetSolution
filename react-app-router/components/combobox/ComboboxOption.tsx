import * as Headless from "@headlessui/react";

export default function ComboboxOption({
    value,
    children,
}: {
    value?: any;
    children: React.ReactNode;
}) {
    return (
        <Headless.ComboboxOption
            className="group/option grid w-full cursor-default grid-cols-[1fr_--spacing(5)] items-baseline gap-x-2 rounded-lg py-2.5 pr-2 pl-3.5 sm:grid-cols-[1fr_--spacing(4)] sm:py-1.5 sm:pr-2 sm:pl-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText] outline-hidden data-focus:bg-blue-500 data-focus:text-white forced-color-adjust-none forced-colors:data-focus:bg-[Highlight] forced-colors:data-focus:text-[HighlightText] data-disabled:opacity-50"
            value={value}
        >
            <span className="flex min-w-0 items-center *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 sm:*:data-[slot=icon]:size-4 *:data-[slot=icon]:text-zinc-500 group-data-focus/option:*:data-[slot=icon]:text-white dark:*:data-[slot=icon]:text-zinc-400 forced-colors:*:data-[slot=icon]:text-[CanvasText] forced-colors:group-data-focus/option:*:data-[slot=icon]:text-[Canvas] *:data-[slot=avatar]:-mx-0.5 *:data-[slot=avatar]:size-6 sm:*:data-[slot=avatar]:size-5">
                {children}
            </span>
            <svg className="relative col-start-2 hidden size-5 self-center stroke-current group-data-selected/option:inline sm:size-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 8.5l3 3L12 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </Headless.ComboboxOption>
    );
}