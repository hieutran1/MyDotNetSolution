import * as Headless from "@headlessui/react";

export default function Checkbox({
  color = 'dark/zinc',
  disabled,
  name,
  value,
  defaultChecked,
  checked,
  onChange,
  indeterminate
}: {
  color?: string;
  disabled?: boolean;
  name?: string;
  value?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  indeterminate?: boolean;
}) {
  let className = 'relative isolate flex size-4.5 items-center justify-center rounded-[0.3125rem] sm:size-4 before:absolute before:inset-0 before:-z-10 before:rounded-[calc(0.3125rem-1px)] before:bg-white before:shadow-sm group-data-checked:before:bg-(--checkbox-checked-bg) dark:before:hidden dark:bg-white/5 dark:group-data-checked:bg-(--checkbox-checked-bg) border border-zinc-950/15 group-data-checked:border-transparent group-data-hover:group-data-checked:border-transparent group-data-hover:border-zinc-950/30 group-data-checked:bg-(--checkbox-checked-border) dark:border-white/15 dark:group-data-checked:border-white/5 dark:group-data-hover:group-data-checked:border-white/5 dark:group-data-hover:border-white/30 after:absolute after:inset-0 after:rounded-[calc(0.3125rem-1px)] after:shadow-[inset_0_1px_--theme(--color-white/15%)] dark:after:-inset-px dark:after:hidden dark:after:rounded-[0.3125rem] dark:group-data-checked:after:block group-data-focus:outline-2 group-data-focus:outline-offset-2 group-data-focus:outline-blue-500 group-data-disabled:opacity-50 group-data-disabled:border-zinc-950/25 group-data-disabled:bg-zinc-950/5 group-data-disabled:[--checkbox-check:var(--color-zinc-950)]/50 group-data-disabled:before:bg-transparent dark:group-data-disabled:border-white/20 dark:group-data-disabled:bg-white/2.5 dark:group-data-disabled:[--checkbox-check:var(--color-white)]/50 dark:group-data-checked:group-data-disabled:after:hidden forced-colors:[--checkbox-check:HighlightText] forced-colors:[--checkbox-checked-bg:Highlight] forced-colors:group-data-disabled:[--checkbox-check:Highlight] dark:forced-colors:[--checkbox-check:HighlightText] dark:forced-colors:[--checkbox-checked-bg:Highlight] dark:forced-colors:group-data-disabled:[--checkbox-check:Highlight]';

  switch (color) {
    case 'dark/zinc':
      className += ' [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-zinc-900)] [--checkbox-checked-border:var(--color-zinc-950)]/90 dark:[--checkbox-checked-bg:var(--color-zinc-600)]';

      break;
    case 'dark/white':
      className += ' [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-zinc-900)] [--checkbox-checked-border:var(--color-zinc-950)]/90 dark:[--checkbox-check:var(--color-zinc-900)] dark:[--checkbox-checked-bg:var(--color-white)] dark:[--checkbox-checked-border:var(--color-zinc-950)]/15';
      break;
    case 'dark':
      className += ' [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-zinc-900)] [--checkbox-checked-border:var(--color-zinc-950)]/90';
      break;
    case 'zinc':
      className += ' [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-zinc-600)] [--checkbox-checked-border:var(--color-zinc-700)]/90';
      break;
    case 'white':
      className += ' [--checkbox-check:var(--color-zinc-900)] [--checkbox-checked-bg:var(--color-white)] [--checkbox-checked-border:var(--color-zinc-950)]/15';
      break;
    case 'red':
      className += ' [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-red-600)] [--checkbox-checked-border:var(--color-red-700)]/90';
      break;
    case 'orange':
      className += ' [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-orange-500)] [--checkbox-checked-border:var(--color-orange-600)]/90';
      break;
    case 'amber':
      className += ' [--checkbox-check:var(--color-amber-950)] [--checkbox-checked-bg:var(--color-amber-400)] [--checkbox-checked-border:var(--color-amber-500)]/80';
      break;

    case 'yellow':
      className += ' [--checkbox-check:var(--color-yellow-950)] [--checkbox-checked-bg:var(--color-yellow-300)] [--checkbox-checked-border:var(--color-yellow-400)]/80'
      break;

    case 'lime':
      className += ' [--checkbox-check:var(--color-lime-950)] [--checkbox-checked-bg:var(--color-lime-300)] [--checkbox-checked-border:var(--color-lime-400)]/80'
      break;

    case 'green':
      className += ' [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-green-600)] [--checkbox-checked-border:var(--color-green-700)]/90';
      break;

    case 'emerald':
      className += ' [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-emerald-600)] [--checkbox-checked-border:var(--color-emerald-700)]/90'
      break;

    case 'teal':
      className += ' [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-teal-600)] [--checkbox-checked-border:var(--color-teal-700)]/90'
      break;

    case 'cyan':
      className += ' [--checkbox-check:var(--color-cyan-950)] [--checkbox-checked-bg:var(--color-cyan-300)] [--checkbox-checked-border:var(--color-cyan-400)]/80'
      break;

    case 'sky':
      className += ' [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-sky-500)] [--checkbox-checked-border:var(--color-sky-600)]/80';
      break;

    case 'blue':
      className += ' [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-blue-600)] [--checkbox-checked-border:var(--color-blue-700)]/90'
      break;

    case 'indigo':
      className += ' [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-indigo-500)] [--checkbox-checked-border:var(--color-indigo-600)]/90'
      break;

    case 'violet':
      className += ' [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-indigo-500)] [--checkbox-checked-border:var(--color-indigo-600)]/90'
      break;

    case 'purple':
      className += ' [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-purple-500)] [--checkbox-checked-border:var(--color-purple-600)]/90'
      break;

    case 'fuchsia':
      className += ' [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-fuchsia-500)] [--checkbox-checked-border:var(--color-fuchsia-600)]/90'
      break;

    case 'pink':
      className += ' [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-pink-500)] [--checkbox-checked-border:var(--color-pink-600)]/90'
      break;

    case 'rose':
      className += ' [--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-rose-500)] [--checkbox-checked-border:var(--color-rose-600)]/90'
      break;

    default:
      break;
  }

  return (
    <Headless.Checkbox
      as="span"
      data-slot="control"
      value={value}
      defaultChecked={defaultChecked}
      checked={checked}
      onChange={onChange}
      name={name}
      className="group inline-flex focus:outline-hidden"
      indeterminate={indeterminate}
      disabled={disabled}
    >
      <span
        className={className}
      >
        <svg className="size-4 stroke-(--checkbox-check) opacity-0 group-data-checked:opacity-100 sm:h-3.5 sm:w-3.5" viewBox="0 0 14 14" fill="none">
          <path className="opacity-100 group-data-indeterminate:opacity-0" d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path className="opacity-0 group-data-indeterminate:opacity-100" d="M3 7H11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </span>
    </Headless.Checkbox>
  );
}