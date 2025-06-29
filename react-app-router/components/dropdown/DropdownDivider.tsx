import { MenuSeparator } from "@headlessui/react";

export default function DropdownDivider() {
    return (
        <MenuSeparator
            className="col-span-full mx-3.5 my-1 h-px border-0 bg-zinc-950/5 sm:mx-3 dark:bg-white/10 forced-colors:bg-[CanvasText]"
        />
    );
}