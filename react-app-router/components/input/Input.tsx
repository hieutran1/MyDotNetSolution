import * as Headless from "@headlessui/react";

export default function Input({
    disabled = false,
    invalid = false,
    name,
    defaultValue,
    value,
    placeholder,
    onChange,
    type,
    autoFocus = false,
    autoComplete = "off",
    className, 
    pattern
}: {
    disabled?: boolean;
    invalid?: boolean;
    name: string;
    defaultValue?: string;
    value?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    autoFocus?: boolean;
    autoComplete?: string;
    className?: string;
    pattern?: string;
}) {
    return (
        <span
            data-slot="control"
            className={
                (className ? className + ' ' : '') +
                "relative block w-full before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset sm:focus-within:after:ring-2 sm:focus-within:after:ring-blue-500 has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none has-data-invalid:before:shadow-red-500/10"
            }>
            <Headless.Input
                as="input"
                type={type || "text"}
                name={name}
                defaultValue={defaultValue}
                value={value}
                invalid={invalid}
                onChange={onChange}
                disabled={disabled}
                autoFocus={autoFocus}
                placeholder={placeholder}
                autoComplete={autoComplete}
                pattern={pattern}
                className="relative block w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20 bg-transparent dark:bg-white/5 focus:outline-hidden data-invalid:border-red-500 data-invalid:data-hover:border-red-500 dark:data-invalid:border-red-500 dark:data-invalid:data-hover:border-red-500 data-disabled:border-zinc-950/20 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/2.5 dark:data-hover:data-disabled:border-white/15 dark:scheme-dark"
            />
        </span >

    );
}