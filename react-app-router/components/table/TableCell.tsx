export default function TableCell({
    children,
    className = '',
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <td
            className={`px-4 py-2 text-zinc-700 dark:text-zinc-300 ${className}`}
            style={{ verticalAlign: 'top' }}
        >
            {children}
        </td>
    );
}