import * as Headless from "@headlessui/react";
import { forwardRef } from "react";

let MyCustomSelectedOption = forwardRef(function (props, ref) {
    return <button className="..."  {...props} />
})

export default function Listbox({
    invalid = false,
    name,
    defaultValue,
    value,
    displayValue,
    onChange,
    placeholder,
    children,
    className
}: {
    invalid?: boolean;
    name: string;
    defaultValue?: string;
    value?: any;
    displayValue?: (data: any) => void;
    onChange?: (value: any) => void;
    placeholder?: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <>
            <Headless.Listbox
                name={name}
                value={value}
                defaultValue={defaultValue}
                onChange={(value) => {
                    if (onChange) {
                        onChange(value);
                    }
                }}
                invalid={invalid}
            >
                <Headless.ListboxButton
                    className={
                        (className ? className + ' ' : '') +
                        "group relative block w-full before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm dark:before:hidden focus:outline-hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset data-focus:after:ring-2 data-focus:after:ring-blue-500 data-disabled:opacity-50 data-disabled:before:bg-zinc-950/5 data-disabled:before:shadow-none"}

                    data-slot="control"
                    value={displayValue ? displayValue(value) : value}
                >
                    <span
                        className="relative block w-full appearance-none rounded-lg py-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1.5)-1px)] min-h-11 sm:min-h-9 pr-[calc(--spacing(7)-1px)] pl-[calc(--spacing(3.5)-1px)] sm:pl-[calc(--spacing(3)-1px)] text-left text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText] border border-zinc-950/10 group-data-active:border-zinc-950/20 group-data-hover:border-zinc-950/20 dark:border-white/10 dark:group-data-active:border-white/20 dark:group-data-hover:border-white/20 bg-transparent dark:bg-white/5 group-data-invalid:border-red-500 group-data-hover:group-data-invalid:border-red-500 dark:group-data-invalid:border-red-600 dark:data-hover:group-data-invalid:border-red-600 group-data-disabled:border-zinc-950/20 group-data-disabled:opacity-100 dark:group-data-disabled:border-white/15 dark:group-data-disabled:bg-white/2.5 dark:group-data-disabled:data-hover:border-white/15">
                        {
                            <Headless.ListboxSelectedOption
                                as={MyCustomSelectedOption}
                                options={children} placeholder={<span className="block truncate text-zinc-500">{placeholder}</span>} />
                        }
                    </span>

                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <svg className="size-5 stroke-zinc-500 group-data-disabled:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]" viewBox="0 0 16 16" aria-hidden="true" fill="none">
                            <path d="M5.75 10.75L8 13L10.25 10.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M10.25 5.25L8 3L5.75 5.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>
                </Headless.ListboxButton>

                <Headless.ListboxOptions
                    className="[--anchor-offset:-1.625rem] [--anchor-padding:--spacing(4)] sm:[--anchor-offset:-1.375rem] isolate w-max min-w-[calc(var(--button-width)+1.75rem)] scroll-py-1 rounded-xl p-1 select-none outline outline-transparent focus:outline-hidden overflow-y-scroll overscroll-contain bg-white/75 backdrop-blur-xl dark:bg-zinc-800/75 shadow-lg ring-1 ring-zinc-950/10 dark:ring-white/10 dark:ring-inset transition-opacity duration-100 ease-in data-closed:data-leave:opacity-0 data-transition:pointer-events-none"
                    anchor="selection"
                >
                    {children}
                </Headless.ListboxOptions>
            </Headless.Listbox>
        </>
    );
}