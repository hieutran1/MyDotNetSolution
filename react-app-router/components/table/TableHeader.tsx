export default function TableHeader({
    children,
    className = '',
    bleed
}: {
    children?: React.ReactNode;
    className?: string;
    bleed?: boolean;
}) {
    return (
        <th
            className={
                (className ? className + ' ' : '') +
                "border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10" +
                (!bleed ? " sm:first:pl-1 sm:last:pr-1" : "")
            }
        >
            {children}
        </th>
    );
}