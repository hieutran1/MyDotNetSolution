export default function Strong({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <strong className="font-semibold text-gray-900 dark:text-gray-100">
            {children}
        </strong>
    );
}