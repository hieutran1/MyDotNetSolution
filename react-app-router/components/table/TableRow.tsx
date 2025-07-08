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
        <tr className={striped ? "even:bg-zinc-950/2.5 dark:even:bg-white/2.5" : ''}>
            {children}
        </tr>
    );
}