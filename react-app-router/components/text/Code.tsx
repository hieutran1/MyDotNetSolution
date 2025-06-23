export default function Code({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            {children}
        </code>
    );
}