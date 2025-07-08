export default function TableCell({
    children,
    className = '',
    bleed
}: {
    children?: React.ReactNode;
    className?: string;
    bleed?: boolean;
}) {
    return (
        <td
            className={
                (className ? className + ' ' : '') +
                "relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5" +
                (!bleed ? " py-4 sm:first:pl-1 sm:last:pr-1" : " py-2")
            }
        >
            {children}
        </td>
    );
}