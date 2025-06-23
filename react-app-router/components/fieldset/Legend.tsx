export default function Legend({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {children}
        </div>
    );
}