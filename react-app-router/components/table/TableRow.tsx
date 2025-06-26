export default function TableRow({
    href,
    target,
    title,
    children
}: {
    href?: string;
    target?: string;
    title?: string;
    children?: React.ReactNode;
}) {
    return (
        <tr
            className="hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
            title={title}
            {...(href ? { onClick: () => window.open(href, target) } : {})}
        >
            {children}
        </tr>
    );
}