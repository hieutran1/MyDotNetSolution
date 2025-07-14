import * as Headless from "@headlessui/react";
import { useState } from "react";

export default function Combobox({
    disabled = false,
    invalid = false,
    anchor = 'bottom',
    name,
    options,
    displayValue,
    defaultValue,
    placeholder,
    children,
    aria_label,
    className,
    value,
    onChange,
    filter
}: {
    disabled?: boolean;
    invalid?: boolean;
    anchor?: 'top' | 'bottom';
    name: string;
    options: any[];
    displayValue: (value: any) => string;
    defaultValue?: any | null;
    onSelected?: (option: any) => void;
    placeholder?: string;
    children: (value: any) => React.ReactNode;
    aria_label?: string;
    className?: string;
    value: any;
    onChange?: (data: any) => void;
    filter?: (data: any, query: string) => boolean
}) {
    const [query, setQuery] = useState('');
    const filteredOptions =
        (query === '' || filter == null)
            ? options
            : options.filter((option) => filter && filter(option, query));

    return (
        <Headless.Combobox
            as="span"
            data-slot="control"
            name={name}
            disabled={disabled}
            aria-label={aria_label}
            className={(className ? className + ' ' : '') + "relative block w-full before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset sm:focus-within:after:ring-2 sm:focus-within:after:ring-blue-500 has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none has-data-invalid:before:shadow-red-500/10"}

            value={value}
            onClose={() => setQuery('')}
            onChange={(selectedOption) => onChange ? onChange(selectedOption) : ''}
        >
            <Headless.ComboboxInput
                type="text"
                className="relative block w-full appearance-none rounded-lg py-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1.5)-1px)] pr-[calc(--spacing(10)-1px)] pl-[calc(--spacing(3.5)-1px)] sm:pr-[calc(--spacing(9)-1px)] sm:pl-[calc(--spacing(3)-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20 bg-transparent dark:bg-white/5 focus:outline-hidden data-invalid:border-red-500 data-invalid:data-hover:border-red-500 dark:data-invalid:border-red-500 dark:data-invalid:data-hover:border-red-500 data-disabled:border-zinc-950/20 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/2.5 dark:data-hover:data-disabled:border-white/15 dark:scheme-dark"
                aria-expanded="false"
                aria-autocomplete="list"

                displayValue={displayValue}
                value={displayValue(value)}
                onChange={(event) => setQuery(event.target.value)}

                placeholder={placeholder}
            >
            </Headless.ComboboxInput>
            <Headless.ComboboxButton
                type="button"
                aria-haspopup="listbox"
                aria-expanded="false"
                className="group absolute inset-y-0 right-0 flex items-center px-2"
            >
                <svg className="size-5 stroke-zinc-500 group-data-disabled:stroke-zinc-600 group-data-hover:stroke-zinc-700 sm:size-4 dark:stroke-zinc-400 dark:group-data-hover:stroke-zinc-300 forced-colors:stroke-[CanvasText]" viewBox="0 0 16 16" aria-hidden="true" fill="none">
                    <path d="M5.75 10.75L8 13L10.25 10.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M10.25 5.25L8 3L5.75 5.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </Headless.ComboboxButton>

            <Headless.ComboboxOptions
                className="[--anchor-gap:--spacing(2)] [--anchor-padding:--spacing(4)] sm:data-[anchor~=start]:[--anchor-offset:-4px] isolate min-w-[calc(var(--input-width)+8px)] scroll-py-1 rounded-xl p-1 select-none empty:invisible outline outline-transparent focus:outline-hidden overflow-y-scroll overscroll-contain bg-white/75 backdrop-blur-xl dark:bg-zinc-800/75 shadow-lg ring-1 ring-zinc-950/10 dark:ring-white/10 dark:ring-inset transition-opacity duration-100 ease-in data-closed:data-leave:opacity-0 data-transition:pointer-events-none"
                anchor="bottom">
                <div className="position: relative; width: 100%; height: 36px;">
                    {filteredOptions.map(option => (children(option)))}
                </div>
            </Headless.ComboboxOptions>
        </Headless.Combobox>
    );
}
