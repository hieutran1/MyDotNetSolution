import { Button } from "@headlessui/react";
import type React from "react";

export default function NavbarItem({
  current,
  href,
  children,
  className,
  onClick,
  ...ariaAttributes
}: {
  current?: boolean;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaAttributes?: Partial<React.AriaAttributes>
}) {
  return (
    <span className="relative">
      {current && <span
        className="absolute inset-x-2 -bottom-2.5 h-0.5 rounded-full bg-zinc-950 dark:bg-white"
        style={{ opacity: 1 }}></span>}

      <Button
        as={href ? 'a' : 'button'}
        className={"relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white"}
        data-current={current}
        href={href}
        onClick={onClick}
        aria-label={ariaAttributes?.["aria-label"]}
      >
        <span className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"></span>
        {children}
      </Button>
    </span>
  );
}