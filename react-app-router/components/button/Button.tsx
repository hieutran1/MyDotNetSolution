import * as Headless from "@headlessui/react";

export default function Button({
  type = 'button',
  color = 'zinc',
  outline = false,
  plain = false,
  disabled = false,
  href,
  children,
  onClick,
  className = ''
}: {
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  outline?: boolean;
  plain?: boolean;
  disabled?: boolean;
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  let componentColor =
    'relative isolate inline-flex items-baseline justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6 focus:not-data-focus:outline-hidden data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500 data-disabled:opacity-50 *:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon) sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-hover:[--btn-icon:ButtonText] border-transparent';

  if (plain) {
    componentColor += 
      ' text-zinc-950 data-active:bg-zinc-950/5 data-hover:bg-zinc-950/5' + 
      ' dark:text-white dark:data-active:bg-white/10 dark:data-hover:bg-white/10 [--btn-icon:var(--color-zinc-500)] data-active:[--btn-icon:var(--color-zinc-700)] data-hover:[--btn-icon:var(--color-zinc-700)] dark:[--btn-icon:var(--color-zinc-500)] dark:data-active:[--btn-icon:var(--color-zinc-400)] dark:data-hover:[--btn-icon:var(--color-zinc-400)] cursor-default';
  }
  else if (color == 'zinc') {
    componentColor +=
      ' bg-(--btn-border) dark:bg-(--btn-bg) before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:bg-(--btn-bg) before:shadow-sm dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)] after:shadow-[inset_0_1px_--theme(--color-white/15%)] data-active:after:bg-(--btn-hover-overlay) data-hover:after:bg-(--btn-hover-overlay) dark:after:-inset-px dark:after:rounded-lg data-disabled:before:shadow-none data-disabled:after:shadow-none' +

      ' text-white [--btn-bg:var(--color-zinc-900)] [--btn-border:var(--color-zinc-950)]/90 [--btn-hover-overlay:var(--color-white)]/10 dark:text-white dark:[--btn-bg:var(--color-zinc-600)] dark:[--btn-hover-overlay:var(--color-white)]/5 [--btn-icon:var(--color-zinc-400)] data-active:[--btn-icon:var(--color-zinc-300)] data-hover:[--btn-icon:var(--color-zinc-300)] cursor-default';
  }
  else {
    componentColor =
      ' bg-(--btn-border) dark:bg-(--btn-bg) before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:bg-(--btn-bg) before:shadow-sm dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)] after:shadow-[inset_0_1px_--theme(--color-white/15%)] data-active:after:bg-(--btn-hover-overlay) data-hover:after:bg-(--btn-hover-overlay) dark:after:-inset-px dark:after:rounded-lg data-disabled:before:shadow-none data-disabled:after:shadow-none' +

      `text-${color}-950 [--btn-bg:var(--color-${color}-300)] [--btn-border:var(--color-${color}-400)]/80 [--btn-hover-overlay:var(--color-white)]/25 [--btn-icon:var(--color-${color}-500)] cursor-default`;
  }

  return (
    <Headless.Button
      as={href ? 'a' : 'button'}
      className={ componentColor }

      disabled={disabled}
      onClick={onClick}
    >
      <span
        className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
      ></span>
      {children}
    </Headless.Button>
  );
}