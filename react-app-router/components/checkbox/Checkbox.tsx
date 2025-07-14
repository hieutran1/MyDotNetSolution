import * as Headless from "@headlessui/react";

export default function Checkbox({
  color = 'zinc',
  disabled = false,
  name,
  value,
  defaultChecked,
  checked,
  onChange,
}: {
  color?: string;
  disabled?: boolean;
  name?: string;
  value?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <Headless.Checkbox
      as="span"
      data-slot="control"
      value={value}
      defaultChecked={defaultChecked}
      name={name}
      className="group inline-flex focus:outline-hidden"
    >
      <span
        className="relative isolate flex size-4.5 items-center justify-center rounded-[0.3125rem] sm:size-4 before:absolute before:inset-0 before:-z-10 before:rounded-[calc(0.3125rem-1px)] before:bg-white before:shadow-sm group-data-checked:before:bg-(--checkbox-checked-bg) dark:before:hidden dark:bg-white/5 dark:group-data-checked:bg-(--checkbox-checked-bg) border border-zinc-950/15 group-data-checked:border-transparent group-data-hover:group-data-checked:border-transparent group-data-hover:border-zinc-950/30 group-data-checked:bg-(--checkbox-checked-border) dark:border-white/15 dark:group-data-checked:border-white/5 dark:group-data-hover:group-data-checked:border-white/5 dark:group-data-hover:border-white/30 after:absolute after:inset-0 after:rounded-[calc(0.3125rem-1px)] after:shadow-[inset_0_1px_--theme(--color-white/15%)] dark:after:-inset-px dark:after:hidden dark:after:rounded-[0.3125rem] dark:group-data-checked:after:block group-data-focus:outline-2 group-data-focus:outline-offset-2 group-data-focus:outline-blue-500 group-data-disabled:opacity-50 group-data-disabled:border-zinc-950/25 group-data-disabled:bg-zinc-950/5 group-data-disabled:[--checkbox-check:var(--color-zinc-950)]/50 group-data-disabled:before:bg-transparent dark:group-data-disabled:border-white/20 dark:group-data-disabled:bg-white/2.5 dark:group-data-disabled:[--checkbox-check:var(--color-white)]/50 dark:group-data-checked:group-data-disabled:after:hidden forced-colors:[--checkbox-check:HighlightText] forced-colors:[--checkbox-checked-bg:Highlight] forced-colors:group-data-disabled:[--checkbox-check:Highlight] dark:forced-colors:[--checkbox-check:HighlightText] dark:forced-colors:[--checkbox-checked-bg:Highlight] dark:forced-colors:group-data-disabled:[--checkbox-check:Highlight] [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-zinc-900)] [--checkbox-checked-border:var(--color-zinc-950)]/90 dark:[--checkbox-checked-bg:var(--color-zinc-600)]"
      >
        <svg className="size-4 stroke-(--checkbox-check) opacity-0 group-data-checked:opacity-100 sm:h-3.5 sm:w-3.5" viewBox="0 0 14 14" fill="none">
          <path className="opacity-100 group-data-indeterminate:opacity-0" d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path className="opacity-0 group-data-indeterminate:opacity-100" d="M3 7H11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </span>
    </Headless.Checkbox>
  );
}