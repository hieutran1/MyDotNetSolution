export default function AlertBody({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="text-sm text-gray-500 dark:text-gray-400">
            {children}
        </div>
    );
}