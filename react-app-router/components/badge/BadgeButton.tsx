import { Button } from "@headlessui/react";

export default function BadgeButton({
    color = 'zinc',
    href,
    children
}: {
    color?: string;
    href?: string;
    children?: React.ReactNode;
}) {
    return (
        <Button
            as={href ? 'a' : 'button'}
            href={href ? href : null}
            className={'group relative inline-flex rounded-md focus:not-data-focus:outline-hidden data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500'}
        >
            <span className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden" aria-hidden="true"></span>
            <span
                className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-zinc-600/10 text-zinc-700 group-data-hover:bg-zinc-600/20 dark:bg-white/5 dark:text-zinc-400 dark:group-data-hover:bg-white/10"
            >
                {children}
            </span>
        </Button>
    )
}