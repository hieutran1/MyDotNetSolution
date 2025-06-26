export default function TableHeader({
    children,
    className = '',
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <th
            className={`text-left text-sm font-semibold text-gray-700 dark:text-gray-300 ${className}`}
            style={{ padding: '0.5rem 1rem', borderBottom: '2px solid #e5e7eb' }}
        >
            {children}
        </th>
    );
}