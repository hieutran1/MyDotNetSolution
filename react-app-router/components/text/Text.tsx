export default function Text({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
            {children}
        </p>
    );
}