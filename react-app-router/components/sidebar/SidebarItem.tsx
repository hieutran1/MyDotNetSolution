import * as Headless from "@headlessui/react";
import { useCurrent } from "internal/current.context";

export default function SidebarItem({
  // current,
  href,
  children
}: {
  // current?: boolean;
  href?: string;
  children?: React.ReactNode;
}) {
  const { current, updateCurrent, ref } = useCurrent();

  return (
    <span className="relative">
      {/* {current && <span
        className="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-950 dark:bg-white"
        style={{ opacity: 1 }}></span>} */}

      {/* <Headless.Transition show={href === current} transition as="span" className={"duration-500 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in" +
        " absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-950 dark:bg-white"
      } /> */}

      <Headless.Button
        ref={ref}
        as="a"
        href={'#'}
        data-current={current ? true : null}
        className="flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:last:data-[slot=icon]:ml-auto *:last:data-[slot=icon]:size-5 sm:*:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 data-current:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white dark:data-current:*:data-[slot=icon]:fill-white"
        onClick={(event) => { updateCurrent(href); event.preventDefault(); }}

      >
        <span
          className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
        ></span>
        {children}
      </Headless.Button>
    </span>
  );
}