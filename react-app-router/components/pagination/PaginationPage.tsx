import { Button } from "../button";

export default function PaginationPage({
    href,
    children,
    current
}: {
    href?: string;
    children: React.ReactNode;
    current?: boolean;
}) {
    return (
        <Button plain
            className={
                "min-w-9 before:absolute before:-inset-px before:rounded-lg" +
                (current ? " before:bg-zinc-950/5 dark:before:bg-white/10" : "")
            }
            href={href}
            aria_label={`Page ${children}`}
            aria_current={current ? "page" : undefined}
            disabled={href ? false : true}

        >
            <span className="-mx-0.5">
                {children}
            </span>
        </Button>
    );
}