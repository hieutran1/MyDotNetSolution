import { Link } from "react-router";
import * as Headless from "@headlessui/react";

export default function TextLink({
    children,
    href,
}: {
    children: React.ReactNode;
    href: string;
}) {
    return (
        <Headless.Button
            as="a"
            href={href}
            className="text-zinc-950 underline decoration-zinc-950/50 data-hover:decoration-zinc-950 dark:text-white dark:decoration-white/50 dark:data-hover:decoration-white">
            {children}
        </Headless.Button>
    );
}