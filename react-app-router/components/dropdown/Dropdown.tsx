import * as Headless from "@headlessui/react";
import { span } from "framer-motion/client";

export default function Dropdown({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <span className={(className ? className + ' ' : '') + "relative"}>
            <Headless.Menu
            // as="div"
            // className="-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900 px-6 py-12 sm:px-8"
            >
                {children}
            </Headless.Menu>
        </span>


    );
}