import { HrefProvider } from "internal/href.context";

export default function TableRow({
    href,
    target,
    title,
    children,
    striped = false
}: {
    href?: string;
    target?: string;
    title?: string;
    children?: React.ReactNode;
    striped?: boolean
}) {
    return (
        <HrefProvider value={href}>
            {
                href ?
                    (
                        <tr className="has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/2.5 hover:bg-zinc-950/2.5 dark:hover:bg-white/2.5"
                        >
                            {children}
                        </tr>
                    ) :
                    (<tr className={striped ? "even:bg-zinc-950/2.5 dark:even:bg-white/2.5" : ''}>
                        {children}
                    </tr>)
            }

        </HrefProvider>
    );
}